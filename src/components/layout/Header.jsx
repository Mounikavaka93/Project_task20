import { Bell, ChevronLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function Header({ title, subtitle, showBack = false, right = "notify" }) {
  const navigate = useNavigate()
  const showNotify = right === "notify"

  return (
    <header className="sticky top-0 z-20 shrink-0 border-b border-slate-100/80 bg-slate-50/95 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-md">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
            aria-label="Go back"
          >
            <ChevronLeft size={18} />
          </button>
        ) : null}

        <div className={`min-w-0 flex-1 ${showBack ? "text-center" : ""}`}>
          <h1 className="truncate text-lg font-bold leading-6 tracking-tight text-slate-900">{title}</h1>
          {subtitle ? <p className="mt-0.5 truncate text-xs leading-4 text-slate-500">{subtitle}</p> : null}
        </div>

        {showNotify ? (
          <Link
            to="/app/notifications"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </Link>
        ) : showBack ? (
          <span className="h-10 w-10 shrink-0" aria-hidden />
        ) : null}
      </div>
    </header>
  )
}
