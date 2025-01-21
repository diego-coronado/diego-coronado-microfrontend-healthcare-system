import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { AppSidebar } from "./AppSidebar";

export default function Layout() {
  return (
    <div className="flex h-screen w-screen">
      <AppSidebar />
      <div className="flex flex-col flex-1 h-full w-full overflow-hidden">
        <Header />
        <main className="w-full flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
