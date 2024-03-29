
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar.js"
import { Lobster,Play } from "next/font/google"
import avatar from './../../public/avatar.png'

const lobster = Lobster({
  weight:'400',
  subsets:['latin']
})

const play = Play({
  weight:'400',
  subsets:['latin']
})

export default function Home() {

  return (
    <>
    <Navbar />
    <main className="flex p-2">
      {/* <cursor /> */}
      <div className="my-auto ml-12 max-sm:mx-5">
        <p className={lobster.className}>
          <h1 className="py-10 text-6xl capitalize max-sm:text-5xl ">happy prajapati</h1>
        </p>
        <div className={play.className}>
          <p className="my-5 text-3xl max-sm:text-2xl max-w-[80%] max-md:max-w-[100%] max-md:mr-3">A passionate MERN & full stack Developer with the goal to create delightful experience.</p>
          <p className="my-5 text-2xl max-sm:text-xl">Welcome to my portfolio.</p>
          <a href="/HappyPrajapati_Resume.pdf" ><button className="mt-2 p-2 px-8 text-white bg-black text-2xl rounded-full max-sm:text-xl">Resume</button></a>
        </div>
      </div>
      <div className="mx-8 max-md:hidden">
        <Image src={avatar}
        width={450}
        height={450} 
        alt="avatar"/>
      </div>
    </main>
    </>
  );
}
