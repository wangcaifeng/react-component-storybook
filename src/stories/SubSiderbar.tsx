import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '@src/styles/tailwind.css'

const subSiderStyle: React.CSSProperties = {
  color: 'rgb(102, 102, 102)',
  width: '200px',
  height: '100%',
  backgroundColor: '#ffffff'
}
export default function SubSiderbar({
  sub_navs,
  extra,
  beforeNav
}: {
  sub_navs: { label: string; to: { path: string }; icon?: string }[]
  extra?: React.ReactNode[]
  beforeNav?: () => void
}) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <div style={subSiderStyle} className="shadow-black pt-[42px]">
      {extra}
      {sub_navs.map((subMenu) => {
        return (
          <div
            key={subMenu.to.path}
            onClick={() => {
              beforeNav?.()
              navigate(subMenu.to.path)
            }}
            style={{ padding: '12px 16px 12px 16px' }}
            className={`flex items-center py-2 outline-none text-center h-[40px]  cursor-pointer hover:bg-[#f4f4fe] ${
              pathname.indexOf(subMenu.to.path.replace(/[/]$/, '')) > -1
                ? 'bg-[#e3e5fa]'
                : ''
            }`}
          >
            {subMenu.icon ? (
              <img className="w-[16px] flex items-center" src={subMenu.icon} />
            ) : null}

            <span className="block ml-2">{subMenu.label}</span>
          </div>
        )
      })}
    </div>
  )
}
