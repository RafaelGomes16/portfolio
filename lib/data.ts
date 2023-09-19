import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corp-comment.png";
import movieAppImg from "@/public/movie-app.png";
import typeCounterImg from "@/public/type-counter.png";
import dashboardImg from "@/public/dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Vila Real, PT",
    description:
      "I graduated after 3 years of studying. I immediately found a Professional Apprenticeship as a web developer to learn more about Adobe Magento.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Web Developer",
    location: "Porto, PT",
    description:
      "I started training at the company as a web developer and it was a unique opportunity as it allowed me to gain more knowledge and insight into the world of work.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Backend Developer",
    location: "Porto, PT",
    description:
      "I'm currently interning at a web development company where most of my work is backend related.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Type & Count",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: typeCounterImg,
  },
  {
    title: "CorpComment",
    description:
      "In this App the Users can give public feedback to companies using the #.",
    tags: ["HTML","CSS","JavaScript", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Dashboard",
    description:
      "This project is a Next.js dashboard app, enriched by Tailwind CSS, where you can effortlessly analyze sales.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    imageUrl: dashboardImg,
  },
  {
    title: "Movie App",
    description:
      "My Next.js movie app, crafted with Tailwind CSS, lets you discover popular films.",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS", "API"],
    imageUrl: movieAppImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Magento",
  "WordPress",
  "Drupal",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Git",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Framer Motion",
] as const;