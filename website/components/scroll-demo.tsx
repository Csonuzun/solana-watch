"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white pb-20">
              Watch Faces
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    image: "/watchfaces/apps.png",
  },
  {
    image: "/watchfaces/phantom.png",
  },
  {
    image: "/watchfaces/confirm-tx.png",
  },
  {
    image: "/watchfaces/heart-rate.png",
  },
];
