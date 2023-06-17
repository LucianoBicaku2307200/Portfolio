"use client";
import { NextPage } from "next";
import { Header } from "@/src/components/Header";
import LeftCard from "@/src/components/Timeline/LeftCard";
import RightCard from "@/src/components/Timeline/RightCard";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";
const BlogPage: NextPage = () => {
  const hero = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Header />
      <main className="container">
        <div className="flex flex-col items-center justify-center gap-6 text-center container">
          <motion.div
            ref={hero}
            style={{ opacity: opacity }}
            className="h-screen transition-opacity ease-in-out duration-300 flex items-center justify-center gap-10 flex-col "
          >
            <h1 className="text-5xl md:text-8xl font-display">About me</h1>
            <p className="text-gray-500 w-8/12">
              Hello! I am a self-taught{" "}
              <b className="text-gray-400">Full stack web developer</b> with a
              passion for continuous learning and growth. As a{" "}
              <b className="text-gray-400">BigCommerce Certified Developer</b>,
              I have honed my skills in building robust and scalable e-commerce
              solutions. I thrive in leadership roles and have experience as a
              team leader, guiding and motivating others to achieve their full
              potential. Beyond traditional web development, I am also an
              enthusiastic advocate for{" "}
              <b className="text-gray-400">Web3 technologies</b>, exploring the
              exciting possibilities they bring to the digital landscape. I am
              committed to staying up-to-date with the latest industry trends
              and technologies, always seeking new challenges to broaden my
              skillset. With a relentless drive to excel, I am dedicated to
              creating innovative and user-centric web experiences that leave a
              lasting impact.
            </p>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-bounce flex gap-3 bg-zinc-900 px-4 py-3 ring-1 ring-slate-200/20 shadow-lg rounded-full items-center justify-center mt-[5%]"
            >
              <FaRegFilePdf /> <span>Download my CV</span>
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
