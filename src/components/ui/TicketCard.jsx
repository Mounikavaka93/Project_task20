import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import PriorityBadge from "./PriorityBadge"
import StatusBadge from "./StatusBadge"

export default function TicketCard({ ticket }) {
  return (
    <Link
      to={`/app/tickets/${ticket.id}`}
      className="block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold text-brand-600">{ticket.id}</p>
          <h3 className="mt-0.5 text-sm font-semibold leading-5 text-slate-900">{ticket.title}</h3>
        </div>
        <ChevronRight size={18} className="mt-0.5 shrink-0 text-slate-300" />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StatusBadge status={ticket.status} />
        <PriorityBadge priority={ticket.priority} />
        <span className="text-[11px] text-slate-400">{ticket.category}</span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-slate-500">
        <span className="min-w-0 truncate">{ticket.requester}</span>
        <span className="shrink-0">{ticket.updated}</span>
      </div>
    </Link>
  )
}
