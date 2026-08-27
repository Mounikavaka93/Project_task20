const tones = {
  Critical: "bg-rose-600 text-white",
  High: "bg-orange-500 text-white",
  Medium: "bg-amber-400 text-slate-900",
  Low: "bg-slate-200 text-slate-700",
}

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tones[priority] || tones.Low}`}
    >
      {priority}
    </span>
  )
}
