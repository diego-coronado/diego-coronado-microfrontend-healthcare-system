// import "tailwindcss/tailwind.css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { appointments } from "@/data/dummy-data";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";

export default function Appointments() {
  return (
    <div className="h-full flex flex-col space-y-4 md:space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl dark:text-white">
          Appointments
        </h1>
        <Button>Schedule Appointment</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">
              Today's Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-white">
              {
                appointments.filter(
                  (a) => a.date === new Date().toISOString().split("T")[0]
                ).length
              }
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-white">
              {appointments.filter((a) => a.status === "scheduled").length}
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-white">
              {appointments.filter((a) => a.status === "completed").length}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 flex-1">
        <Card className="dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <CardHeader>
            <CardTitle className="dark:text-white">Calendar</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            <Calendar className="dark:bg-gray-800 dark:text-white" />
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <CardHeader>
            <CardTitle className="dark:text-white">
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ScrollArea className="h-full w-full">
              <div className="relative w-full min-w-max">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b dark:border-gray-700">
                      <th className="h-12 px-4 text-left align-middle font-medium dark:text-gray-200">
                        Time
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium dark:text-gray-200">
                        Patient
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium dark:text-gray-200">
                        Doctor
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium dark:text-gray-200">
                        Type
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium dark:text-gray-200">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr
                        key={appointment.id}
                        className="border-b dark:border-gray-700"
                      >
                        <td className="p-4 align-middle dark:text-gray-300">
                          {appointment.time}
                        </td>
                        <td className="p-4 align-middle dark:text-gray-300">
                          {appointment.patientName}
                        </td>
                        <td className="p-4 align-middle dark:text-gray-300">
                          {appointment.doctorName}
                        </td>
                        <td className="p-4 align-middle dark:text-gray-300">
                          {appointment.type}
                        </td>
                        <td className="p-4 align-middle">
                          <Badge
                            variant={
                              appointment.status === "completed"
                                ? "default"
                                : appointment.status === "scheduled"
                                ? "secondary"
                                : "destructive"
                            }
                            className="dark:bg-gray-700 dark:text-white"
                          >
                            {appointment.status}
                          </Badge>
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
    </div>
  );
}
