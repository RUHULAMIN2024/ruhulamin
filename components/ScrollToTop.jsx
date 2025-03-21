"use client";

import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 360 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <Button
      className={`z-50 fixed bottom-10 right-4 w-12 h-12 rounded-full p-2 outline-none transition-opacity duration-200 bg-accent hover:bg-accent ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronsUp className="text-white" />
    </Button>
  );
};

export default ScrollToTopButton;
