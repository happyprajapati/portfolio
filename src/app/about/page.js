import Navbar from "../components/navbar.js"
import Image from "next/image";
import Link from "next/link";
import { Poppins,Lobster,Inter } from "next/font/google"
import img1 from './../../../public/img1.jpg'
// import img2 from './../../../public/img2.png'

const poppins = Poppins({
    weight:'600',
    subsets:['latin']
  }) 
  
  const lobster = Lobster({
    weight:'400',
    subsets:['latin']
  })

  const inter = Inter({
    weight:'400',
    subsets:['latin']
  })

export default function About() {
    return(
        <>
        <Navbar />
            <div className='flex justify-around flex-raw m-10 max-md:justify-center max-md:flex-col'>
                <div className="pr-5 flex-1 flex items-center flex-col py-5">
                    <h1 className={`${poppins.className} capitalize text-4xl w-fit max-sm:text-3xl border-b mb-2 border-black pb-2`}>about me</h1>
                    <div className="text-xl max-sm:text-lg">
                        <p className="w-64 mb-2 max-md:w-auto">thanks for snapping a look. Let's get in touch!</p>
                        <p className="block flex justify-center"><Link className={`${poppins.className} font-bold border-r border-black pr-2`} href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">Email</Link></p>
                        <p className="block flex justify-center"><Link className={`${poppins.className} border-r border-black pr-2`} href="https://www.linkedin.com/in/happy-prajapati-b10a232aa/">Linked In</Link></p>
                    </div>
                </div>
                {/* <div> */}
                    <div className="flex flex-1 flex-col justify-center">
                        <div className="flex justify-center">
                            <Image className="rounded-xl" src={img1}
                            width={300}
                            height={300}
                            />
                        </div>
                        <div className={`${inter.className} max-sm:w-full mt-5`}>
                            <h1 className='text-3xl pb-2 max-sm:text-2xl'>Hii there, I'm <p className={`${lobster.className} inline`}>Happy</p>.</h1>
                            <p className="text-xl max-sm:text-lg">I am a 2021 batch student at Government Engineering College, Gandhinagar. My course is Computer Engineering.</p>
                            <div className="mt-5 max-sm:text-lg text-xl">
                                <h1 className={`${poppins.className} text-3xl max-sm:text-2xl pb-2 w-fit border-b border-black`}>Education</h1>
                                <div className="my-3">
                                    <p>Government Polytechnic, Ahmedabad</p>
                                    <p>Diploma in Computer Engineering</p>
                                </div>
                                {/* <div className="my-3">
                                    <p>Bhagavati Vidhyalaya,Ahmedabad</p>
                                    <p>10TH</p>
                                </div> */}
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
