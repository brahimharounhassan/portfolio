"use client";

import React from 'react'

const { useEffect } = React;
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur pour le debugging
    console.error("Erreur de l'application:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Une erreur s&apos;est produite
          </h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Quelque chose s&apos;est mal passé. Cette erreur a été signalée et
            nous travaillons à la résoudre.
          </p>

          {process.env.NODE_ENV === "development" && (
            <details className="text-left text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300 mb-2">
                Détails de l&apos;erreur (développement)
              </summary>
              <pre className="text-red-600 dark:text-red-400 whitespace-pre-wrap break-all">
                {error.message}
              </pre>
            </details>
          )}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={reset}
              className="w-full sm:w-auto"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Réessayer
            </Button>

            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
