import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            About CoreNova
          </p>

          <h3 className="text-4xl md:text-5xl font-black tracking-tight">
            A Technology Company Built Around Engineering Excellence
          </h3>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            CoreNova Technologies delivers modern software systems with an
            emphasis on reliability, scalability, and intelligent automation.
          </p>

          <p>
            Our mission is to bridge advanced engineering with practical
            business outcomes through high-performance software architecture and
            next-generation digital platforms.
          </p>

          <p>
            We operate with a systems-first philosophy — every component,
            integration, and workflow is designed for long-term sustainability
            and strategic adaptability.
          </p>
        </div>
      </div>
    </section>
  );
}