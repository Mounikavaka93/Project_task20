import { useState } from "react"
import Header from "../components/layout/Header"

function Toggle({ checked, onChange, label, hint }) {
  return (
    <label className="flex items-center justify-between gap-3 px-4 py-3.5">
      <span>
        <span className="block text-sm font-medium text-slate-800">{label}</span>
        {hint ? <span className="block text-xs text-slate-400">{hint}</span> : null}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 rounded-full transition ${checked ? "bg-brand-600" : "bg-slate-200"}`}
      >
        <span
          className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${checked ? "left-5.5" : "left-0.5"}`}
          style={{ left: checked ? "1.35rem" : "0.15rem" }}
        />
      </button>
    </label>
  )
}

export default function SettingsScreen() {
  const [push, setPush] = useState(true)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [quiet, setQuiet] = useState(false)
  const [compact, setCompact] = useState(false)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Header title="Settings" subtitle="Workspace preferences" showBack right={null} />
      <main className="app-scroll flex-1 space-y-4 overflow-y-auto px-4 pb-5 pt-4">
        <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          <p className="px-4 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">Notifications</p>
          <Toggle checked={push} onChange={setPush} label="Push alerts" hint="Critical tickets and asset warnings" />
          <div className="border-t border-slate-100">
            <Toggle checked={emailAlerts} onChange={setEmailAlerts} label="Email digest" hint="Daily summary at 8 AM" />
          </div>
          <div className="border-t border-slate-100">
            <Toggle checked={quiet} onChange={setQuiet} label="Quiet hours" hint="Mute non-critical alerts 10 PM–7 AM" />
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          <p className="px-4 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">Display</p>
          <Toggle checked={compact} onChange={setCompact} label="Compact lists" hint="Show more tickets per screen" />
        </section>

        <section className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">About</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">Nexus IT Mobile</p>
          <p className="text-xs text-slate-500">Version 1.0.0 · Internal operations client</p>
        </section>
      </main>
    </div>
  )
}
