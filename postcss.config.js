module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-custom-plugin')({ /* options */ }),
      // Add other PostCSS plugins as needed
    ],
  };
  