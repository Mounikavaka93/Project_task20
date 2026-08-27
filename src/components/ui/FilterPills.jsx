export default function FilterPills({ options, value, onChange }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto overflow-y-hidden px-4 py-0.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold leading-none transition ${
            value === option
              ? "bg-navy-900 text-white"
              : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
