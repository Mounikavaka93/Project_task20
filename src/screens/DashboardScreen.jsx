import { ClipboardList, Gauge, Server, SquareCheckBig } from "lucide-react"
import { Link } from "react-router-dom"
import ScreenLayout from "../components/layout/ScreenLayout"
import ActivityItem from "../components/ui/ActivityItem"
import StatCard from "../components/ui/StatCard"
import { activities, currentUser, stats } from "../data/mockData"

const icons = {
  open: ClipboardList,
  sla: Gauge,
  assets: Server,
  tasks: SquareCheckBig,
}

export default function DashboardScreen() {
  return (
    <ScreenLayout
      title="Dashboard"
      subtitle={`Good morning, ${currentUser.name.split(" ")[0]}`}
      contentClassName="space-y-5"
    >
      <section className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <StatCard key={stat.id} {...stat} icon={icons[stat.id]} delay={i * 60} />
        ))}
      </section>

      <section className="animate-fade-up rounded-2xl bg-gradient-to-br from-navy-900 to-brand-700 p-4 text-white shadow-md">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">Today at a glance</p>
        <h2 className="mt-1 text-lg font-bold leading-6">Operations is healthy</h2>
        <p className="mt-1 text-xs leading-relaxed text-slate-200">
          3 high-priority tickets remain. Patch window starts at 11 PM. Switch SW-08 needs a look.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/app/tickets"
            className="inline-flex items-center rounded-xl bg-white px-3 py-2 text-xs font-semibold text-navy-900 transition hover:bg-brand-50"
          >
            View tickets
          </Link>
          <Link
            to="/app/tasks"
            className="inline-flex items-center rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            Today’s tasks
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold text-slate-900">Recent activity</h2>
          <Link to="/app/notifications" className="shrink-0 text-xs font-semibold text-brand-600">
            All alerts
          </Link>
        </div>
        <ul className="space-y-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          {activities.map((item, i) => (
            <ActivityItem key={item.id} item={item} last={i === activities.length - 1} />
          ))}
        </ul>
      </section>
    </ScreenLayout>
  )
}
