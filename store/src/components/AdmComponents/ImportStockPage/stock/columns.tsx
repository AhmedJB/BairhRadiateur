"use client"

import { User, UserInformation } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ProductT } from "../../../../types/general"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../components/ui/dropdown-menu"
import { importProductRespMutation } from "../../../../Helpers/mutations"
import { api } from "../../../../server/utils/api"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export type userDataT = {
  id: string,
  name : string,
  email : string,
  cin : string | undefined,
  address : string | undefined,
  tel : string | undefined
}


export const columns: ( ) => ColumnDef<ProductT>[] = () => {

  const importProductMutation = api.adminHandler.importProduct.useMutation(importProductRespMutation)
  
  const handleImport = (product : ProductT) => {
    const body = {
      name : product.name,
      price : product.price_vente,
      p_id : product.p_id
    }
    importProductMutation.mutate(body)

    
  }
  
  return [
    {
      accessorKey: "p_id",
      header: "ProductId",
    },
    {
      accessorKey: "name",
      header: "Nom",
    },
    {
      accessorKey: "ptype",
      header: "type",
    },
    {
      accessorKey: "quantity",
      header: "Quantite",
    },
    {
      accessorKey: "price_vente",
      header: "Prix",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const product = row.original
   
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
                  handleImport(product)
                }}
              >
                Import
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
  
}