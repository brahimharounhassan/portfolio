"use client";

import { motion } from "framer-motion";
import React from "react";

const { useState } = React;
import Card from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillCategories {
  ia: SkillCategory;
  data: SkillCategory;
  framework: SkillCategory;
  language: SkillCategory;
  tools: SkillCategory;
  other: SkillCategory;
}

const skillCategories: SkillCategories = {
  ia: {
    title: "Domaines d'Expertise",
    skills: [
      { name: "Machine Learning", level: 100 },
      { name: "Deep Learning", level: 100 },
      { name: "Traitement Automatique du Langage Naturel", level: 95 },
      { name: "IA Générative", level: 95 },
      { name: "Computer Vision", level: 90 },
    ],
  },
  data: {
    title: "Data",
    skills: [
      { name: "Traitement", level: 95 },
      { name: "Analyse", level: 85 },
      { name: "Visualisation", level: 80 },
    ],
  },
  framework: {
    title: "Frameworks",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 85 },
      { name: "Hugging Face", level: 78 },
      { name: "CUDA/CuDNN", level: 70 },
    ],
  },
  language: {
    title: "Langages de Programmation",
    skills: [
      { name: "Python", level: 100 },
      { name: "Java", level: 85 },
      { name: "R", level: 80 },
      { name: "SQL", level: 85 },
      { name: "C/C++", level: 75 },
      { name: "Matlab", level: 75 },
    ],
  },
  tools: {
    title: "Outils & MLOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "MLflow", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS, Google Cloud Storage, Azure", level: 70 },
      { name: "Vercel", level: 65 },
      { name: "GitHub Actions", level: 65 },
    ],
  },
  other: {
    title: "Autres",
    skills: [
      { name: "Agile/Scrum", level: 88 },
      { name: "Jira", level: 85 },
      { name: "OpenCV", level: 80 },
      { name: "Pytest", level: 80 },
      { name: "Flask", level: 78 },
    ],
  },
};

type SkillCategoryKey = keyof SkillCategories;

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<SkillCategoryKey>("ia");

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {(
            Object.entries(skillCategories) as [
              SkillCategoryKey,
              SkillCategory
            ][]
          ).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === key
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
              {skillCategories[activeCategory].title}
            </h3>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map(
                (skill: Skill, index: number) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
