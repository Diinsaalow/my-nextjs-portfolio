"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8 max-w-7xl mx-auto">
      {/* Left side content */}
      <div className="flex flex-col items-start text-left space-y-6 ">
        <div className="inline-block border border-gray-700 px-6 py-2 rounded-[10px]">
          <h2 className="text-2xl md:text-3xl font-medium text-primary ">
            Hello!
          </h2>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            I'm <span className="text-primary">Ismail Abdifadil</span>
          </h1>
        </div>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-xl">
          A passionate web developer creating beautiful, responsive, and
          user-friendly websites
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={() => scrollToSection("#portfolio")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => scrollToSection("#contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Right side with image and tech icons */}
      <div className="r">
        <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden border-4 border-gray-700/10 dark:border-gray-100/10">
          <Image
            src="/my-pic.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
