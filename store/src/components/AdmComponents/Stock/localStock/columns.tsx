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
import {  importProductRespMutation } from "../../../../Helpers/mutations"
import { api } from "../../../../server/utils/api"
import { toast } from "react-toastify"
import { useQueryClient } from "@tanstack/react-query"

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

type Props = {
  handleModal : (product : ImportedProduct) => any
}


export const columns: (handleModal : (product : ImportedProduct) => any ) => ColumnDef<ImportedProduct | undefined>[] = (handleModal) => {

  const utils = api.useContext();

  const deleteProductRespMutation = {
    onSuccess : (resp :any) => {
      console.log(resp);
      console.log("success")
      utils.adminHandler.showProductWithInfo.invalidate().catch(e=> console.log(e));
      toast.success("Succès")
      },
      onError : (data : any) => {
      toast.error("failed deleting product") 
      }
  }

  const importProductMutation = api.adminHandler.importProduct.useMutation(importProductRespMutation)
  const deleteProductMutation = api.adminHandler.deleteImportedProduct.useMutation(deleteProductRespMutation)
  
  


  const handleDelete = (product : ImportedProduct | undefined) => {
    if (product){
      const body = {
        id : product.id
      }
      deleteProductMutation.mutate(body);
    }
    

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
      accessorKey: "newPrice",
      header: "Prix Nouveau",
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
                  if (product){
                   handleModal(product)
                  }
                }}
              >
                Modifier
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  handleDelete(product)                
                }}
              >
                Supprimer
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
  
}