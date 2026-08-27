import { useMemo, useState } from "react"
import Header from "../components/layout/Header"
import AssetCard from "../components/ui/AssetCard"
import FilterPills from "../components/ui/FilterPills"
import SearchBar from "../components/ui/SearchBar"
import { assets } from "../data/mockData"

const types = ["All", "Laptop", "Server", "Network", "Mobile", "Printer"]

export default function AssetsScreen() {
  const [query, setQuery] = useState("")
  const [type, setType] = useState("All")

  const list = useMemo(() => {
    return assets.filter((a) => {
      const matchType = type === "All" || a.type === type
      const q = query.toLowerCase()
      const matchQuery =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.id.toLowerCase().includes(q) ||
        a.owner.toLowerCase().includes(q)
      return matchType && matchQuery
    })
  }, [query, type])

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Header title="Assets" subtitle="Devices, servers, and peripherals" />
      <main className="app-scroll flex-1 space-y-4 overflow-y-auto px-4 pb-5 pt-4">
        <SearchBar value={query} onChange={setQuery} placeholder="Search assets, owners, IDs" />
        <FilterPills options={types} value={type} onChange={setType} />
        <div className="space-y-3">
          {list.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
          {list.length === 0 ? (
            <p className="rounded-2xl bg-white py-10 text-center text-sm text-slate-500 ring-1 ring-slate-100">
              No assets found.
            </p>
          ) : null}
        </div>
      </main>
    </div>
  )
}
