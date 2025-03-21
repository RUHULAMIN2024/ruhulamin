"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

// components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="h-[500px] lg:h-[800px]  bg-accent/10 xl:bg-white"
      id="home"
    >
      {/* header */}
      {/* <Header /> */}
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <p className="lead max-w-[476px] mb-1">
            Full-Stack Web Development with MERN
          </p>
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">Building Fast And Scalable</span> Web
            App <br /> with
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "MongoDB",
                2000,
                "Express",
                2000,
                "React",
                2000,
                "Node",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blend aesthetics with
            performance.
          </p>
          <Link
            download="resume.pdf"
            href="https://drive.google.com/uc?export=download&id=1TFQ_Zf37CY3oLqvnmHd6k8fLZmLQsU5G"
          >
            <button className="btn btn-accent mb-8">Download Resume</button>
          </Link>
          {/* stats */}
          {/* <Stats /> */}
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[52vw] h-[700px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[530px] h-[540px] -bottom-[5px]  left-[6.5vw]">
            <Image
              src="/assets/hero/mern-developer.webp"
              fill
              quality="100"
              priority
              className="object-contain"
              alt=""
            />
          </div>
          {/* arrow shape */}
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt=""
            />
          </div>
          {/* shape 1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  alt=""
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          {/* shape 2 */}
          <div
            className="absolute top-[240px] xl:left-[30vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  alt=""
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          {/* shape 3 */}
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt=""
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
