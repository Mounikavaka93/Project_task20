import { useParams } from "react-router-dom"
import Header from "../components/layout/Header"
import StatusBadge from "../components/ui/StatusBadge"
import { assets } from "../data/mockData"

export default function AssetDetailScreen() {
  const { id } = useParams()
  const asset = assets.find((a) => a.id === id)

  if (!asset) {
    return (
      <div className="flex min-h-0 flex-1 flex-col">
        <Header title="Asset" showBack right={null} />
        <p className="px-4 py-8 text-sm text-slate-500">Asset not found.</p>
      </div>
    )
  }

  const rows = [
    ["Asset ID", asset.id],
    ["Type", asset.type],
    ["Owner", asset.owner],
    ["Location", asset.location],
    ["Serial", asset.serial],
    ["OS / firmware", asset.os],
    ["Last seen", asset.lastSeen],
  ]

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Header title="Asset details" showBack right={null} />
      <main className="app-scroll flex-1 space-y-4 overflow-y-auto px-4 pb-5 pt-4">
        <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-brand-600">{asset.type}</p>
              <h2 className="mt-1 text-lg font-bold text-slate-900">{asset.name}</h2>
            </div>
            <StatusBadge status={asset.status} />
          </div>
        </section>
        <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          {rows.map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-3 px-4 py-3 text-sm ${i !== 0 ? "border-t border-slate-100" : ""}`}
            >
              <span className="text-slate-500">{label}</span>
              <span className="text-right font-medium text-slate-800">{value}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
