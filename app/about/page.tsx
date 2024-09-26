"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
export default function About() {
    const route = useRouter()
  return (
    <>
      <Link href='/navbar'> go to navigation bar </Link>
      <h1>About me</h1>
      <button onClick={()=> route.push('/navbar')}>go to navigation bar</button>
    </>
  )
}
