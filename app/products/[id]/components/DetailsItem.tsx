import React from 'react'

export default function DetailsItem({icon, title, value}: {icon: React.ReactNode, title: string, value: string}) {
  return (
    <div className="flex items-center space-x-4 bg-secondary/20 p-4 rounded-lg">
    <div className="p-2 bg-primary/10 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <h3 className="font-medium">{value}</h3>
    </div>
  </div>
  )
}
