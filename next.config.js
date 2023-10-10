/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images : {
    domains : ['sangw.in', 'localhost', 'picsum.photos', 'edamam-product-images.s3.amazonaws.com']
  }
}

module.exports = nextConfig
