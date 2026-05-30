/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages we build a fully static export served from a
// sub-path (e.g. /gento). Both are driven by env vars so local `npm run dev`
// and `npm run build` keep working unchanged (vars unset -> normal app).
const isExport = process.env.NEXT_OUTPUT_EXPORT === "true";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  ...(isExport ? { output: "export" } : {}),
  basePath,
  // GitHub Pages can't run the Next image optimizer; we use no <Image> anyway.
  images: { unoptimized: true },
};

export default nextConfig;
