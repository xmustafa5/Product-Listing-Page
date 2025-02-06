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
  
  const history = [
    {
      date: "2024-01-01",
      productName: "Product 1",
      transactionType: "Inbound",
      quantity: 10,
      user: "John Doe",
      warehouse: "Warehouse 1",
    },
    {
      date: "2024-01-01",
      productName: "Product 2",
      transactionType: "Outbound",
      quantity: 5,
      user: "Jane Doe",
      warehouse: "Warehouse 2",
    },
    {
      date: "2024-01-01",
      productName: "Product 3",
      transactionType: "Inbound",
      quantity: 15,
      user: "Jane Doe",
      warehouse: "Warehouse 3",
    },
    {
      date: "2024-01-01",
      productName: "Product 4",
      transactionType: "Outbound",
      quantity: 10,
      user: "Jane Doe",
      warehouse: "Warehouse 4",
    },
    {
      date: "2024-01-01",
      productName: "Product 5",
      transactionType: "Inbound",
      quantity: 15,
      user: "Jane Doe",
      warehouse: "Warehouse 5",
    },
    {
      date: "2024-01-01",
      productName: "Product 6",
      transactionType: "Outbound",
      quantity: 10,
      user: "Jane Doe",
      warehouse: "Warehouse 6",
    },
  ]

  export function RecentDetailsProductHistory() {
    return (
      <Table>
        <TableCaption>A list of your recent Transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Date/time</TableHead>
            <TableHead>product Name</TableHead>
            <TableHead>Transaction Type</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Warehouse</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((history) => (
            <TableRow key={history.date}>
              <TableCell className="font-medium">{history.date}</TableCell>
              <TableCell>{history.productName}</TableCell>
              <TableCell>{history.transactionType}</TableCell>
              <TableCell >{history.quantity}</TableCell>
              <TableCell >{history.user}</TableCell>
              <TableCell >{history.warehouse}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>View All</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  