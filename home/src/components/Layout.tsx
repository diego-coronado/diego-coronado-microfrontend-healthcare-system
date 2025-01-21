import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { AppSidebar } from "./AppSidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="container py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
