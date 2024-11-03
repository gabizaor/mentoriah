// tailwind.config.js
module.exports = {
  content: [
    "./App.tsx", // Inclua o HTML principal do projeto
    "./src/**/*.{js,jsx,ts,tsx}", // Inclua todos os arquivos JS, JSX, TS, TSX na pasta src
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-home": "url('/src/assets/bg-home.jpg')",
      }),
    },
  },
  plugins: [],
};
