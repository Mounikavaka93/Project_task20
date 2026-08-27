import { Outlet } from "react-router-dom"
import BottomNav from "./BottomNav"

export default function AppLayout() {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col bg-slate-50">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  )
}
