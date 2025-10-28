"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences: any[] = [
  {
    id: 1,
    company: "Centre de Recherche en Psychologie et Neurosciences (CRPN)",
    position: "Assistant chercheur stagiaire",
    location: "Marseille, France",
    startDate: "Mai 2025",
    endDate: "Juillet 2025",
    description:
      "Bases Cérébrales du traitement de la parole chez le nourrisson: EEG et Apprentissage Automatique.",
    technologies: [
      "Scikit-learn",
      "VsCode",
      "Jupyter-Lab",
      "Slurm (Cluster)",
      "Git",
      "Gitlab",
      "MNE-Python",
    ],
    achievements: [
      "Visualisation, prétraitement de données : filtrage, suppression des artefacts et segmentation",
      "Mise en place du Pipeline d’apprentissage pour la classification des propriétés sonores à partir des données EEG",
      "Décodage EEG : cas des phonèmes /da/ et /ba/, analyse et évaluation",
    ],
  },
  {
    id: 2,
    company:
      "Multimedia, InfoRmation systems and Advanced Computing Laboratory (MIRACL)",
    position: "Assistant chercheur stagiaire",
    location: "Sfax, Tunisie",
    startDate: "Février 2022",
    endDate: "Novembre 2022",
    description:
      "Détection du MCI à partir des données EEG et FNIRS, basée sur le Deep Learning (Transformers).",
    technologies: [
      "Tensorflow",
      "Keras",
      "Colab",
      "Jupyter-Lab",
      "Matlab",
      "MNE-Python",
      "Git",
      "Gitlab",
      "CUDA",
      "cuDNN Toolkit",
    ],
    achievements: [
      "Analyse, nettoyage et organisation de données",
      "Visualisation détaillée et précise de données",
      "Personnalisation de l’architecture Transformer",
      "Construction du modèle final de classification, entraînement, test et évaluation du modèle",
    ],
  },
  {
    id: 3,
    company:
      "Multimedia, InfoRmation systems and Advanced Computing Laboratory (MIRACL)",
    position: "Stagiaire data-analyste",
    location: "Sfax, Tunisie",
    startDate: "Mars 2021",
    endDate: "Avril 2021",
    description:
      "Visualisation et analyse des signaux électroencéphalographiques (EEG).",
    technologies: ["Colab", "Emotiv EPOC+", "EmotivPro", "Django", "Vuejs"],
    achievements: [
      "Enregistrement et acquisition de données EEG avec le casque Emotiv EPOC+",
      "Visualisation de données avec le logiciel EmotivPro",
      "Traitement de données avec élimination d’artefacts",
      "Développement d’une interface pour la visualisation et l’analyse de données EEG",
    ],
  },
  {
    id: 4,
    company:
      "Unité de Recherche RTIM (Research Team in Intelligent Machines) & Intellect Academy | Département IT",
    position: "Stagiaire Développeur",
    location: "Gabès, Tunisie",
    startDate: "Février 2020",
    endDate: "Juin 2020",
    description:
      "Développement d’une application OCR pour scanner des algorithmes SCRATCH.",
    technologies: [
      "OpenCV",
      "Tesseract-OCR",
      "EAST ( An Efficient and Accurate Scene Text Detector)",
      "Mask-RCNN",
      "Graphviz",
    ],
    achievements: [
      "Construction de la base de données à partir des images contenant d’algorithmes Scratch",
      "Catégorisation et annotation des images avec le logiciel d’annotation VIA",
      "Traitement par filtrage approfondi des images",
      "Segmentation des blocs composants les algorithmes Scratch, basée sur les contours et le Deep Learning",
      "Détection et Extraction du texte dans différents blocs segmentés",
      "Génération de graphe par DFS et Conversion d’algorithme Scratch en python",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon parcours professionnel et les défis que j'ai relevés
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {experiences?.map((exp, index) => (
            <motion.div
              key={exp?.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 hidden md:block" />

              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block" />

              {/* Content Card */}
              <div className="md:ml-20 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mb-1 whitespace-nowrap">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="flex items-center whitespace-nowrap">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Technologies utilisées:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.map((tech: any, techIndex: any) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Réalisations clés:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements?.map(
                      (achievement: any, achIndex: any) => (
                        <li
                          key={achIndex}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">
                            •
                          </span>
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
