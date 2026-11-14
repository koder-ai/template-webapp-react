/** @type {import('next').NextConfig} */
const nextConfig = {
  // The "N" badge is Next's own dev overlay; in the koderAI preview it reads as part of the user's app.
  devIndicators: false,
  // Previews are served from the builder's domain, which Next's dev-origin guard blocks by default.
  allowedDevOrigins: [
    '*.koder.computer',
    '*.apps-test.koder.com',
    '*.apps.koder.com',
    '*.azurecontainerapps.io',
  ],
};

export default nextConfig;
