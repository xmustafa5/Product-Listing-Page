"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", inStock: 422, onOrder: 150 },
  { date: "2024-04-02", inStock: 397, onOrder: 180 },
  { date: "2024-04-03", inStock: 367, onOrder: 220 },
  { date: "2024-04-04", inStock: 442, onOrder: 260 },
  { date: "2024-04-05", inStock: 573, onOrder: 290 },
  { date: "2024-04-06", inStock: 501, onOrder: 340 },
  { date: "2024-04-07", inStock: 445, onOrder: 180 },
  { date: "2024-04-08", inStock: 609, onOrder: 320 },
  { date: "2024-04-09", inStock: 99, onOrder: 110 },
  { date: "2024-04-10", inStock: 461, onOrder: 190 },
  { date: "2024-04-11", inStock: 527, onOrder: 350 },
  { date: "2024-04-12", inStock: 492, onOrder: 210 },
  { date: "2024-04-13", inStock: 542, onOrder: 380 },
  { date: "2024-04-14", inStock: 237, onOrder: 220 },
  { date: "2024-04-15", inStock: 220, onOrder: 170 },
  { date: "2024-04-16", inStock: 238, onOrder: 190 },
  { date: "2024-04-17", inStock: 646, onOrder: 360 },
  { date: "2024-04-18", inStock: 564, onOrder: 410 },
  { date: "2024-04-19", inStock: 443, onOrder: 180 },
  { date: "2024-04-20", inStock: 189, onOrder: 150 },
  { date: "2024-04-21", inStock: 237, onOrder: 200 },
  { date: "2024-04-22", inStock: 324, onOrder: 170 },
  { date: "2024-04-23", inStock: 238, onOrder: 230 },
  { date: "2024-04-24", inStock: 587, onOrder: 290 },
  { date: "2024-04-25", inStock: 315, onOrder: 250 },
  { date: "2024-04-26", inStock: 175, onOrder: 130 },
  { date: "2024-04-27", inStock: 583, onOrder: 420 },
  { date: "2024-04-28", inStock: 222, onOrder: 180 },
  { date: "2024-04-29", inStock: 515, onOrder: 240 },
  { date: "2024-04-30", inStock: 654, onOrder: 380 },
  { date: "2024-05-01", inStock: 265, onOrder: 220 },
  { date: "2024-05-02", inStock: 493, onOrder: 310 },
  { date: "2024-05-03", inStock: 447, onOrder: 190 },
  { date: "2024-05-04", inStock: 585, onOrder: 420 },
  { date: "2024-05-05", inStock: 681, onOrder: 390 },
  { date: "2024-05-06", inStock: 698, onOrder: 520 },
  { date: "2024-05-07", inStock: 588, onOrder: 300 },
  { date: "2024-05-08", inStock: 249, onOrder: 210 },
  { date: "2024-05-09", inStock: 327, onOrder: 180 },
  { date: "2024-05-10", inStock: 493, onOrder: 330 },
  { date: "2024-05-11", inStock: 535, onOrder: 270 },
  { date: "2024-05-12", inStock: 397, onOrder: 240 },
  { date: "2024-05-13", inStock: 397, onOrder: 160 },
  { date: "2024-05-14", inStock: 648, onOrder: 490 },
  { date: "2024-05-15", inStock: 673, onOrder: 380 },
  { date: "2024-05-16", inStock: 538, onOrder: 400 },
  { date: "2024-05-17", inStock: 699, onOrder: 420 },
  { date: "2024-05-18", inStock: 515, onOrder: 350 },
  { date: "2024-05-19", inStock: 435, onOrder: 180 },
  { date: "2024-05-20", inStock: 377, onOrder: 230 },
  { date: "2024-05-21", inStock: 182, onOrder: 140 },
  { date: "2024-05-22", inStock: 181, onOrder: 120 },
  { date: "2024-05-23", inStock: 452, onOrder: 290 },
  { date: "2024-05-24", inStock: 494, onOrder: 220 },
  { date: "2024-05-25", inStock: 401, onOrder: 250 },
  { date: "2024-05-26", inStock: 413, onOrder: 170 },
  { date: "2024-05-27", inStock: 620, onOrder: 460 },
  { date: "2024-05-28", inStock: 433, onOrder: 190 },
  { date: "2024-05-29", inStock: 178, onOrder: 130 },
  { date: "2024-05-30", inStock: 540, onOrder: 280 },
  { date: "2024-05-31", inStock: 378, onOrder: 230 },
  { date: "2024-06-01", inStock: 378, onOrder: 200 },
  { date: "2024-06-02", inStock: 670, onOrder: 410 },
  { date: "2024-06-03", inStock: 203, onOrder: 160 },
  { date: "2024-06-04", inStock: 639, onOrder: 380 },
  { date: "2024-06-05", inStock: 188, onOrder: 140 },
  { date: "2024-06-06", inStock: 494, onOrder: 250 },
  { date: "2024-06-07", inStock: 523, onOrder: 370 },
  { date: "2024-06-08", inStock: 585, onOrder: 320 },
  { date: "2024-06-09", inStock: 638, onOrder: 480 },
  { date: "2024-06-10", inStock: 255, onOrder: 200 },
  { date: "2024-06-11", inStock: 192, onOrder: 150 },
  { date: "2024-06-12", inStock: 692, onOrder: 420 },
  { date: "2024-06-13", inStock: 181, onOrder: 130 },
  { date: "2024-06-14", inStock: 626, onOrder: 380 },
  { date: "2024-06-15", inStock: 507, onOrder: 350 },
  { date: "2024-06-16", inStock: 571, onOrder: 310 },
  { date: "2024-06-17", inStock: 675, onOrder: 520 },
  { date: "2024-06-18", inStock: 207, onOrder: 170 },
  { date: "2024-06-19", inStock: 541, onOrder: 290 },
  { date: "2024-06-20", inStock: 608, onOrder: 450 },
  { date: "2024-06-21", inStock: 269, onOrder: 210 },
  { date: "2024-06-22", inStock: 517, onOrder: 270 },
  { date: "2024-06-23", inStock: 680, onOrder: 530 },
  { date: "2024-06-24", inStock: 232, onOrder: 180 },
  { date: "2024-06-25", inStock: 241, onOrder: 190 },
  { date: "2024-06-26", inStock: 634, onOrder: 380 },
  { date: "2024-06-27", inStock: 648, onOrder: 490 },
  { date: "2024-06-28", inStock: 249, onOrder: 200 },
  { date: "2024-06-29", inStock: 203, onOrder: 160 },
  { date: "2024-06-30", inStock: 646, onOrder: 400 },
]

const chartConfig = {
  inventory: {
    label: "Inventory",
  },
  inStock: {
    label: "In Stock",
    color: "hsl(var(--chart-1))",
  },
  onOrder: {
    label: "On Order",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function HomeCharts() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Inventory Levels - Interactive</CardTitle>
          <CardDescription>
            Showing inventory levels for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillInStock" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-inStock)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-inStock)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillOnOrder" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-onOrder)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-onOrder)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="onOrder"
              type="natural"
              fill="url(#fillOnOrder)"
              stroke="var(--color-onOrder)"
              stackId="a"
            />
            <Area
              dataKey="inStock"
              type="natural"
              fill="url(#fillInStock)"
              stroke="var(--color-inStock)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
