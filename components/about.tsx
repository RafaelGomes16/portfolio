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
        <span className="font-medium">Comunication and Multimedia</span>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">more about PHP and Adobe Magento</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. My core stack is{" "}
        <span className="font-medium">PHP, Adobe Magento, MySQL</span>. I am
        also familiar with Next.js, Prisma and MongoDB. I am always looking to
        learn new technologies.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I like to spend my
        time with my friends, watching movies and go for walks. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">musical production</span>.
      </p>
    </motion.section>
  );
}