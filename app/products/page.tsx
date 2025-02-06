import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";
import DialogAddProduct from "./components/DialogAddProduct";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
async function getData() {
    // Fetch data from your API here.
    return [
      {
        name: "Product 1",
        SKU: "123456",
        quantity: 10,
        stockStatus: "In Stock",
        category: "Electronics",
      }
    ]
  }
async function page() {
    const data = await getData()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className=" h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogAddProduct />
        </Dialog>
      </div>
      <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  );
}

export default page;
