import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { medicines } from "@/data/dummy-data";
import { Badge } from "@/components/ui/badge";

export default function Pharmacy() {
  const lowStock = medicines.filter((med) => med.stock <= med.reorderLevel);
  const totalValue = medicines.reduce(
    (acc, med) => acc + med.stock * med.price,
    0
  );

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Pharmacy
        </h1>
        <Button>Add Medicine</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Medicines</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{medicines.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{lowStock.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${totalValue.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 space-y-0 md:flex-row md:items-center md:justify-between">
          <CardTitle>Medicine Inventory</CardTitle>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
            <Input
              placeholder="Search medicines..."
              className="md:w-[200px] lg:w-[300px]"
            />
            <Button>Search</Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full">
            <div className="relative w-full min-w-max">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      ID
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Name
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Category
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Stock
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Price
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Expiry Date
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {medicines.map((medicine) => (
                    <tr key={medicine.id} className="border-b">
                      <td className="p-4 align-middle font-medium">
                        {medicine.id}
                      </td>
                      <td className="p-4 align-middle">{medicine.name}</td>
                      <td className="p-4 align-middle">{medicine.category}</td>
                      <td className="p-4 align-middle">
                        <Badge
                          variant={
                            medicine.stock <= medicine.reorderLevel
                              ? "destructive"
                              : "default"
                          }
                        >
                          {medicine.stock} {medicine.unit}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">
                        ${medicine.price.toFixed(2)}
                      </td>
                      <td className="p-4 align-middle">
                        {medicine.expiryDate}
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="outline" size="sm">
                          Update Stock
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
