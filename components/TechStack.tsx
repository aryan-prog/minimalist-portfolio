"use client";

import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import { techstack } from "@/data";

const TechStack = () => {
  return (
    <div id="techstack" className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <h1 className="heading text-center">
        My <span className="text-purple">TechStack</span>
      </h1>

      <div className="w-full py-10 flex justify-center">
        <FloatingDock
          mobileClassName="flex flex-wrap z-50"
          desktopClassName=" z-50"
          items={techstack}
        />
      </div>
    </div>
  );
};

export default TechStack;
