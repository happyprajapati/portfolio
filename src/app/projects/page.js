import Navbar from "./../components/navbar.js"
import Image from "next/image";
import Link from "next/link";
import img1 from './../../../public/voicesearch.png'
import mp1 from './../../../public/1.JPG'
import mp2 from './../../../public/2.JPG'
import mp3 from './../../../public/3.JPG'
import mp4 from './../../../public/4.png'
import { Poppins,Inter } from "next/font/google"

const inter = Inter({
    weight:'500',
    subsets:['latin']
  })

  const poppins = Poppins({
    weight:'600',
    subsets:['latin']
  }) 

export default function Projects() {
    return(
        <>
            <Navbar />
            <div className={`${inter.className} m-10 max-sm:m-5`}>
                <div className="mb-5">
                    <h1 className={`${poppins.className} capitalize text-4xl max-sm:text-3xl w-fit border-b mb-2 border-black pb-2`}>my projects</h1>
                </div>
                <div className="m-5 text-2xl max-sm:text-xl max-sm:m-0">
                    <p className="my-2">1. voice search</p>
                    <Link href="/projects/voicesearch">
                        <Image src={img1}/>
                    </Link>
                </div>
                <div className="py-5">
                    <h1 className={`${poppins.className} capitalize text-3xl max-sm:text-2xl w-fit border-b mb-2 border-black pb-2`}>mini projects</h1>
                    <div className="mt-5 flex flex-raw flax-wrap justify-around text-xl">
                        <div className="flex flex-raw max-sm:flex-col">
                            <div className="mx-5">
                                <p className="mb-2 mx-auto">Parallax Scrolling</p>
                                <Link href="https://happyprajapati.github.io/mini-projects/Parallax-Scrolling/index.html">
                                    <Image src={mp1}
                                    width={580}
                                    height={300}
                                    />
                                </Link>
                            </div>
                            <div className="mx-5">
                                <p className="mb-2 mx-auto">Analog Clock</p>
                                <Link href="https://happyprajapati.github.io/mini-projects/Analog-Clock/index.html">
                                    <Image src={mp2}
                                    width={580}
                                    height={300}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-raw flex-wrap justify-around text-xl">
                        <div className="flex flex-raw max-sm:flex-col">
                            <div className="mx-5">
                                <p className="mb-2 mx-auto">Calculator</p>
                                <Link href="https://happyprajapati.github.io/mini-projects/Calculator/index.html">
                                    <Image src={mp3}
                                    width={580}
                                    height={300}
                                    />
                                </Link>
                            </div>
                            <div className="mx-5">
                                <p className="mb-2 mx-auto">Digital Clock</p>
                                <Link href="https://happyprajapati.github.io/mini-projects/Digital-Clock/index.html">
                                    <Image src={mp4}
                                    width={580}
                                    height={300}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
