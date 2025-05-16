'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'


const NameMap: Record<string, string> = {
  home: 'トップ',
  history: '歴史',
  requestform: 'お問い合わせ',
  map: '場所',
  siterule:'利用規約',
  allergie:'アレルギー情報',
  deal:'決済方法'
  // 必要に応じて追加
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = NameMap[segment] || decodeURIComponent(segment)
    return { href, label }
  })
  const breadcrumbs = [
    {href:'/',label:'トップ'},
    ...crumbs,
  ]

  return (
    <div className=' text-amber-800 ml-2 mt-8 md:mt-24'>
      {breadcrumbs.map((crumb, i) => (
        <Link key={crumb.href} href={crumb.href}>
          <span className='border-b-2 hover:text-blue-500'>{crumb.label}</span>
          {i < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
        </Link>
      ))}
    </div>
  )
}

//export function Breadcrumbs() {
//  const pathname = usePathname()
//  const segments = pathname.split('/').filter(Boolean)
//  const crumbs = segments.map((segment, index) => {
//    const href = '/' + segments.slice(0, index + 1).join('/')
//    const label = NameMap[segment] || decodeURIComponent(segment) // マップがない場合はそのまま使う

//    return (
//      <span key={href}>
//        <span className="mx-2 text-gray-400">/</span>
//        <Link href={href} className="text-blue-600 hover:underline">
//          {label}
//        </Link>
//      </span>
//    )
//  })

//  return (
//    <nav aria-label="breadcrumb" className="text-sm p-2">
//      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
//      {crumbs}
//    </nav>
//  )
//}



