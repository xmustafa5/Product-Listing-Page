"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions";
import { Product } from "../data/schema";
// export type payment = {
//     name: string;
//     SKU: string;
//     quantity: number;
//     stockStatus: string;
//     category: string;
// };

export const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "SKU",
    header:"SKU",   
  },
  { accessorKey: "quantity", header: "Quantity" },
  {
    accessorKey: "stockStatus",
    header: "Stock Status",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
  
];
