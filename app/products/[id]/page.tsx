import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Barcode, Archive, AlertCircle, Building2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import DetailsItem from './components/DetailsItem'
import WarehouseItemWithProgressBar from './components/WarehouseItemWithProgressBar'
import { RecentDetailsProductHistory } from './components/RecentDetailsProductHistory'

function page() {
  // Sample warehouse data
  const warehouseStocks = [
    { name: "Main Warehouse", stock: 45 },
    { name: "East Coast Hub", stock: 32 },
    { name: "West Coast Center", stock: 23 },
    { name: "South Facility", stock: 0 },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <Card className="shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Product Details</CardTitle>
            <Badge 
              variant={"default"} 
              className="px-4 py-1"
            >
              In Stock
            </Badge>
          </div>
          <Separator className="mt-4" />
        </CardHeader>
        <CardContent >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DetailsItem icon={<Package className="h-5 w-5 text-primary" />} title="Product Name" value="Premium Headphones" />
            <DetailsItem icon={<Barcode className="h-5 w-5 text-primary" />} title="SKU" value="123456" />
            <DetailsItem icon={<Package className="h-5 w-5 text-primary" />} title="Category" value="Electronics" />
            <DetailsItem icon={<Archive className="h-5 w-5 text-primary" />} title="Quantity" value="100 units" />
            <DetailsItem icon={<AlertCircle className="h-5 w-5 text-primary" />} title="Stock Status" value="In Stock" />
          </div>

        </CardContent>
      </Card>
      <div className="rounded-xl border bg-gradient-to-b from-background to-secondary/10 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Stock Level By Warehouse</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {warehouseStocks.map((warehouse) => (
            <WarehouseItemWithProgressBar warehouse={warehouse} key={warehouse.name} />
          ))}
        </div>

      </div>

      <div className="mt-6 flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Recent Product History
              </CardTitle>
            </CardHeader>
            <CardContent className="px-10">
              <RecentDetailsProductHistory />
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

export default page
