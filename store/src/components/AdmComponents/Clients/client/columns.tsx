"use client"

import { User, UserInformation } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"

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


export const columns: ColumnDef<userDataT>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "cin",
    header: "CIN",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "tel",
    header: "Tel",
  },
]
