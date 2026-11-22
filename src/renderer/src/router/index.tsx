import { createHashRouter, Navigate } from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
      <p className="mt-2 text-slate-500">This page is under development.</p>
    </div>
  )
}

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/cash-book" replace />
      },
      {
        path: 'cash-book',
        element: <PlaceholderPage title="Cash Book / History Ledger" />
      },
      {
        path: 'bulk-cash-in',
        element: <PlaceholderPage title="Bulk Cash In Table" />
      },
      {
        path: 'cash-out',
        element: <PlaceholderPage title="Cash Out Form" />
      },
      {
        path: 'members',
        element: <PlaceholderPage title="Members & Individual Ledger" />
      },
      {
        path: 'categories',
        element: <PlaceholderPage title="Categories & Register Member" />
      }
    ]
  }
])

export default router
