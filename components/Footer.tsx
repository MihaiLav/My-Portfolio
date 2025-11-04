"use client";

import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-card/50 border-t border-gray-200 dark:border-dark-border">
      <div className="container-custom px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ML</h3>
            <p className="text-gray-600 dark:text-light-50/70 text-sm">
              Front-End Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-light-50/70 hover:text-primary transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/MihaiLav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-dark hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 hover:scale-110 text-gray-700 dark:text-light-50"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mihai-lav/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 dark:bg-dark hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 hover:scale-110 text-gray-700 dark:text-light-50"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-light-50/70">
            <p>
              © {currentYear} Mihai Iulian Lavric. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Designed and developed with <Heart className="w-4 h-4 text-primary fill-primary" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
