/** @type {import('next').NextConfig} */
const nextConfig = {
  // Previews are served from the builder's domain, which Next's dev-origin guard blocks by default.
  allowedDevOrigins: ['*.apps-test.koder.com', '*.apps.koder.com', '*.azurecontainerapps.io'],
};

export default nextConfig;
