import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";
import { NotFound } from "./components/NotFound.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

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
