import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Package, PackageCheck, Users, MapPin, Plus, BarChart, Eye, Edit, Phone } from 'lucide-react'
import React from 'react'
import DialogAddWarehouse from './components/DialogAddWarehouse'

export default function page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Warehouse</h1>
        <Dialog>
      <DialogTrigger asChild>
        <Button >
        <Plus className=" h-4 w-4" />
        Add Warehouse
        </Button>
      </DialogTrigger>
      <DialogAddWarehouse />
    </Dialog>
        
      </div>
      
      <div className='flex flex-wrap gap-4'>
        {[1,2,3,4,5,6,7,8,9,10].map((item) => (
          <Card 
            key={item} 
            className='flex-grow min-w-[350px] basis-[calc(100%-1rem)] sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)] xl:basis-[calc(25%-1rem)]'
          >
            <CardHeader>
              <CardTitle className='flex justify-between items-center' >
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <span>Warehouse {item}</span>
                </div>
                <span className='text-sm font-normal text-muted-foreground'>ID: WH-{item.toString().padStart(3, '0')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-3'>
              <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                  <PackageCheck className="h-4 w-4 text-muted-foreground" />
                  <span className='text-muted-foreground'>Total Items</span>
                </div>
                <span className='font-medium'>1,234</span>  
              </div>
              <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                  <span className='text-muted-foreground'>Capacity</span>
                </div>
                <span className='font-medium'>75%</span>
              </div>
              <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className='text-muted-foreground'>Manager</span>
                </div>
                <span className='font-medium text-green-600'>John Doe</span>
              </div>
              <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className='text-muted-foreground'>Location</span>
                </div>
                <span className='font-medium'>Cider Site</span>
              </div>
              <div className='flex justify-between items-center'>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className='text-muted-foreground'>Contact</span>
                </div>
                <span className='font-medium'>+62 81234567890</span>
              </div>
              <Button variant="secondary" className='w-full'>
                <Eye className=" h-4 w-4" />
                View
              </Button>
              <Button variant="outline" className='w-full'>
                <Edit className=" h-4 w-4" />
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
