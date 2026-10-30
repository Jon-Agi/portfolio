import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  // Exporta el sitio como HTML estático en /out (para Cloudflare Pages)
  output: "export",
  images: {
    // Sin servidor no hay optimizador de imágenes de Next
    unoptimized: true,
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE == "true",
});

const withNextIntl = createNextIntlPlugin("./i18n/requests.tsx");
export default withAnalyzer(withNextIntl(nextConfig));
