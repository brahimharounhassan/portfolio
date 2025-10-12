"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Trophy, Code, Shield } from "lucide-react";
import Card from "@/components/ui/Card";
import SecureDownloadCV from "@/components/ui/SecureDownloadCV";
import { useTranslation } from "@/hooks/useTranslation";

export default function CVSection() {
  const { t } = useTranslation();

  return (
    <section
      id="cv"
      className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            {t("cv.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            {t("cv.title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t("cv.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* CV Preview - Responsive */}
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-4">
                      CV
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t("cv.preview")}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CV Info & Downloads - Responsive */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                  {t("cv.completePortfolio")}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {t("cv.description")}
                </p>
              </div>

              {/* Highlights - Responsive */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">
                    {t("cv.highlights.education")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">
                    {t("cv.highlights.publications")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-words">
                    {t("cv.highlights.projects")}
                  </span>
                </div>
              </div>

              {/* Download Buttons - Responsive Stack */}
              <div className="space-y-4 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <SecureDownloadCV
                    variant="primary"
                    size="lg"
                    language="fr"
                    className="w-full text-center"
                  />
                  <SecureDownloadCV
                    variant="outline"
                    size="lg"
                    language="en"
                    className="w-full text-center"
                  />
                </div>

                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="text-center break-words">
                    {t("cv.securityInfo")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
