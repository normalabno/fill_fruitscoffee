'use client'


import { usePathname } from 'next/navigation'
import Link from 'next/link'



export function Breadcrumbs() {
  const pathname = usePathname()

  const segments = pathname.split('/').filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = decodeURIComponent(segment)

    return (
      <span key={href}>
        <span className="mx-2 text-gray-400">/</span>
        <Link href={href} className="text-blue-600 hover:underline">
          {label}
        </Link>
      </span>
    )
  })

  return (
    <nav aria-label="breadcrumb" className="text-sm p-2">
      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      {crumbs}
    </nav>
  )
}


export default Breadcrumbs



