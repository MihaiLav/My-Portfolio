"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js 14, featuring server-side rendering, dynamic product pages, shopping cart functionality, and Stripe payment integration.",
      image: "/assets/img/project-ecommerce.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
      github: "https://github.com/MihaiLav",
      demo: "#",
      featured: true,
    },
    {
      title: "Task Management Dashboard",
      description: "Modern task management application with drag-and-drop functionality, real-time updates, user authentication, and team collaboration features.",
      image: "/assets/img/project-taskmanager.jpg",
      tags: ["React", "TypeScript", "Redux", "Firebase", "DND Kit"],
      github: "https://github.com/MihaiLav",
      demo: "#",
      featured: true,
    },
    {
      title: "Real-Time Chat Application",
      description: "Real-time messaging platform with WebSocket support, user presence indicators, message notifications, and file sharing capabilities.",
      image: "/assets/img/project-chat.jpg",
      tags: ["Next.js", "Socket.io", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/MihaiLav",
      demo: "#",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      description: "Clean and intuitive weather application with location-based forecasts, hourly and daily predictions, and beautiful weather visualizations.",
      image: "/assets/img/project-weather.jpg",
      tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com/MihaiLav",
      demo: "#",
      featured: false,
    },
    {
      title: "Portfolio Website Builder",
      description: "No-code platform for creating stunning portfolio websites with customizable templates, drag-and-drop editor, and one-click deployment.",
      image: "/assets/img/project-builder.jpg",
      tags: ["Next.js", "React DnD", "Vercel", "Tailwind CSS"],
      github: "https://github.com/MihaiLav",
      demo: "#",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness tracker with workout logging, progress charts, nutrition tracking, and personalized workout recommendations.",
      image: "/assets/img/project-fitness.jpg",
      tags: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
      github: "https://github.com/MihaiLav",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-light-50/80 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in modern web development
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-2xl ${
                project.featured ? "lg:grid lg:grid-cols-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 lg:h-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400 dark:text-gray-600">
                    <div className="text-6xl mb-2">🚀</div>
                    <p className="text-sm font-medium">{project.title}</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-light-50/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-light-50 bg-gray-100 dark:bg-dark rounded-full border border-gray-200 dark:border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-light-50 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
