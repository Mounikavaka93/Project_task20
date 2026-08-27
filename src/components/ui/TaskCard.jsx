import PriorityBadge from "./PriorityBadge"
import StatusBadge from "./StatusBadge"

export default function TaskCard({ task }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-slate-400">
            {task.id} · {task.project}
          </p>
          <h3 className="mt-0.5 text-sm font-semibold leading-5 text-slate-900">{task.title}</h3>
        </div>
        <span className="shrink-0">
          <PriorityBadge priority={task.priority} />
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <StatusBadge status={task.status} />
        <span className="shrink-0 text-[11px] font-medium text-slate-500">Due {task.due}</span>
      </div>
      <div className="mt-3">
        <div className="mb-1 flex justify-between text-[10px] font-medium text-slate-400">
          <span>Progress</span>
          <span>{task.progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-500"
            style={{ width: `${task.progress}%` }}
          />
        </div>
      </div>
    </article>
  )
}
