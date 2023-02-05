// /** @type {import('next').NextConfig} */

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placeimg.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.lorem.space',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.lorem.space',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.picsum.photos',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.escuelajs.co',
//       },
//       {
//         protocol: 'https',
//         hostname: 'encrypted-tbn0.gstatic.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.blogs.es',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// };

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placeimg.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.lorem.space',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.picsum.photos',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.escuelajs.co',
//       },
//       {
//         protocol: 'https',
//         hostname: 'encrypted-tbn0.gstatic.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.blogs.es',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// });

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com','api.lorem.space','i.picsum.photos','api.escuelajs.co','encrypted-tbn0.gstatic.com','i.blogs.es','images.unsplash.com','api.lorem.space', 'cdn.pixabay.com', 'placeimg.com', 'www.libreriahuequito.com', 'thumbs.dreamstime.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);