"use client";

import React from "react";
import { motion } from "framer-motion";

export const Solutions: React.FC = () => {
  return (
    <section
      id="solutions"
      className="relative py-28 border-y border-white/10 bg-gradient-to-b from-transparent to-cyan-500/5"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl p-10 overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="aspect-square rounded-2xl border border-white/10 bg-white/5"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Intelligent Platforms
          </p>

          <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Systems Designed for Performance, Reliability, and Strategic
            Advantage
          </h3>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              We architect digital ecosystems that integrate real-time
              analytics, AI-assisted decision making, and resilient
              infrastructure.
            </p>

            <p>
              Our focus is on creating systems that remain adaptable under
              scale, operational stress, and evolving business requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
