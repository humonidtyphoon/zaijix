const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const tailwindConfig = require('./tailwind.config.cjs')

module.exports = {
  plugins: [
    // Pass the actual config object so Tailwind doesn't have to
    // resolve the config path differently on Netlify vs local.
    tailwindcss(tailwindConfig),
    autoprefixer,
  ],
}


