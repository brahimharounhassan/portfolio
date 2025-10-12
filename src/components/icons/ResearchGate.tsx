import React from "react";

interface ResearchGateIconProps {
  className?: string;
  size?: number;
}

export default function ResearchGateIcon({
  className = "w-5 h-5",
  size = 20,
}: ResearchGateIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="ResearchGate"
    >
      <path d="M19.586 0H4.414A4.414 4.414 0 000 4.414v15.172A4.414 4.414 0 004.414 24h15.172A4.414 4.414 0 0024 19.586V4.414A4.414 4.414 0 0019.586 0zM8.063 18.937H6.031V9.69h2.032v9.247zM7.047 8.73a1.177 1.177 0 11-.001-2.354 1.177 1.177 0 01.001 2.354zm10.906 10.207h-2.031v-4.492c0-.759-.015-1.734-1.057-1.734-1.058 0-1.22.826-1.22 1.678v4.548H11.613V9.69h1.95v1.262h.027c.271-.514.935-1.057 1.925-1.057 2.058 0 2.438 1.354 2.438 3.114v5.928zM12.5 7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
    </svg>
  );
}
