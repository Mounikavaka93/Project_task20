import { useMemo, useState } from "react"
import Header from "../components/layout/Header"
import FilterPills from "../components/ui/FilterPills"
import SearchBar from "../components/ui/SearchBar"
import TaskCard from "../components/ui/TaskCard"
import { tasks } from "../data/mockData"

const filters = ["All", "Open", "In Progress", "Waiting", "Done"]

export default function TasksScreen() {
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("All")

  const list = useMemo(() => {
    return tasks.filter((t) => {
      const matchFilter = filter === "All" || t.status === filter
      const q = query.toLowerCase()
      const matchQuery = !q || t.title.toLowerCase().includes(q) || t.project.toLowerCase().includes(q)
      return matchFilter && matchQuery
    })
  }, [query, filter])

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Header title="Tasks" subtitle="Priority work for the ops desk" />
      <main className="flex-1 space-y-4 overflow-y-auto px-4 pb-5 pt-4">
        <SearchBar value={query} onChange={setQuery} placeholder="Search tasks or projects" />
        <FilterPills options={filters} value={filter} onChange={setFilter} />
        <div className="space-y-3">
          {list.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {list.length === 0 ? (
            <p className="rounded-2xl bg-white py-10 text-center text-sm text-slate-500 ring-1 ring-slate-100">
              No tasks in this view.
            </p>
          ) : null}
        </div>
      </main>
    </div>
  )
}
