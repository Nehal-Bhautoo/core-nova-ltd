"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/40 dark:bg-black/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className={"flex flex-row items-center justify-between"}>
          <Image
            loading={"eager"}
            src={"/core-nova.png"}
            alt={"icon"}
            height={100}
            width={100}
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              CoreNova Technologies
            </h1>
            <p className="text-sm text-muted-foreground">
              Engineering Intelligent Systems
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="hover:text-primary transition-colors"
          >
            Services
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#solutions"
            className="hover:text-primary transition-colors"
          >
            Solutions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="hover:text-primary transition-colors"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};
