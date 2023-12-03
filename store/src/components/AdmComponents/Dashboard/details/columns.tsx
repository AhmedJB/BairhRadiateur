"use client"

import { User } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../../../../../components/ui/dropdown-menu";
import { OrderDetailsT, OrderTableDataT } from "../../../../types/general";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.



export const columns: () => ColumnDef<OrderDetailsT>[] = () => {
  
  return [
  {
    accessorKey: "product_id",
    header: "ID Produit",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "quantity",
    header: "Quantite",
  },
  {
    accessorKey : "price",
    header : "Prix"
  }
]}
