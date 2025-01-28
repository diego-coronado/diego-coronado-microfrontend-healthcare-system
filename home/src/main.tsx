import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "hs-comp-library/components";

import "./index.css";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";
import { NotFound } from "./components/NotFound.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

const PatientRecords = lazy(() => import("hs-patient-records/PatientRecords"));
const Appointments = lazy(() => import("hs-appointments/Appointments"));
const Billing = lazy(() => import("hs-billing/Billing"));
const Laboratory = lazy(() => import("hs-laboratory/Laboratory"));
const Pharmacy = lazy(() => import("hs-pharmacy/Pharmacy"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <SidebarProvider>
        <Router>
          <div className="flex min-h-screen min-w-full bg-background dark:bg-gray-900">
            <div className="flex flex-col flex-1 h-full overflow-hidden">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route
                    path="/patient-records"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <PatientRecords />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/appointments"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Appointments />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/billing"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Billing />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/pharmacy"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Pharmacy />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/laboratory"
                    element={
                      <Suspense fallback={<div>Loading...</div>}>
                        <Laboratory />
                      </Suspense>
                    }
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
