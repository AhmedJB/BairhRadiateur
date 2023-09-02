"use client"

import { ImportedProduct, User, UserInformation } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ProductT, generalProuctInfotT } from "../../../../types/general"


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


export const columns: ( ) => ColumnDef<ImportedProduct | undefined>[] = () => {

  const importProductMutation = api.adminHandler.importProduct.useMutation(importProductRespMutation)
  
  const handleImport = (product : ProductT) => {
    let body = {
      name : product.name,
      price : product.price_vente,
      p_id : product.p_id
    }
    importProductMutation.mutate(body)

    
  }
  
  return [
    {
      accessorKey: "productId",
      header: "ProductId",
    },
    {
      accessorKey: "name",
      header: "Nom",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "price",
      header: "Prix",
    },
    {
      accessorKey: "isEnabled",
      header: "Visible",
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
                  //handleImport(product)
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