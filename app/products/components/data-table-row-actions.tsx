"use client"

import { Row } from "@tanstack/react-table"
import { Eye, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"


import { productSchema } from "../data/schema"
import Link from "next/link"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const product = productSchema.parse(row.original)
  return (
    <div className="flex gap-2 items-center">
    <Button variant="ghost" size="icon">
        <Pencil className="h-2 w-2" />
    </Button>
    <Button variant="destructive" size="icon">
        <Trash className="h-2 w-2" />
    </Button>
    <Button variant="ghost" size="icon" asChild>
      <Link href={`/products/${product.SKU}`}>
        <Eye className="h-2 w-2" />
      </Link>
    </Button>
    </div>
  )
}

