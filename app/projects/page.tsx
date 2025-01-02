"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "@/lib/projects";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col bg-[#00f0f] text-[#fffff3] font-sans font-normal px-4 md:px-12">
      <div className="h-[30vh] md:h-[40vh] mx-auto flex flex-col justify-center text-center">
        <p className="md:text-7xl text-4xl font-semibold w-full">MY PROJECTS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="flex flex-col items-center md:items-start gap-6 border border-[#4b4b4b] rounded-lg p-6 bg-[#111] shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-lg"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <p className="text-2xl md:text-3xl font-bold">{project.title}</p>
              <p className="text-md md:text-lg text-gray-400">{project.date}</p>
              <ul className="list-disc list-inside text-md md:text-lg text-[#fffff3]">
                {project.bulletPoints.map((bulletPoint, index) => (
                  <li key={index}>{bulletPoint}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm md:text-md bg-[#4b4b4b] text-[#fffff3] rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 text-center text-lg md:text-xl font-semibold border border-[#4b4b4b] rounded-lg cursor-pointer"
                >
                  Project Link
                </motion.div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
