import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/40 dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            CoreNova Technologies
          </h1>
          <p className="text-sm text-muted-foreground">
            Engineering Intelligent Systems
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#solutions" className="hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
