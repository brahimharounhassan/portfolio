import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedDate?: string;
  author?: string;
}

export default function MetaTags({
  title = "Portfolio - Brahim Haroun Hassan",
  description = "Mon portfolio personnel . Découvrez mes projets et compétences.",
  keywords = [
    "Data scientist",
    "Intelligence Artificielle",
    "Deep Learning",
    "Machine Learning",
    "Vision par ordinateur",
    "Traitement automatique du langage naturel",
    "Python",
    "Data Analysis",
    "Data Visualization",
  ],
  image = "/portfolio/logo.jpg",
  url = "https://brahimharounhassan.github.io/portfolio",
  type = "website",
  publishedDate,
  author = "Brahim Haroun Hassan",
}: MetaTagsProps) {
  const fullTitle = title.includes("Portfolio")
    ? title
    : `${title} | Portfolio`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@elbramosJr" />

      {/* Article specific */}
      {type === "article" && publishedDate && (
        <>
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:author" content={author} />
        </>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author,
            jobTitle: "Ingénieur IA / Data Scientist",
            url: url,
            image: image,
            sameAs: [
              "https://github.com/brahimharounhassan",
              "https://linkedin.com/in/brahimharounhassan",
            ],
            knowsAbout: [
              "PyTorch",
              "TensorFlow",
              "Keras",
              "Machine Learning",
              "Deep Learning",
              "Traitement automatique du langage naturel",
              "Vision par ordinateur",
              "Python",
            ],
            alumniOf: "Aix-Marseille Université",
            worksFor: {
              "@type": "Organization",
              name: "Etudiant",
            },
          }),
        }}
      />
    </Head>
  );
}
