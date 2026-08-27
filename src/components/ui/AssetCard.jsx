import { ChevronRight, Laptop, Monitor, Printer, Server, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import StatusBadge from "./StatusBadge"

const icons = {
  Laptop,
  Server,
  Network: Monitor,
  Mobile: Smartphone,
  Printer,
}

export default function AssetCard({ asset }) {
  const Icon = icons[asset.type] || Laptop

  return (
    <Link
      to={`/app/assets/${asset.id}`}
      className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
        <Icon size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-900">{asset.name}</h3>
          <span className="shrink-0">
            <StatusBadge status={asset.status} />
          </span>
        </div>
        <p className="mt-0.5 truncate text-[11px] text-slate-500">
          {asset.id} · {asset.owner} · {asset.location}
        </p>
      </div>
      <ChevronRight size={16} className="shrink-0 text-slate-300" />
    </Link>
  )
}
