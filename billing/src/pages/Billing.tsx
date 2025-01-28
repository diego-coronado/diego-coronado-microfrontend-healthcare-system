import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { bills } from "@/data/dummy-data";
import { Badge } from "@/components/ui/badge";

export default function Billing() {
  const totalRevenue = bills.reduce((acc, bill) => acc + bill.amount, 0);
  const pendingAmount = bills
    .filter((bill) => bill.status === "pending")
    .reduce((acc, bill) => acc + bill.amount, 0);

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Billing
        </h1>
        <Button>Create Invoice</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${totalRevenue.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${pendingAmount.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{bills.length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full">
            <div className="relative w-full min-w-max">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Invoice ID
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Patient
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Date
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Amount
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Status
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Due Date
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((bill) => (
                    <tr key={bill.id} className="border-b">
                      <td className="p-4 align-middle font-medium">
                        {bill.id}
                      </td>
                      <td className="p-4 align-middle">{bill.patientName}</td>
                      <td className="p-4 align-middle">{bill.date}</td>
                      <td className="p-4 align-middle">
                        ${bill.amount.toFixed(2)}
                      </td>
                      <td className="p-4 align-middle">
                        <Badge
                          variant={
                            bill.status === "paid"
                              ? "default"
                              : bill.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {bill.status}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">{bill.dueDate}</td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
