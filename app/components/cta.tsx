import React from "react";

export const Cta: React.FC = () => {
  return (
    <section className="px-6 pb-28">
      <div className="max-w-7xl mx-auto rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-2xl p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_40%)]" />

        <div className="relative z-10">
          <h3 className="text-4xl md:text-6xl font-black tracking-tight">
            Engineer the Future with CoreNova
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            From enterprise applications to intelligent infrastructure and
            advanced telemetry systems, we build software engineered for
            tomorrow.
          </p>

          <button className="mt-10 rounded-2xl px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg shadow-2xl hover:scale-105 transition-transform">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}