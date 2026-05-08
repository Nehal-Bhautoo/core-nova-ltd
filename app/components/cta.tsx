"use client";

import React from "react";
import { motion } from "framer-motion";

export const Cta: React.FC = () => {
  return (
    <section className="px-6 pb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_40%)]" />

        <div className="relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Engineer the Future with CoreNova
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            From enterprise applications to intelligent infrastructure and
            advanced telemetry systems, we build software engineered for
            tomorrow.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 rounded-2xl px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            Start a Project
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};