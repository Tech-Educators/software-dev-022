"use client";
import { motion } from "motion/react";

export default function AnimateText({children}) {
  return (
    <motion.div
      animate={{ rotate: 360, scale: 3}}
      transition={{
        repeat: Infinity,
        duration: 5,
        type: "spring",
        bounce: 0.5,
      }}
      className="w-60"
    >
      {children}
    </motion.div>
  );
}
