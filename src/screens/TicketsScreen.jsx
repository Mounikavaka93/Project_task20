import { useMemo, useState } from "react"
import ScreenLayout from "../components/layout/ScreenLayout"
import FilterPills from "../components/ui/FilterPills"
import SearchBar from "../components/ui/SearchBar"
import TicketCard from "../components/ui/TicketCard"
import { tickets } from "../data/mockData"

const filters = ["All", "Open", "In Progress", "Waiting", "Resolved"]

export default function TicketsScreen() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("All")

  const list = useMemo(() => {
    return tickets.filter((t) => {
      const matchFilter = filter === "All" || t.status === filter
      const q = query.toLowerCase()
      const matchQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        t.requester.toLowerCase().includes(q)
      return matchFilter && matchQuery
    })
  }, [query, filter])

  return (
    <ScreenLayout title="Tickets" subtitle={`${tickets.length} in the queue`} contentClassName="space-y-4">
      <SearchBar value={query} onChange={setQuery} placeholder="Search ID, title, requester" />
      <FilterPills options={filters} value={filter} onChange={setFilter} />
      <div className="space-y-3">
        {list.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
        {list.length === 0 ? (
          <p className="rounded-2xl bg-white py-10 text-center text-sm text-slate-500 ring-1 ring-slate-100">
            No tickets match this filter.
          </p>
        ) : null}
      </div>
    </ScreenLayout>
  )
}
