"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function MotionButtons() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-4 mt-4 md:justify-start"
    >
      {/* Project Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="transition-transform duration-300 transform"
      >
        <Button className="rounded-full">
          Explore My Projects
          <Sparkles className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>

      {/* GitHub Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="transition-transform duration-300 transform"
      >
        <Button
          variant="outline"
          className="rounded-full border-primary/20 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5"
        >
          <a
            href="https://github.com/Amalcs9188"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            GitHub
            <svg
              className="inline ml-1 size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
