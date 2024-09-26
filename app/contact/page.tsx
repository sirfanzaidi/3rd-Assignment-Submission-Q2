"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Contact() {
    const route = useRouter()
    return (
      <>
        <Link href="/footer" >go to page footer</Link>
        <h1>Contact US!</h1>
        <button onClick={()=>route.push('/footer')}>go to page footer</button>
      </>
    )
  }
  