const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss({
      // Make sure Netlify always finds the Tailwind config,
      // regardless of working directory quirks.
      config: './tailwind.config.cjs',
    }),
    autoprefixer,
  ],
}

