import { Building2 } from 'lucide-react'
import React from 'react'

function WarehouseItemWithProgressBar({warehouse}: {warehouse: {name: string, stock: number }}) {
  return (
    <div className="relative flex flex-col bg-gradient-to-br from-background via-secondary/10 to-background rounded-xl p-5 border transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      {/* Top section with warehouse info */}
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-sm">{warehouse.name}</h3>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold tracking-tight">
              {warehouse.stock}
            </span>
            <span className="text-sm text-muted-foreground">
              units
            </span>
          </div>
        </div>

        {/* Status indicator */}
        <div 
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            warehouse.stock === 0 
              ? 'bg-destructive/10 text-destructive' 
              : warehouse.stock < 30 
              ? 'bg-yellow-500/10 text-yellow-500' 
              : 'bg-green-500/10 text-green-500'
          }`}
        >
          {warehouse.stock === 0 
            ? 'Out of Stock' 
            : warehouse.stock < 30 
            ? 'Low Stock' 
            : 'In Stock'}
        </div>
      </div>

      {/* Progress bar section */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Stock Level</span>
          <span>{Math.min((warehouse.stock / 100) * 100, 100)}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-secondary/50 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              warehouse.stock === 0 
                ? 'bg-destructive' 
                : warehouse.stock < 30 
                ? 'bg-yellow-500' 
                : 'bg-green-500'
            }`}
            style={{ 
              width: `${Math.min((warehouse.stock / 100) * 100, 100)}%`
            }}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
    </div>
  )
}

export default WarehouseItemWithProgressBar
 