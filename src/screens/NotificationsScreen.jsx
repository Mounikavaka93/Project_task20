import { AlertTriangle, Bell, Info, SquareCheckBig } from "lucide-react"
import Header from "../components/layout/Header"
import { notifications } from "../data/mockData"

const kinds = {
  alert: { icon: AlertTriangle, wrap: "bg-rose-50 text-rose-600" },
  warning: { icon: AlertTriangle, wrap: "bg-amber-50 text-amber-600" },
  task: { icon: SquareCheckBig, wrap: "bg-violet-50 text-violet-600" },
  info: { icon: Info, wrap: "bg-blue-50 text-blue-600" },
}

export default function NotificationsScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Header title="Notifications" subtitle="Alerts from the operations desk" showBack right={null} />
      <main className="app-scroll flex-1 space-y-3 overflow-y-auto px-4 pb-5 pt-4">
        {notifications.map((n) => {
          const meta = kinds[n.kind] || kinds.info
          const Icon = meta.icon
          return (
            <article
              key={n.id}
              className={`flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 transition hover:shadow-md ${
                n.unread ? "ring-brand-200" : "ring-slate-100"
              }`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${meta.wrap}`}>
                <Icon size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900">{n.title}</h3>
                  {n.unread ? <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" /> : null}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{n.body}</p>
                <p className="mt-1 text-[11px] text-slate-400">{n.time}</p>
              </div>
            </article>
          )
        })}
        {notifications.length === 0 ? (
          <div className="rounded-2xl bg-white py-12 text-center ring-1 ring-slate-100">
            <Bell className="mx-auto text-slate-300" />
            <p className="mt-2 text-sm text-slate-500">You are all caught up.</p>
          </div>
        ) : null}
      </main>
    </div>
  )
}
