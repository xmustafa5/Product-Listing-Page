import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CardContent,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, Terminal } from "lucide-react";
import { HomeCharts } from "./_components/home/HomeCharts";
import { RecentOrders } from "./_components/home/RecentOrders";

interface StatCard {
  title: string;
  count: number;
  description: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function Home() {
  const headerCards: StatCard[] = [
    {
      title: "Total Products",
      count: 100,
      description: "Total number of products in the system",
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Total Orders",
      count: 100,
      description: "Total number of orders in the system",
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Total Users",
      count: 100,
      description: "Total number of users in the system",
    },
    {
      title: "Low Stock items",
      count: 100,
      description: "Total number of items with low stock in the system",
    },
    {
      title: "Total Suppliers",
      count: 100,
      description: "Total number of suppliers in the system",
    },
    {
      title: "Total Warehouses",
      count: 100,
      description: "Total number of warehouses in the system",
    },
  ];

  return (
      <div className="flex flex-1 flex-col gap-4 p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {headerCards.map((card) => (
            <Card
              key={card.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-semibold">
                    {card.title}
                  </CardTitle>
                  {card.trend && (
                    <div
                      className={`flex items-center ${
                        card.trend.isPositive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {card.trend.isPositive ? (
                        <ArrowUpIcon />
                      ) : (
                        <ArrowDownIcon />
                      )}
                      <span className="ml-1">{card.trend.value}%</span>
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{card.count}</span>
                </div>
                <CardDescription className="mt-2">
                  {card.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Notifications Widget */}
        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Recent</h2>
          <div className="flex flex-col gap-4">
            <Alert variant="green">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
            <Alert variant="red">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
            <Alert variant="yellow">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        {/* Charts */}
        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Charts</h2>
          <HomeCharts />
        </div>
        {/* Recent Orders */}
        <div className="mt-6 flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent className="px-10">
              <RecentOrders />
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
