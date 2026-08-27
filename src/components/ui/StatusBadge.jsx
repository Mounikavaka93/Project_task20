const tones = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  violet: "bg-violet-50 text-violet-700",
  slate: "bg-slate-100 text-slate-600",
  red: "bg-rose-50 text-rose-700",
}

export default function StatusBadge({ status }) {
  const map = {
    Open: tones.blue,
    "In Progress": tones.violet,
    Waiting: tones.amber,
    Resolved: tones.green,
    Done: tones.green,
    Active: tones.green,
    Warning: tones.amber,
    Offline: tones.red,
    Closed: tones.slate,
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${map[status] || tones.slate}`}
    >
      {status}
    </span>
  )
}
