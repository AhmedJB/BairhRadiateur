"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  VisibilityState
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../components/ui/table"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
  } from "../../../../../components/ui/dropdown-menu"


import { useEffect ,useState} from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters,setColumnFilterState] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
	getPaginationRowModel : getPaginationRowModel(),
	onColumnVisibilityChange: setColumnVisibility,
  onColumnFiltersChange : setColumnFilterState,
  getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnVisibility,
      columnFilters
    },
  })
  

  useEffect(() => {
	table.setPageSize(23)
  },[])

  return (<>
  <div className="flex justify-between items-center py-4">
       <div className="w-1/3  ">
        <input className="w-full border-2 border-mainBlack rounded-lg p-3" 
          placeholder="Search ..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)}
        >

        </input>
        </div> 
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
		  <button className="p-3 w-[150px] rounded-md text-white bg-mainBlack font-semibold text-lg">
		  	Columns
		  </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  <div className="rounded-md border w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header,i) => {
                return (
                  <TableHead className={`${i === 0 ? "text-red" : "text-blue"}`} key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
	  
    </div>
	<div className="w-full p-6 flex items-center justify-end gap-3">
	<button className="p-3 w-[150px] rounded-md text-white bg-mainBlack font-semibold text-lg"
	onClick={() => table.previousPage()}
	disabled={!table.getCanPreviousPage()}
	>
		Previous
	</button>

	<button className="p-3 w-[150px] rounded-md text-white bg-mainBlack font-semibold text-lg"
	onClick={() => table.nextPage()}
	disabled={!table.getCanNextPage()}
	>
		Next
	</button>
</div>
	
	</>
    
  )
}
