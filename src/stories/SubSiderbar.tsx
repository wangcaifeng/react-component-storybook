import React, { useState, useEffect } from 'react'

const subSiderStyle: React.CSSProperties = {
  color: 'rgb(102, 102, 102)',
  width: '200px',
  height: '100%',
  backgroundColor: '#ffffff'
}
export default function SubSiderbar({
  sub_navs,
  extra,
  beforeNav,
  defaultSelectedKey,
  onClick
}: {
  sub_navs: {
    label: string
    key: string
    icon: React.FunctionComponent | string
  }[]
  extra?: React.ReactNode[]
  beforeNav?: () => void
  defaultSelectedKey?: string
  onClick?: (menu: {
    label: string
    key: string
    icon: React.FunctionComponent | string
  }) => void
}) {
  const [SelectKey, setSelectKey] = useState<string | undefined>('')
  useEffect(() => {
    if (SelectKey) {
      return
    }
    setSelectKey(defaultSelectedKey)
  }, [defaultSelectedKey, SelectKey])
  return (
    <div style={subSiderStyle} className="shadow-black pt-[42px]">
      {extra}
      {sub_navs.map((subMenu) => {
        return (
          <div
            key={subMenu.key}
            onClick={() => {
              setSelectKey(subMenu.key)
              beforeNav?.()
              onClick?.(subMenu)
            }}
            style={{ padding: '12px 16px 12px 16px' }}
            className={`flex items-center py-2 outline-none text-center h-[40px]  cursor-pointer hover:bg-[#f4f4fe] ${
              subMenu.key === SelectKey ? 'bg-[#e3e5fa]' : ''
            }`}
          >
            {subMenu.icon ? (
              typeof subMenu.icon === 'string' ? (
                <img
                  className="w-[16px] h-[16px] inline-block"
                  src={subMenu.icon}
                />
              ) : (
                <span className="w-[16px] h-[16px] inline-block">
                  <subMenu.icon />
                </span>
              )
            ) : (
              <span className="w-[16px] h-[16px] inline-block"></span>
            )}
            <span className="block ml-2">{subMenu.label}</span>
          </div>
        )
      })}
    </div>
  )
}
