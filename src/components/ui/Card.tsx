import React, { ReactNode } from "react";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        "card",
        paddingClasses[padding],
        hover && "hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
