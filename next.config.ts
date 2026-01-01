import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",               // ✅ out/ 생성
  images: { unoptimized: true },  // ✅ GitHub Pages에서 next/image 문제 방지
  basePath: "/tech-blog",         // ✅ repo 이름이 tech-blog라서
  assetPrefix: "/tech-blog/",
  trailingSlash: true,
};

export default nextConfig;
