import { useState } from "react"
import { ArrowLeft, Eye, EyeOff, UserPlus } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function CreateAccountScreen() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setError("")
  }

  function handleSubmit(event) {
    event.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()

    if (name.length < 2) {
      setError("Enter your full name.")
      return
    }
    if (!emailPattern.test(email)) {
      setError("Enter a valid work email address.")
      return
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    if (!/[A-Z]/.test(form.password) || !/[a-z]/.test(form.password) || !/\d/.test(form.password)) {
      setError("Password must include uppercase, lowercase, and a number.")
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    localStorage.setItem("nexus-auth", "1")
    navigate("/app", { replace: true })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-slate-50 px-6 pb-8 pt-8">
      <Link to="/login" className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-white" aria-label="Back to sign in">
        <ArrowLeft size={19} />
      </Link>
      <div className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white shadow-lg">
        <UserPlus size={25} />
      </div>
      <h1 className="mt-5 text-center text-2xl font-extrabold text-slate-900">Create account</h1>
      <p className="mt-1 text-center text-sm text-slate-500">Join your Nexus IT workspace</p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-3.5" noValidate>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-600">Full name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
            autoComplete="name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-600">Work email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
            autoComplete="email"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-600">Password</span>
          <span className="relative block">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(event) => updateField("password", event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
              autoComplete="new-password"
              required
            />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-slate-600">Confirm password</span>
          <span className="relative block">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={form.confirmPassword}
              onChange={(event) => updateField("confirmPassword", event.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-12 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/15"
              autoComplete="new-password"
              required
            />
            <button type="button" onClick={() => setShowConfirmPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" aria-label={showConfirmPassword ? "Hide password" : "Show password"}>
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>
        {error ? <p className="text-xs font-medium text-rose-600" role="alert">{error}</p> : null}
        <button type="submit" className="h-12 w-full rounded-2xl bg-brand-600 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-500 active:scale-[0.99]">
          Create account
        </button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-500">
        Already have an account? <Link to="/login" className="font-semibold text-brand-600">Sign in</Link>
      </p>
    </div>
  )
}
