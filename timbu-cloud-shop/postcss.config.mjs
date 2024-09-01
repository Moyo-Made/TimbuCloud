/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Include autoprefixer if not already included
    // Other plugins as needed
  },
};

export default config;
