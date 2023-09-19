"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Comunication and Multimedia</span>, I pursued my passion for programming by enrolling in a coding 
        bootcamp. During this program, I gained expertise in{" "}
        <span className="font-medium">PHP and Adobe Magento</span>{" "}, and I particularly enjoy the problem-solving aspect of programming.
         My core stack consists of{" "}
        <span className="font-medium">PHP, Adobe Magento, MySQL</span>, and I'm also proficient 
        in Next.js, Prisma, and MongoDB. I am constantly eager to explore and adopt new technologies.
      </p>
      <p>
        <span className="italic">Outside of coding</span>, I like to spend my
        time with my friends, watching movies and go for walks. I enjoy spending time with friends, watching movies, and going for walks. 
        I'm an avid learner and am currently delving 
        into the world of {" "}
        <span className="font-medium">musical production</span>.
      </p>
    </motion.section>
  );
}
