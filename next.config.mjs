/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    rewrites: async () => [
      {
        source: "/projects/analog-clock",
        destination: "/mini-project/Clock/index.html",
      },
      {
        source: "/projects/digital-clock",
        destination: "/mini-project/Clock1/index.html",
      },
      {
        source: "/projects/parallax-scrolling",
        destination: "/mini-project/Parallax Scrolling/index.html",
      },
      {
        source: "/projects/calculator",
        destination: "/mini-project/Calculator/index.html",
      },
    ],
};

export default nextConfig;
