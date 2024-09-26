"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Navbar() {
    const route = useRouter()
    return (
      <>
        <Link href="/contact" > go to contact us page </Link>
        <h1>Navigation bar</h1>
        <button className='p-4 bg-green-100' onClick={()=> route.push('/contact')} >go to contact us page</button>
      </>
    )
  }
  