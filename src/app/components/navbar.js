"use client"
import Link from "next/link";
import Image from "next/image";
import logo from './../../../public/logo.png'
import {useState} from 'react'

export default function Navbar() {
    const [isClick,setIsClick] = useState(false);
    const isclicked=()=>{
        setIsClick(!isClick);
    }
    return(
    <>
    <div className="h-18 w-full text-xl flex items-center justify-between">
        <div className="mx-10 my-3 items-center">
            <Link href="/">
                <Image src={logo}
                width={40}
                height={40}
                />
            </Link>
        </div>
        <div className="flex items-center justify-center max-sm:hidden max-md:inline max-md:flex max-md:justify-center">
            <ui className="flex list-none items-center capitalize">
                <li className="p-2 px-4 m-3 cursor-default hover:shadow-lg hover:shadow-gray-300 hover:rounded-full">
                    <Link href="/about">about</Link>
                </li>
                <li className="p-2 px-4 m-3 cursor-default hover:shadow-lg hover:shadow-gray-300 hover:rounded-full">
                    <Link href="/projects">projects</Link>
                </li>
            </ui>
        </div>
        <div className="text-4xl sm:hidden max-sm:block">
            { !isClick && <i class="fa-solid fa-bars absolute right-5 top-5" onClick={isclicked}></i>}
            { isClick && <i className="fa-solid fa-xmark absolute right-5 top-5" onClick={isclicked}></i>}
        </div>
    </div>
        {isClick && <div className="absolute w-screen md:hidden bg-[#E5E8E8] text-xl">
        <ui className="list-none flex justify-center flex-col items-center capitalize">
                <li className="p-2 px-4 m-3 cursor-default">
                    <Link href="/about">about</Link>
                </li>
                <li className="p-2 px-4 m-3 cursor-default">
                    <Link href="/projects">projects</Link>
                </li>
            </ui>
        </div>}
        </>
    )
}
