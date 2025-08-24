"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { BgGradient } from "../bg-Gradient";
import { testimonialsData } from "@/data/project";
import { GradientText } from "../gradinetText";

export const AnimatedTestimonials = ({
  autoplay = false,
}: {
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div>
      <div className="px-4 py-20 relative mx-auto font-sans md:px-8 lg:px-48">
            <BgGradient />
        <div className="relative  grid grid-cols-1  gap-20 md:grid-cols-2">
          <div className="">
            <div className="relative lg:w-120 sm:w-52 h-80">
              <BgGradient clasName=" bottom-0 right-0"/>
              <AnimatePresence>
                {testimonialsData?.map((testimonial, index) => (
                  <motion.div
                    key={
                      typeof testimonial.src === "string"
                        ? testimonial.src
                        : testimonial.src.src
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonialsData.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom">
                   
                      <img
                        src={
                          typeof testimonial.src === "string"
                            ? testimonial.src
                            : testimonial.src.src
                        }
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="object-fill object-center contrast-125  w-full h-full rounded-3xl"
                      />
                     
                  
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                <GradientText>{testimonialsData[active].name}</GradientText>
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonialsData[active].designation}
              </p>
              <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                {testimonialsData[active].quote
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block">
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center bg-gray-100 rounded-full group/button h-7 w-7 dark:bg-neutral-800">
                <IconArrowLeft className="w-5 h-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center bg-gray-100 rounded-full group/button h-7 w-7 dark:bg-neutral-800">
                <IconArrowRight className="w-5 h-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
