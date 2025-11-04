"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@mihailav.dev",
      link: "mailto:contact@mihailav.dev",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "mihai-lav",
      link: "https://www.linkedin.com/in/mihai-lav/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "MihaiLav",
      link: "https://github.com/MihaiLav",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Available Remote",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-light-50/80 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 dark:text-light-50/80">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 dark:text-light-50/80">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:contact@mihailav.dev"
              className="inline-block btn-primary text-lg"
            >
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
