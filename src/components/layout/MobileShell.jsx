export default function MobileShell({ children }) {
  return (
    <div className="flex h-dvh w-full items-stretch justify-center bg-[radial-gradient(circle_at_top,#1e3a5f_0%,#0b1220_55%)] sm:items-center sm:p-6">
      <div className="flex h-full w-full max-w-[430px] flex-col overflow-hidden bg-slate-50 sm:h-[min(780px,calc(100dvh-3rem))] sm:rounded-[2rem] sm:shadow-2xl sm:ring-8 sm:ring-white/10">
        {children}
      </div>
    </div>
  )
}
