import { Bell, ClipboardList, Server, Shield } from "lucide-react"

const styles = {
  security: { icon: Shield, wrap: "bg-rose-50 text-rose-600" },
  ticket: { icon: ClipboardList, wrap: "bg-blue-50 text-blue-600" },
  asset: { icon: Server, wrap: "bg-violet-50 text-violet-600" },
  system: { icon: Bell, wrap: "bg-emerald-50 text-emerald-600" },
}

export default function ActivityItem({ item, last = false }) {
  const meta = styles[item.type] || styles.system
  const Icon = meta.icon

  return (
    <li className="flex gap-3">
      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${meta.wrap}`}>
        <Icon size={16} />
      </span>
      <div className={`min-w-0 flex-1 ${last ? "pb-0" : "border-b border-slate-100 pb-3"}`}>
        <div className="flex items-start justify-between gap-2">
          <p className="min-w-0 text-sm font-semibold leading-5 text-slate-800">{item.title}</p>
          <span className="shrink-0 pt-0.5 text-[11px] leading-4 text-slate-400">{item.time}</span>
        </div>
        <p className="mt-0.5 text-xs leading-4 text-slate-500">{item.detail}</p>
      </div>
    </li>
  )
}
