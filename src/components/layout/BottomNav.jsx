import { ClipboardList, LayoutDashboard, Server, SquareCheckBig, UserRound } from "lucide-react"
import { NavLink } from "react-router-dom"

const items = [
  { to: "/app", label: "Home", icon: LayoutDashboard, end: true },
  { to: "/app/tickets", label: "Tickets", icon: ClipboardList },
  { to: "/app/tasks", label: "Tasks", icon: SquareCheckBig },
  { to: "/app/assets", label: "Assets", icon: Server },
  { to: "/app/profile", label: "Profile", icon: UserRound },
]

export default function BottomNav() {
  return (
    <nav className="shrink-0 border-t border-slate-200 bg-white/95 px-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-md">
      <ul className="grid grid-cols-5 items-end">
        {items.map(({ to, label, icon: Icon, end }) => (
          <li key={to} className="min-w-0">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-semibold leading-none transition ${
                  isActive ? "text-brand-600" : "text-slate-400 hover:text-slate-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl transition ${isActive ? "bg-brand-50" : ""}`}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.4 : 2} />
                  </span>
                  <span className="w-full truncate text-center">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
