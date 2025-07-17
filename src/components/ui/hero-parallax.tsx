"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

// import { motion as Motion } from "framer-motion";
import { GradientText } from "../gradinetText";
import { Button } from "./button";
import { Sparkles } from "lucide-react";
import { MotionButtons } from "../motionButton";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div
      ref={ref}
      className="h-min py-16 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.15),rgba(30,30,40,0))]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(229,62,62,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_10%_90%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(255,100,150,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_90%_20%,rgba(100,150,255,0.05),transparent_50%)]"></div>

        <div className="bg-noise absolute inset-0 opacity-[0.02]"></div>
        <div className="absolute inset-0 opacity-5 backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(229,62,62,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(229,62,62,0.05)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-[0.02] dark:[background-image:linear-gradient(rgba(200,200,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(200,200,255,0.05)_1px,transparent_1px)]"></div>
      </motion.div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse mb-20 space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative top-0 left-0 w-full px-4 py-20 mx-auto max-w-7xl md:py-40">
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold md:text-7xl dark:text-white">
        Turning Ideas into Beautiful, <br />{" "}
        <GradientText>Functional Websites</GradientText>
      </motion.h1>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mt-8 text-base md:text-xl dark:text-neutral-200">
        I craft responsive, user-friendly web applications using the latest
        technologies. With a passion for design and code, I help bring your
        digital vision to life.
      </motion.p>

      <MotionButtons/>
    </motion.div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 object-cover object-left-top w-full h-full"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 w-full h-full bg-black opacity-0 pointer-events-none group-hover/product:opacity-80"></div>
      <h2 className="absolute text-white opacity-0 bottom-4 left-4 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
