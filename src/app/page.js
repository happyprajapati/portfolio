"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar.js";
import { Poppins, Lobster, Inter, Play } from "next/font/google";
import avatar from "./../../public/avatar.png";
import img1 from "./../../public/img1.jpg";
import voicesearch from "./../../public/voicesearch.png";
import mp1 from "./../../public/1.JPG";
import mp2 from "./../../public/2.JPG";
import mp3 from "./../../public/3.JPG";
import mp4 from "./../../public/4.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const play = Play({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex p-2 h-screen">
        {/* <cursor /> */}
        <div data-aos="fade-up" className="my-auto ml-12 max-sm:mx-5">
          <p className={lobster.className}>
            <h1 className="py-10 text-6xl capitalize max-sm:text-5xl ">
              happy prajapati
            </h1>
          </p>
          <div className={play.className}>
            <p className="my-5 text-3xl max-sm:text-2xl max-w-[80%] max-md:max-w-[100%] max-md:mr-3">
              A passionate MERN & full stack Developer with the goal to create
              delightful experience.
            </p>
            <p className="my-5 text-2xl max-sm:text-xl">
              Welcome to my portfolio.
            </p>
            <a href="/HappyPrajapati_Resume.pdf">
              <button className="mt-2 p-2 px-8 text-white bg-black text-2xl rounded-full max-sm:text-xl">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mx-8 max-md:hidden">
          <Image src={avatar} width={450} height={450} alt="avatar" />
        </div>
      </main>

      {/* about section */}
      <div
        id="about"
        className="flex justify-around flex-raw m-10 max-md:justify-center max-md:flex-col"
      >
        <div
          data-aos="fade-right"
          className="pr-5 flex-1 flex items-center justify-center flex-col py-5"
        >
          <h1
            className={`${poppins.className} capitalize text-4xl w-fit max-sm:text-3xl border-b mb-2 border-black pb-2`}
          >
            about me
          </h1>
          <div className="text-xl max-sm:text-lg">
            <p className="w-64 mb-2 max-md:w-auto">
              thanks for snapping a look. Let&apos;s get in touch!
            </p>
            <p className="block flex justify-center">
              <Link
                className={`${poppins.className} font-bold border-r border-black pr-2`}
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
              >
                Email
              </Link>
            </p>
            <p className="block flex justify-center">
              <Link
                className={`${poppins.className} border-r border-black pr-2`}
                href="https://www.linkedin.com/in/HappyPrajapati"
              >
                Linked In
              </Link>
            </p>
          </div>
        </div>
        {/* <div> */}
        <div
          data-aos="fade-left"
          className="flex flex-1 flex-col justify-center items-center pt-5"
        >
          <div className="flex justify-center">
            <Image className="rounded-xl" src={img1} width={300} height={300} />
          </div>
          <div className={`${inter.className} max-sm:w-full mt-5`}>
            <h1 className="text-3xl pb-2 max-sm:text-2xl">
              Hii there, I&apos;m{" "}
              <p className={`${lobster.className} inline`}>Happy</p>.
            </h1>
            <p className="text-xl max-sm:text-lg max-w-[700px]">
              I am a 2021 batch student at Government Engineering College,
              Gandhinagar. My course is Computer Engineering.
            </p>
            <div className="mt-5 max-sm:text-lg text-xl">
              <h1
                className={`${poppins.className} text-3xl max-sm:text-2xl pb-2 w-fit border-b border-black`}
              >
                Education
              </h1>
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

      {/* project section  */}
      <div id="projects" className={`${inter.className} m-10 max-sm:m-5`}>
        <div data-aos="fade-up">
          <div className="mb-5">
            <h1
              className={`${poppins.className} capitalize text-4xl max-sm:text-3xl w-fit border-b mb-2 border-black pb-2`}
            >
              my projects
            </h1>
          </div>
          <div className="m-5 text-2xl max-sm:text-xl xl:mx-auto flex flex-col xl:items-center">
            <p className="my-2">1. voice search</p>
            <Link href="/projects/voicesearch">
              <Image src={voicesearch} />
            </Link>
          </div>
        </div>
        <div className="py-5" data-aos="fade-up">
          <h1
            className={`${poppins.className} capitalize text-3xl max-sm:text-2xl w-fit border-b mb-2 border-black pb-2`}
          >
            mini projects
          </h1>
          <div className="mt-5 flex flex-raw flax-wrap justify-around text-xl">
            <div className="flex flex-row max-sm:flex-col">
              <div className="mx-5">
                <p className="mb-2 mx-auto">Parallax Scrolling</p>
                <Link href="https://happyprajapati.github.io/mini-projects/Parallax-Scrolling/index.html">
                  <Image src={mp1} width={580} height={300} />
                </Link>
              </div>
              <div className="mx-5">
                <p className="mb-2 mx-auto">Analog Clock</p>
                <Link href="https://happyprajapati.github.io/mini-projects/Analog-Clock/index.html">
                  <Image src={mp2} width={580} height={300} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-raw flex-wrap justify-around text-xl">
            <div className="flex flex-raw max-sm:flex-col">
              <div className="mx-5">
                <p className="mb-2 mx-auto">Calculator</p>
                <Link href="https://happyprajapati.github.io/mini-projects/Calculator/index.html">
                  <Image src={mp3} width={580} height={300} />
                </Link>
              </div>
              <div className="mx-5">
                <p className="mb-2 mx-auto">Digital Clock</p>
                <Link href="https://happyprajapati.github.io/mini-projects/Digital-Clock/index.html">
                  <Image src={mp4} width={580} height={300} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
