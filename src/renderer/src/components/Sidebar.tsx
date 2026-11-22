import { NavLink } from 'react-router-dom'

import { Landmark, BookOpen, Table, Wallet, Users, Settings } from 'lucide-react'

const menuItems = [
  {
    path: '/cash-book',
    title: 'ငွေစာရင်း / မှတ်တမ်း',
    subtitle: 'Cash Book / History Ledger',
    icon: BookOpen
  },
  {
    path: '/bulk-cash-in',
    title: 'ငွေသွင်းခြင်း (အများအပြား)',
    subtitle: 'Bulk Cash In Table',
    icon: Table
  },
  {
    path: '/cash-out',
    title: 'ငွေထုတ်ခြင်း',
    subtitle: 'Cash Out Form',
    icon: Wallet
  },
  {
    path: '/members',
    title: 'အသင်းသားနှင့် တစ်ဦးချင်းစာရင်း',
    subtitle: 'Members & Individual Ledger',
    icon: Users
  },
  {
    path: '/categories',
    title: 'အမျိုးအစားနှင့် မှတ်ပုံတင်ခြင်း',
    subtitle: 'Categories & Register Member',
    icon: Settings
  }
]

export function Sidebar() {
  return (
    <aside className="flex h-screen width: 244px shrink-0 flex-col bg-[#082b20] text-white">
      {/* Brand */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600">
          <Landmark size={23} />
        </div>

        <div className="min-w-0">
          <span className="rounded bg-emerald-900 px-2 py-1 text-[9px] font-bold text-emerald-300">
            COOPERATIVE LEDGER
          </span>

          <p className="mt-2 text-xs font-bold">စာရင်း သွင်း/ထုတ် စနစ်</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <p className="mb-3 px-2 text-[10px] font-bold tracking-wider text-emerald-500">
          အဓိက မီနူး (MENU)
        </p>

        <div className="flex flex-col gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-200 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/20'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <Icon size={19} className="shrink-0" />

                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-5">{item.title}</p>

                  <p className="text-[9px] opacity-60">{item.subtitle}</p>
                </div>

                {item.path === '/members' && (
                  <span className="ml-auto rounded-full bg-emerald-900 px-2 py-0.5 text-[10px] text-emerald-300">
                    6
                  </span>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>

      {/* Bottom Balance Card */}
      <div className="border-t border-white/10 p-3">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-900/50 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-emerald-300">လက်ကျန်ငွေ စုစုပေါင်း</p>
            <Wallet size={14} className="text-emerald-400" />
          </div>

          <p className="mt-2 text-lg font-bold">24,850,000 ကျပ်</p>

          <p className="mt-1 text-[9px] text-emerald-300/60">အသင်း၏ လက်ရှိငွေလက်ကျန်</p>
        </div>
      </div>
    </aside>
  )
}
