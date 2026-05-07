import React from "react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-28">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
          Capabilities
        </p>

        <h3 className="text-4xl md:text-5xl font-black tracking-tight">
          Precision Engineering for Modern Digital Infrastructure
        </h3>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
        {[
          {
            title: "Enterprise Software",
            desc: "Scalable backend systems, APIs, and distributed architectures.",
          },
          {
            title: "AI Solutions",
            desc: "Machine learning workflows, intelligent automation, and predictive systems.",
          },
          {
            title: "Telemetry & Simulation",
            desc: "Real-time data visualization and high-performance analytics platforms.",
          },
          {
            title: "Mobile Engineering",
            desc: "Cross-platform mobile applications with enterprise-grade reliability.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/20" />

            <h4 className="mt-8 text-2xl font-bold">{item.title}</h4>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
