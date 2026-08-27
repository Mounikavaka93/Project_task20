const iconWrap = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  violet: "bg-violet-100 text-violet-700",
}

export default function StatCard({ label, value, delta, tone = "blue", icon: Icon, delay = 0 }) {
  return (
    <article
      className="flex h-full min-w-0 flex-col rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="min-w-0 text-xs font-medium leading-4 text-slate-500">{label}</p>
        {Icon ? (
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${iconWrap[tone]}`}>
            <Icon size={16} strokeWidth={2.2} />
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
      <p className="mt-auto pt-2 text-[11px] font-medium text-slate-400">{delta}</p>
    </article>
  )
}
