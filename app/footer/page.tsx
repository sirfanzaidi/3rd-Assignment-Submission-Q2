"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Footer() {
    const route  = useRouter()
    return (
      <>
        <Link href="/home" >go to page footer</Link>
        <h1>This is our Page Footer</h1>
        <button onClick={()=> route.push('/home')} >return to home page</button>
      </>
    )
  }
  