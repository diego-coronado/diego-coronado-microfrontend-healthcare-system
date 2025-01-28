import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { labResults } from "@/data/dummy-data";
import { Badge } from "@/components/ui/badge";

export default function Laboratory() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Laboratory
        </h1>
        <Button>New Test</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{labResults.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {
                labResults.filter((result) => result.status === "pending")
                  .length
              }
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {
                labResults.filter(
                  (result) =>
                    result.status === "completed" &&
                    result.date === new Date().toISOString().split("T")[0]
                ).length
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 space-y-0 md:flex-row md:items-center md:justify-between">
          <CardTitle>Test Results</CardTitle>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
            <Input
              placeholder="Search tests..."
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
                      Patient
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Test Type
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Date
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Status
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Result
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {labResults.map((result) => (
                    <tr key={result.id} className="border-b">
                      <td className="p-4 align-middle font-medium">
                        {result.id}
                      </td>
                      <td className="p-4 align-middle">{result.patientName}</td>
                      <td className="p-4 align-middle">{result.testType}</td>
                      <td className="p-4 align-middle">{result.date}</td>
                      <td className="p-4 align-middle">
                        <Badge
                          variant={
                            result.status === "completed"
                              ? "default"
                              : result.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {result.status}
                        </Badge>
                      </td>
                      <td className="p-4 align-middle">
                        {result.result || "Pending"}
                      </td>
                      <td className="p-4 align-middle text-right">
                        <Button variant="outline" size="sm">
                          {result.status === "pending" ? "Update" : "View"}
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
