"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import {
  experiencesI18n,
  experienceIds,
  experienceTechnologies,
} from "@/data/experiences.i18n";

export default function ExperienceSection() {
  const { t, locale } = useTranslation();

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:pb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4">
            {t("experience.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500" />

          <div className="space-y-8 sm:space-y-12">
            {experienceIds.map((expId, index) => {
              const exp = experiencesI18n[expId]?.[locale];
              const technologies = experienceTechnologies[expId];

              if (!exp) return null;

              return (
                <motion.div
                  key={expId}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="hidden md:block absolute top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 transform -translate-y-1/2 z-10"
                    style={{
                      [index % 2 === 0 ? "right" : "left"]: "-2.125rem",
                    }}
                  />

                  {/* Experience Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    {/* Date Badge */}
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>
                        {exp.startDate} -{" "}
                        {exp.endDate === "Present" || exp.endDate === "Présent"
                          ? t("experience.present")
                          : exp.endDate}
                      </span>
                    </div>

                    {/* Company & Position */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-start mb-3 text-gray-700 dark:text-gray-300">
                      <Briefcase
                        size={16}
                        className="mr-2 mt-1 flex-shrink-0"
                      />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={14} className="mr-2 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    {technologies && technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
