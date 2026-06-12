import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg pb-28 max-sm:pb-24">
      <Outlet />
      <BottomNav />
    </div>
  );
}
