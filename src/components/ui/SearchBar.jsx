import { Search } from "lucide-react"

export default function SearchBar({ value, onChange, placeholder = "Search" }) {
  return (
    <label className="relative block">
      <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-800 outline-none ring-brand-500/0 transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
      />
    </label>
  )
}
