"use client";

import { motion } from "framer-motion";
import React from "react";

const { useState } = React;
import { ExternalLink, Github, Filter, Award, Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: t("projects.categories.all") },
    { id: "deep learning", label: t("projects.categories.deep learning") },
    {
      id: "machine learning",
      label: t("projects.categories.machine learning"),
    },
    { id: "computer vision", label: t("projects.categories.computer vision") },
    { id: "nlp", label: t("projects.categories.nlp") },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" ||
      project.category.toLowerCase().includes(activeFilter.toLowerCase())
  );

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Filter Tabs - Responsive */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base whitespace-nowrap ${
                activeFilter === category.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600"
              }`}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="truncate">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card
                className={`group overflow-hidden h-full ${
                  project.featured
                    ? "border-primary-200 dark:border-primary-800"
                    : ""
                }`}
              >
                {project.featured && (
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-4 py-2 text-sm font-medium flex items-center">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{t("projects.featured")}</span>
                  </div>
                )}

                <div
                  className={`p-4 sm:p-6 ${
                    project.featured
                      ? "grid grid-cols-1 xl:grid-cols-2 gap-6"
                      : ""
                  }`}
                >
                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">
                        {project.category}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats (if featured) - Responsive Grid */}
                    {project.featured && project.stats && (
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-4 border-t border-gray-200 dark:border-gray-700">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center min-w-0">
                            <div className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400 truncate">
                              {value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 capitalize truncate">
                              {key === "precision"
                                ? t("hero.stats.precision")
                                : key === "citations"
                                ? t("hero.stats.citations")
                                : key === "published"
                                ? t("hero.stats.published")
                                : key === "views"
                                ? t("hero.stats.views")
                                : key}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights - Responsive */}
                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 text-sm"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0">
                            ✨
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 leading-relaxed break-words">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies - Responsive Wrap */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions - Responsive Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 pt-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                          className="w-full sm:w-auto justify-center sm:justify-start"
                        >
                          <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">
                            {t("projects.viewCode")}
                          </span>
                        </Button>
                      )}
                      {project.publicationUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() =>
                            window.open(project.publicationUrl, "_blank")
                          }
                          className="w-full sm:w-auto justify-center sm:justify-start"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">
                            {t("projects.viewPublication")}
                          </span>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="w-full sm:w-auto justify-center sm:justify-start"
                        >
                          <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">
                            {t("projects.viewDemo")}
                          </span>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Featured Project Visual - Hidden on small screens */}
                  {project.featured && (
                    <div className="hidden xl:flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg p-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                          🧠
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {t("projects.featured")}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
