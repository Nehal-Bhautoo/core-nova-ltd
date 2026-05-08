"use client";

import React from "react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h4 className="font-bold text-xl">CoreNova Technologies</h4>
          <p className="text-sm text-muted-foreground mt-2">
            Intelligent Systems • Advanced Engineering • AI Solutions
          </p>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>Email: contact@corenova.tech</p>
          <p>© 2026 CoreNova Technologies. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};