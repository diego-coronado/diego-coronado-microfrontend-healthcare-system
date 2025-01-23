import "@/index.css";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardHeader, CardTitle } from "hs-comp-library/components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { patients } from "@/data/dummy-data";
import { Badge } from "@/components/ui/badge";

export default function PatientRecords() {
  console.log(localStorage.getItem("vite-ui-theme"));
  return (
    <div className="space-y-4 md:space-y-6 dark:text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Patient Records
        </h1>
        <Button>Add New Patient</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{patients.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {patients.filter((p) => p.status === "active").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {
                patients.filter(
                  (p) =>
                    new Date(p.lastVisit) >
                    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                ).length
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 space-y-0 md:flex-row md:items-center md:justify-between">
          <CardTitle>Patient List</CardTitle>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
            <Input
              placeholder="Search patients..."
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
                      Date of Birth
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Last Visit
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Status
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b">
                      <td className="p-4 align-middle font-medium">
                        {patient.id}
                      </td>
                      <td className="p-4 align-middle">{patient.name}</td>
                      <td className="p-4 align-middle">
                        {patient.dateOfBirth}
                      </td>
                      <td className="p-4 align-middle">{patient.lastVisit}</td>
                      <td className="p-4 align-middle">
                        <Badge
                          variant={
                            patient.status === "active"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {patient.status}
                        </Badge>
                      </td>
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
