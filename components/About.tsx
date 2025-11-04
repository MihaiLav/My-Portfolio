"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Palette, Zap, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Systems",
      description: "Creating consistent and reusable component libraries with attention to detail",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively in teams using Git, Agile methodologies, and code reviews",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl rotate-6 blur-sm" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/assets/img/cv.png"
                  alt="Mihai Iulian Lavric"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Front-End Developer with a Designer's Eye
            </h3>
            <p className="text-lg text-gray-600 dark:text-light-50/80 leading-relaxed">
              With a background in UX/UI design, I bring a unique perspective to front-end development.
              I don't just write code—I create experiences that are both beautiful and functional.
            </p>
            <p className="text-lg text-gray-600 dark:text-light-50/80 leading-relaxed">
              My expertise spans the modern web development stack, with a focus on React ecosystem,
              TypeScript, and cutting-edge frameworks like Next.js. I'm passionate about building
              accessible, performant web applications that users love.
            </p>
            <p className="text-lg text-gray-600 dark:text-light-50/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or staying up-to-date with the latest web development trends.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-light-50/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
