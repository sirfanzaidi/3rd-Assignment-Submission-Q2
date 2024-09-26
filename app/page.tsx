"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";



export default function home(){
  const route = useRouter()
  return (
  <>
  <Link href="/about" > go to about page </Link>
  <h1>Welcom home!</h1>
    <button onClick={()=> route.push('/about')} >go to about page</button>
  
  
  
  </>
  );
}

