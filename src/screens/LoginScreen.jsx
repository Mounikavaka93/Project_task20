import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Cpu, Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

const demoEmail = "mounika.vaka@nexusit.io"
const demoPassword = "NexusDemo2026"
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginScreen() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(demoEmail)
  const [password, setPassword] = useState(demoPassword)
  const [show, setShow] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!emailPattern.test(email.trim())) {
      setError("Enter a valid work email address.")
      return
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    localStorage.setItem("nexus-auth", "1")
    navigate("/app", { replace: true })
  }

  function loginToDemo() {
    localStorage.setItem("nexus-auth", "1")
    navigate("/app", { replace: true })
  }

  return (
    <div className="no-scrollbar flex min-h-full flex-1 flex-col overflow-y-auto scroll-smooth bg-slate-50 px-6 pb-8 pt-12">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white shadow-lg">
        <Cpu size={26} />
      </div>
      <h1 className="mt-5 text-center text-2xl font-extrabold text-slate-900">Sign in</h1>
      <p className="mt-1 text-center text-sm text-slate-500">Use your Nexus IT directory account</p>

      <section className="mt-6 rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
        <p className="text-xs font-bold uppercase tracking-wide text-brand-700">Demo account</p>
        <p className="mt-2 text-xs text-slate-600">Email: <span className="font-semibold text-slate-800">{demoEmail}</span></p>
        <p className="mt-1 text-xs text-slate-600">Password: <span className="font-semibold text-slate-800">{demoPassword}</span></p>
        <button type="button" onClick={loginToDemo} className="mt-3 h-10 w-full rounded-xl bg-brand-600 text-xs font-semibold text-white transition hover:bg-brand-500">
          Login to demo account
        </button>
      </section>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-600">Work email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-600">Password</span>
          <span className="relative block">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>
        {error ? <p className="text-xs font-medium text-rose-600">{error}</p> : null}
        <button
          type="submit"
          className="h-12 w-full rounded-2xl bg-brand-600 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500 active:scale-[0.99]"
        >
          Continue
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-500">
        New to Nexus IT? <Link to="/create-account" className="font-semibold text-brand-600">Create an account</Link>
      </p>
    </div>
  )
}
