import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const orders = [
    {
      orderId: "INV001",
      date: "2024-01-01",
      customer: "John Doe",
      status: "Paid",
    },
    {
      orderId: "INV002",
      date: "2024-01-01",
      customer: "Jane Doe",
      status: "Pending",
    },
    {
      orderId: "INV003",
      date: "2024-01-01",
      customer: "Jane Doe",
      status: "Unpaid",
    },
    {
      orderId: "INV004",
      date: "2024-01-01",
      customer: "Jane Doe",
      status: "Paid",
    },
    {
      orderId: "INV005",
      date: "2024-01-01",
      customer: "Jane Doe",
      status: "Paid",
    },
    {
      orderId: "INV006",
      date: "2024-01-01",
      customer: "Jane Doe",
      status: "Pending",
    },
    {
      orderId: "INV007",
      date: "2024-01-01",
      customer: "Jane Doe",
      status: "Unpaid",
    },
  ]

  export function RecentOrders() {
    return (
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell className="font-medium">{order.orderId}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell >{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>View All</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  