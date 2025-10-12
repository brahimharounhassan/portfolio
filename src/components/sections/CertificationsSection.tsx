"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  Network,
  Cloud,
  Shield,
  Code,
} from "lucide-react";
import Card from "@/components/ui/Card";
import { useTranslation } from "@/hooks/useTranslation";
import { certifications } from "@/data/certifications";

const getIconByType = (iconType: string) => {
  switch (iconType) {
    case "network":
      return Network;
    case "cloud":
      return Cloud;
    case "security":
      return Shield;
    case "code":
      return Code;
    default:
      return Award;
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800",
        accent: "text-blue-600 dark:text-blue-400",
      };
    case "orange":
      return {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        text: "text-orange-700 dark:text-orange-300",
        border: "border-orange-200 dark:border-orange-800",
        accent: "text-orange-600 dark:text-orange-400",
      };
    case "green":
      return {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-700 dark:text-green-300",
        border: "border-green-200 dark:border-green-800",
        accent: "text-green-600 dark:text-green-400",
      };
    default:
      return {
        bg: "bg-primary-100 dark:bg-primary-900/30",
        text: "text-primary-700 dark:text-primary-300",
        border: "border-primary-200 dark:border-primary-800",
        accent: "text-primary-600 dark:text-primary-400",
      };
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
};

export default function CertificationsSection() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            🏆 Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications Professionnelles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mes certifications et qualifications dans les technologies de pointe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = getIconByType(cert.icon || "award");
            const colorClasses = getColorClasses(cert.color || "primary");
            const isExpired =
              cert.expiryDate && new Date(cert.expiryDate) < new Date();

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full ${
                    cert.featured
                      ? "ring-2 ring-primary-200 dark:ring-primary-800"
                      : ""
                  }`}
                >
                  {cert.featured && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Certification Phare
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                      <IconComponent
                        className={`w-6 h-6 ${colorClasses.accent}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white leading-tight">
                          {cert.name}
                        </h3>
                        {!isExpired && (
                          <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium">Valide</span>
                          </div>
                        )}
                      </div>
                      <p
                        className={`text-sm font-medium ${colorClasses.text} mt-1`}
                      >
                        {cert.organization}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Dates */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Obtenu en {formatDate(cert.issueDate)}</span>
                    </div>
                    {cert.expiryDate ? (
                      <div
                        className={`flex items-center text-sm ${
                          isExpired
                            ? "text-red-500"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {isExpired ? "Expiré le" : "Expire le"}{" "}
                          {formatDate(cert.expiryDate)}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Pas d'expiration</span>
                      </div>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Compétences validées :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    {cert.credentialId && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        ID: {cert.credentialId}
                      </div>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center text-sm ${colorClasses.accent} hover:underline`}
                      >
                        <span>Vérifier</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {certifications.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Certifications
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {
                  certifications.filter(
                    (c) => !c.expiryDate || new Date(c.expiryDate) > new Date()
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Actives
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {
                  Array.from(new Set(certifications.flatMap((c) => c.skills)))
                    .length
                }
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Compétences
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {
                  Array.from(new Set(certifications.map((c) => c.organization)))
                    .length
                }
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Organismes
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
