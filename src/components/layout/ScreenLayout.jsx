import Header from "./Header"

export default function ScreenLayout({ children, contentClassName = "", ...headerProps }) {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <Header {...headerProps} />
      <main className={`app-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-5 pb-5 pt-4 ${contentClassName}`}>
        {children}
      </main>
    </div>
  )
}
