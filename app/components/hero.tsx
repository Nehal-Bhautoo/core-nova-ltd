"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm mb-6 bg-white/5 backdrop-blur"
            >
              Advanced Software Engineering • AI • Simulation Systems
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Building the Next Generation of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent Systems
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              CoreNova Technologies develops high-performance digital platforms,
              telemetry systems, AI-powered solutions, and enterprise-grade
              software architectures engineered for scale, precision, and
              operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="rounded-2xl px-8 py-4 bg-primary text-primary-foreground font-semibold shadow-2xl hover:scale-105 transition-transform">
                Explore Solutions
              </button>

              <button className="rounded-2xl px-8 py-4 border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Visualization Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

            <div className="relative w-80 h-80 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-6 rounded-[2rem] border border-cyan-400/20" />

              <div className="text-center z-10">
                <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  CN
                </div>
                <p className="mt-4 text-muted-foreground text-sm tracking-[0.3em] uppercase">
                  CoreNova Engine
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
