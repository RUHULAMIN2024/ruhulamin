"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import sylphionImage from "../../public/assets/journey/experience/sylphion.png";
import wizzyImage from "../../public/assets/journey/experience/wizzy.png";

import { FaJs, FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiStripe,
  SiFigma,
  SiPayloadcms,
  SiStrapi,
  SiSquare,
  SiMongoose,
  SiShadcnui,
  SiLemonsqueezy,
  SiPayoneer,
  SiPaypal,
} from "react-icons/si";

const journey = [
  // experience
  {
    type: "experience",
    company: "Wizzyweb Private Limited",
    logoUrl: wizzyImage,
    position: "React Developer",
    duration: "March 2025 - Present",
    description:
      "Currently working as a Front-End Developer at Wizzyweb Private Limited where I develop and optimize web applications using React.js, Next.js, and modern UI frameworks. Focused on creating responsive, high-performance, and user-centric interfaces.",
  },
  {
    type: "experience",
    company: "Sylphion",
    logoUrl: sylphionImage,
    position: "Software Engineer Intern",
    duration: "March 2025 - July 2025",
    description:
      "Worked as an intern at Sylphion, where I contributed to the development of SaaS platforms and custom software solutions. Learned best practices in software development while collaborating on projects tailored for global markets.",
  },

  // education

  {
    type: "education",
    institution: "Programming-Hero",
    logoUrl: "/assets/journey/education/ph.jpeg",
    qualification: "Next Level Web Development",
    duration: "October 2024 - April 2025",
    description:
      "Gained expertise in full-stack development through the Next Level Web Development course. Advanced skills in TypeScript, Node.js, Express, MongoDB, and Mongoose. Worked with Redux and Next.js for state management and server-side rendering. Built scalable apps, implemented secure authentication, and optimized APIs.",
  },
  {
    type: "education",
    institution: "Programming-Hero",
    logoUrl: "/assets/journey/education/ph.jpeg",
    qualification: "Complete Web Development Course With Jhankar Mahbub",
    duration: "December 2023 - June 2024",
    description:
      "Gained expertise in full-stack development with React, Node.js, and MongoDB. Built responsive UIs with HTML, CSS, and Tailwind. Implemented APIs, authentication, and deployment. Strengthened problem-solving through hands-on projects.",
  },

  {
    type: "education",
    institution: "Rahat's English Care",
    logoUrl: "/assets/journey/education/rahat.png",
    qualification: "Rahat's English Care",
    duration: "November 2023 - February 2024",
    description:
      "Developed fluency, pronunciation, and confidence in real-life conversations. Improved listening and speaking skills for effective communication. Enhanced vocabulary and grammar for better articulation in both formal and informal settings.",
  },
  {
    type: "education",
    institution: "National University, Bangladesh",
    logoUrl: "/assets/journey/education/institution.png",
    qualification: "Bachelor Of Business Administration (BBA)",
    duration: "2028 - 2022",
    description:
      "Completed a BBA (Bachelor of Business Administration) from National University, gaining expertise in management, marketing, finance, and organizational behavior. Developed strong analytical, strategic, and leadership skills through practical projects and teamwork.",
  },
  // skills
  {
    type: "skill",
    name: "JavaScript",
    icon: <FaJs />,
    duration: "Learned in 2024",
    description:
      "Implemented interactive and dynamic features for websites using JavaScript, enhancing user experience.",
  },
  {
    type: "skill",
    name: "TypeScript",
    icon: <SiTypescript />,
    duration: "Learned in 2024",
    description:
      "Leveraged TypeScript for type-safe JavaScript applications, improving code maintainability and robustness.",
  },

  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2024",
    description:
      "Built component-driven UIs with React.js for seamless and scalable frontend applications.",
  },

  {
    type: "skill",
    name: "Next.js",
    icon: <SiNextdotjs />,
    duration: "Learned in 2024",
    description:
      "Developed server-rendered and static web applications using Next.js, ensuring performance optimization.",
  },

  {
    type: "skill",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    duration: "Learned in 2024",
    description:
      "Styled responsive and modern web interfaces using Tailwind CSS for rapid development.",
  },
  {
    type: "skill",
    name: "Shadcn",
    icon: <SiShadcnui />,
    duration: "Learned in 2025",
    description:
      "Utilized ShadCN to create reusable and accessible UI components with a focus on simplicity and design consistency, enhancing the user interface development experience in modern web applications.",
  },

  {
    type: "skill",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "Learned in 2024",
    description:
      "Developed server-side applications using Node.js for scalable backend systems.",
  },
  {
    type: "skill",
    name: "Express.js",
    icon: <SiExpress />,
    duration: "Learned in 2024",
    description:
      "Built RESTful APIs and web applications with Express.js, ensuring fast and lightweight backend solutions.",
  },
  {
    type: "skill",
    name: "Mongoose",
    icon: <SiMongoose />,
    duration: "Learned in 2024",
    description:
      "Designed and managed MongoDB schemas using Mongoose for efficient database operations.",
  },
  {
    type: "skill",
    name: "MongoDB",
    icon: <SiMongodb />,
    duration: "Learned in 2024",
    description:
      "Implemented NoSQL databases with MongoDB for flexible and scalable data storage.",
  },

  // {
  //   type: "skill",
  //   name: "Prisma ORM",
  //   icon: <SiPrisma />,
  //   duration: "Learned in 2022",
  //   description:
  //     "Simplified database management and queries with Prisma ORM for SQL databases.",
  // },
  // {
  //   type: "skill",
  //   name: "PostgreSQL",
  //   icon: <SiPostgresql />,
  //   duration: "Learned in 2022",
  //   description:
  //     "Managed relational databases effectively using PostgreSQL for data consistency and integrity.",
  // },

  // {
  //   type: "skill",
  //   name: "Payload CMS",
  //   icon: <SiPayloadcms />,
  //   duration: "Learned in 2022",
  //   description:
  //     "Implemented Payload CMS for flexible and scalable content management solutions.",
  // },

  {
    type: "skill",
    name: "Stripe Payment",
    icon: <SiStripe />,
    duration: "Learned in 2025",
    description:
      "Integrated Stripe for secure and seamless payment processing in web applications.",
  },
  {
    type: "skill",
    name: "SSLCOMMERZ Payment",
    icon: <SiPayoneer />,
    duration: "Learned in 2025",
    description:
      "Integrated SSLCOMMERZ for secure and seamless payment processing in web applications.",
  },

  {
    type: "skill",
    name: "ShurjoPay Payment",
    icon: <SiStripe />,
    duration: "Learned in 2025",
    description:
      "Integrated ShurjoPay for secure and seamless payment processing in web applications.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs defaultValue="skills" className="w-full flex flex-col items-center">
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="skills">My Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
