import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Cpu } from "lucide-react"

export default function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      const loggedIn = localStorage.getItem("nexus-auth") === "1"
      navigate(loggedIn ? "/app" : "/welcome", { replace: true })
    }, 1800)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-navy-900 px-8 text-white">
      <div className="animate-splash flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-500 shadow-lg shadow-brand-500/40">
        <Cpu size={36} />
      </div>
      <h1 className="mt-6 text-2xl font-extrabold tracking-tight">Nexus IT</h1>
      <p className="mt-1 text-sm text-slate-400">Operations · Assets · Support</p>
      <div className="mt-10 h-1 w-28 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-400" />
      </div>
    </div>
  )
}
