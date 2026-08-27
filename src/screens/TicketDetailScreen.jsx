import { useParams } from "react-router-dom"
import ScreenLayout from "../components/layout/ScreenLayout"
import PriorityBadge from "../components/ui/PriorityBadge"
import StatusBadge from "../components/ui/StatusBadge"
import { tickets } from "../data/mockData"

export default function TicketDetailScreen() {
  const { id } = useParams()
  const ticket = tickets.find((t) => t.id === id)

  if (!ticket) {
    return (
      <ScreenLayout title="Ticket" showBack right={null}>
        <p className="text-sm text-slate-500">Ticket not found.</p>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout title={ticket.id} subtitle={ticket.category} showBack right={null} contentClassName="space-y-4">
      <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={ticket.status} />
          <PriorityBadge priority={ticket.priority} />
        </div>
        <h2 className="mt-3 text-lg font-bold leading-6 text-slate-900">{ticket.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{ticket.description}</p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        {[
          ["Requester", ticket.requester],
          ["Assignee", ticket.assignee],
          ["Created", ticket.created],
          ["Updated", ticket.updated],
        ].map(([label, value]) => (
          <div key={label} className="min-w-0 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
            <p className="text-[11px] font-medium text-slate-400">{label}</p>
            <p className="mt-1 break-words text-sm font-semibold leading-5 text-slate-800">{value}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-2 text-sm font-bold text-slate-900">Updates</h3>
        <ul className="space-y-2">
          {ticket.comments.length === 0 ? (
            <li className="rounded-2xl bg-white p-4 text-sm text-slate-500 ring-1 ring-slate-100">No comments yet.</li>
          ) : (
            ticket.comments.map((c, i) => (
              <li key={i} className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                <div className="flex items-start justify-between gap-3 text-xs">
                  <span className="min-w-0 font-semibold text-slate-800">{c.author}</span>
                  <span className="shrink-0 text-slate-400">{c.time}</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.text}</p>
              </li>
            ))
          )}
        </ul>
      </section>
    </ScreenLayout>
  )
}
