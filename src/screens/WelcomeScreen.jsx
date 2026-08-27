import { ArrowRight, ShieldCheck, Ticket, Workflow } from "lucide-react"
import { Link } from "react-router-dom"

const highlights = [
  { icon: Ticket, title: "Ticket desk", text: "Triage, assign, and close incidents on the go." },
  { icon: Workflow, title: "Task boards", text: "Keep patch windows and ops work on schedule." },
  { icon: ShieldCheck, title: "Asset health", text: "See devices, servers, and network status instantly." },
]

export default function WelcomeScreen() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-navy-900 px-6 pb-8 pt-14 text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Welcome</p>
      <h1 className="mt-3 text-3xl font-extrabold leading-tight">
        Run IT operations from your pocket
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Nexus IT brings tickets, tasks, and assets into one focused mobile workspace for the operations team.
      </p>

      <ul className="mt-8 space-y-3">
        {highlights.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className="animate-fade-up flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-0.5 text-xs text-slate-400">{text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-3 pt-8">
        <Link
          to="/login"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 active:scale-[0.99]"
        >
          Get started <ArrowRight size={16} />
        </Link>
        <p className="text-center text-[11px] text-slate-500">Internal use · Nexus IT workspace</p>
      </div>
    </div>
  )
}
