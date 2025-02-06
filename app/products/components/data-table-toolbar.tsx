"use client"

import { Table } from "@tanstack/react-table"
import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}
import { statuses  } from "../data/data"
import { X } from "lucide-react"

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  
  // Get unique categories from the table data
  const uniqueCategories = React.useMemo(() => {
    const categories = new Set<string>()
    console.log(table.getPreFilteredRowModel().rows.forEach((row) => {
      const category = (row.getValue("category") as string)
      if (category) categories.add(category)
    }))
    table.getPreFilteredRowModel().rows.forEach((row) => {
      const category = (row.getValue("category") as string)
      if (category) categories.add(category)
    })
    return Array.from(categories)
  }, [table])

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("stockStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("stockStatus")}
            title="Stock Status"
            options={statuses}
          />
        )}
        <Select
          onValueChange={(value) => 
            table.getColumn("category")?.setFilterValue(value === "all" ? "" : value)
          }
          value={(table.getColumn("category")?.getFilterValue() as string) || "all"}

        >
          <SelectTrigger className="w-[180px] h-8">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all">All Categories</SelectItem>
              {uniqueCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
