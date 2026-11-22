import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

export function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f1f5f9]">
      <Sidebar />

      <main className="min-h-0 min-w-0 flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
