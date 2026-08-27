import { Bell, ChevronRight, LogOut, Settings } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/layout/Header"
import { currentUser } from "../data/mockData"

export default function ProfileScreen() {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("nexus-auth")
    navigate("/welcome", { replace: true })
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Header title="Profile" subtitle="Your IT workspace identity" />
      <main className="flex-1 space-y-4 overflow-y-auto px-4 pb-5 pt-4">
        <section className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white">
            {currentUser.avatarInitials}
          </div>
          <h2 className="mt-3 text-lg font-bold text-slate-900">{currentUser.name}</h2>
          <p className="text-sm text-slate-500">{currentUser.role}</p>
          <p className="mt-1 text-xs text-brand-600">{currentUser.email}</p>
        </section>

        <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          {[
            ["Department", currentUser.department],
            ["Location", currentUser.location],
            ["Phone", currentUser.phone],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-center justify-between px-4 py-3 text-sm ${i ? "border-t border-slate-100" : ""}`}
            >
              <span className="text-slate-500">{label}</span>
              <span className="font-medium text-slate-800">{value}</span>
            </div>
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          <Link
            to="/app/notifications"
            className="flex items-center justify-between px-4 py-3.5 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
          >
            <span className="flex items-center gap-2">
              <Bell size={16} className="text-slate-400" /> Notifications
            </span>
            <ChevronRight size={16} className="text-slate-300" />
          </Link>
          <Link
            to="/app/settings"
            className="flex items-center justify-between border-t border-slate-100 px-4 py-3.5 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
          >
            <span className="flex items-center gap-2">
              <Settings size={16} className="text-slate-400" /> Settings
            </span>
            <ChevronRight size={16} className="text-slate-300" />
          </Link>
        </section>

        <button
          type="button"
          onClick={logout}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-rose-50 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
        >
          <LogOut size={16} /> Sign out
        </button>
      </main>
    </div>
  )
}
