"use client";

import { motion, useAnimationFrame } from "motion/react";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import projects from "../lib/projects";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [rocket, setRocket] = useState(false);

  return (
    <div className="flex flex-col bg-[#0e100f] text-[#ffffe3] font-sans font-normal">
      <div className="h-[70vh] md:h-[80vh] mx-auto flex flex-col justify-center translate-y-[-5vh]">
        <div className="flex flex-row gap-8">
          <motion.p
            className="md:text-7xl text-6xl"
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.4 },
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            viewport={{ once: true }}
          >
            Hi,
          </motion.p>
          <motion.p
            className="md:text-7xl text-6xl cursor-default"
            whileInView={{
              opacity: 1,
              rotate: 0,
              transition: {
                delay: 0.8,
                duration: 2,
                type: "spring",
                bounce: 0.6,
              },
            }}
            initial={{ opacity: 0, rotate: 180 }}
            viewport={{ once: true }}
          >
            👋🏼
          </motion.p>
        </div>
        <motion.p
          className="md:text-7xl text-6xl"
          whileInView={{
            opacity: 1,
            transition: { delay: 2 },
          }}
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true }}
        >
          I'm Ayan
        </motion.p>
        <div className="flex flex-col md:flex-row md:gap-3 gap-0">
          <motion.p
            className="md:text-7xl text-6xl"
            whileInView={{
              opacity: 1,
              transition: { delay: 3 },
            }}
            initial={{
              opacity: 0,
            }}
            viewport={{ once: true }}
          >
            I'm a student
          </motion.p>
          <motion.p
            className="md:text-7xl text-6xl font-semibold text-[#ff8709]"
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 3.2, type: "spring", bounce: 0.6 },
            }}
            initial={{
              scale: 0.1,
              opacity: 0,
            }}
            viewport={{ once: true }}
          >
            developer
          </motion.p>
        </div>
      </div>
      <div className="w-screen h-[1px] bg-[#4b4b4b]"></div> {/* Divider */}
      <div className="w-screen h-[10vh] flex flex-row md:gap-8 gap-6 items-center justify-center">
        <a href="https://github.com/AyanCh0w">
          <motion.p
            className="text-lg md:text-xl font-semibold hover:text-[#0ae448] cursor-pointer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Github
          </motion.p>
        </a>
        <a href="https://www.linkedin.com/in/ayanchow/">
          <motion.p
            className="text-lg md:text-xl font-semibold hover:text-[#0a82e4] cursor-pointer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            LinkedIn
          </motion.p>
        </a>
        <a href="https://www.youtube.com/@AyanCh0w">
          <motion.p
            className="text-lg md:text-xl font-semibold hover:text-[#e40a0a] cursor-pointer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Youtube
          </motion.p>
        </a>
        <a href="https://x.com/ayanch0w">
          <motion.p
            className="text-lg md:text-xl font-semibold hover:text-[#e167ff] cursor-pointer"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Twitter
          </motion.p>
        </a>
      </div>
      <div className="w-screen h-[1px] bg-[#4b4b4b]"></div> {/* Divider */}
      <div className=" w-screen flex">
        <div className="flex md:flex-row flex-col my-16 ml-12 md:w-[60vw] gap-8">
          <p className="md:text-4xl text-xl md:font-normal font-semibold md:w-full w-[80vw]">
            I specialize in Machine Learning and full stack development. I enjoy
            building intelligent applications that leverage data-driven insights
            to create impactful user experiences.
          </p>
          <motion.p
            className="text-6xl cursor-pointer"
            animate={
              rocket
                ? {
                    y: [0, -1000, -1000, 0],
                    x: [0, 1000, 1000, 0],
                    scale: [1.5, 1, 0],
                    opacity: [1, 0, 1],
                    transition: { duration: 1 },
                  }
                : {
                    y: 0,
                    x: 0,
                    scale: 1,
                  }
            }
            onAnimationComplete={() => setRocket(false)}
            onClick={() => setRocket(true)}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            🚀
          </motion.p>
        </div>
      </div>
      <div className="w-screen h-[1px] bg-[#4b4b4b]"></div> {/* Divider */}
      <div className="w-screen h-full pb-20 flex flex-col items-center justify-center gap-12">
        <p className="mt-12 text-3xl font-semibold text-[#a047ee]">SKILL SET</p>
        <div className="grid gap-8 md:grid-cols-3 grid-cols-1">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col-reverse w-72 h-96 bg-[#191917] border px-6 py-10 border-[#4b4b4b] rounded-lg gap-2"
          >
            <p className="text-lg">
              I develop solutions to solve problems using advanved technologies.
            </p>
            <p className="text-3xl">Developer</p>
            <p className="text-5xl">💻</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col-reverse w-72 h-96 bg-[#191917] border px-6 py-10 border-[#4b4b4b] rounded-lg gap-2"
          >
            <p className="text-lg">
              I use communication skills to deliver value and ideas that impact.
            </p>
            <p className="text-3xl">Communication</p>
            <p className="text-5xl">🗣️</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col-reverse w-72 h-96 bg-[#191917] border px-6 py-10 border-[#4b4b4b] rounded-lg gap-2"
          >
            <p className="text-lg">
              I create teams and communities to achive my goals
            </p>
            <p className="text-3xl">Leadership</p>
            <p className="text-5xl">👑</p>
          </motion.div>
        </div>
        {/* <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.94 }}
          className="cursor-pointer w-96 h-24 border border-[#4b4b4b] bg-[#191917] rounded-full flex justify-center items-center"
        >
          <a href="/about">
            <p className="text-3xl font-medium">See more about me</p>
          </a>
        </motion.div> */}
      </div>
      <div className="w-screen h-[1px] bg-[#4b4b4b]"></div> {/* Divider */}
      <div className="flex w-screen h-full flex-col items-center">
        <p className="my-12 text-3xl font-semibold text-[#a047ee]">
          MY PROJECTS
        </p>
        <div className="w-screen h-[1px] bg-[#4b4b4b]"></div> {/* Divider */}
        {projects.slice(0, 3).map((project) => (
          <div key={project.title}>
            <a href={project.liveUrl}>
              <motion.div
                whileHover={{ scale: 0.95 }}
                className="flex h-fit md:py-12 py-8 justify-between items-center w-full md:px-16 px-6 cursor-pointer"
                whileTap={{ scale: 0.94 }}
              >
                <div>
                  <p className="md:text-3xl text-md">{project.title}</p>
                  <p className="md:text-lg text-sm">{project.date}</p>
                </div>
                <p className="md:text-2xl text-sm">
                  {project.shortDescription}
                </p>
              </motion.div>
              <div className="w-screen h-[1px] bg-[#4b4b4b]"></div>{" "}
              {/* Divider */}
            </a>
          </div>
        ))}
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.94 }}
          className="m-8 px-10 py-6 text-2xl font-medium bg-[#191917] border border-[#4b4b4b] rounded-full cursor-pointer"
        >
          <a href="/projects">
            <p>Load More</p>
          </a>
        </motion.div>
      </div>
      <div className="w-screen h-[1px] bg-[#4b4b4b]"></div> {/* Divider */}
      <div className="w-screen h-full flex flex-col items-center">
        <p className="my-12 text-3xl font-semibold text-[#a047ee]">
          My Tech Stack
        </p>
        <div className="flex md:flex-row flex-col gap-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col-reverse w-fit h-fit bg-[#191917] border px-6 py-10 border-[#4b4b4b] rounded-lg gap-2"
          >
            <div>
              <p>Next JS</p>
              <p>Tailwind CSS</p>
              <p>TypeScript</p>
              <p>Firebase and GCP Tools</p>
            </div>
            <p className="text-3xl">Web Developent</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col-reverse w-fit h-fit bg-[#191917] border px-6 py-10 border-[#4b4b4b] rounded-lg gap-2"
          >
            <div>
              <p>OpenAI API</p>
              <p>PyTorch</p>
              <p>Tensorflow</p>
              <p>Pandas (Data Analysis)</p>
            </div>
            <p className="text-3xl">Machine Learning</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
