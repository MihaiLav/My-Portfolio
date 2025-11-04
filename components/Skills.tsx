"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Frameworks & Libraries",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
      ],
    },
    {
      category: "Styling & UI",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "CSS3 / SASS", level: 90 },
        { name: "Framer Motion", level: 85 },
        { name: "Styled Components", level: 85 },
      ],
    },
    {
      category: "State Management & Data",
      skills: [
        { name: "Redux / Zustand", level: 85 },
        { name: "React Query", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Webpack / Vite", level: 80 },
        { name: "npm / yarn", level: 90 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      category: "Testing & Quality",
      skills: [
        { name: "Jest", level: 80 },
        { name: "React Testing Library", level: 80 },
        { name: "ESLint / Prettier", level: 90 },
        { name: "Lighthouse / Web Vitals", level: 85 },
      ],
    },
    {
      category: "Additional Skills",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "Web Accessibility (a11y)", level: 85 },
        { name: "Performance Optimization", level: 85 },
        { name: "Figma to Code", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-light-50/80 max-w-2xl mx-auto">
            A comprehensive toolkit of modern web technologies and best practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-light-50">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-primary-700 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
