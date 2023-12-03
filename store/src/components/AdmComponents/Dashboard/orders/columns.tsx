"use client"

import { User } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../../../../../components/ui/dropdown-menu";
import { OrderDetailsT, OrderTableDataT } from "../../../../types/general";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type OrderT = {
  address: string;
  name: string;
  tel: string;
  total: number;
}


export const columns: (handleModal : (details : OrderTableDataT ) => any) => ColumnDef<OrderTableDataT>[] = (handleModal) => {
  
  return [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "tel",
    header: "Tel",
  },
  {
    accessorKey : "total",
    header : "Total"
  },{
    id: "actions",
    cell: ({ row }) => {
      const details = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="">
              ...
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                if (details){
                 handleModal(details)
                }
              }}
            >
              Details
            </DropdownMenuItem>
            
            
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]}
