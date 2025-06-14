/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forum: {
          yellow: {
            50: '#FFFBE5',
            100: '#FFF7CC',
            200: '#FFF099',
            300: '#FFE966',
            400: '#FFE033',
            500: '#FFD700',
            600: '#CCAC00',
            700: '#998100',
            800: '#665600',
            900: '#332B00',
          },
          black: {
            50: '#e6e6e6',
            100: '#cccccc',
            200: '#999999',
            300: '#666666',
            400: '#333333',
            500: '#000000',
            600: '#000000',
            700: '#000000',
            800: '#000000',
            900: '#000000',
          },
          white: {
            50: '#ffffff',
            100: '#ffffff',
            200: '#ffffff',
            300: '#ffffff',
            400: '#ffffff',
            500: '#ffffff',
            600: '#f2f2f2',
            700: '#e6e6e6',
            800: '#cccccc',
            900: '#b3b3b3',
          },
          red: {
            50: '#fdecea',
            100: '#f9d3d1',
            200: '#f4a7a3',
            300: '#ef7b75',
            400: '#ea4f47',
            500: '#D32F2F',
            600: '#a92727',
            700: '#7f1f1f',
            800: '#541616',
            900: '#2a0b0b',
          },
          green: {
            50: '#e8f5e9',
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#388E3C',
            600: '#2e7d32',
            700: '#27632a',
            800: '#1b4d20',
            900: '#0f3314',
          },
          blue: {
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#1976D2',
            600: '#1565c0',
            700: '#0d47a1',
            800: '#0b3c91',
            900: '#082e6f',
          },
          purple: {
            50: '#f3e5f5',
            100: '#e1bee7',
            200: '#ce93d8',
            300: '#ba68c8',
            400: '#ab47bc',
            500: '#8E24AA',
            600: '#7b1fa2',
            700: '#6a1b9a',
            800: '#4a148c',
            900: '#2e0856',
          },
          orange: {
            50: '#fff9e5',
            100: '#fff2cc',
            200: '#ffe699',
            300: '#ffdb66',
            400: '#ffd133',
            500: '#FBC02D',
            600: '#f9a825',
            700: '#f57f17',
            800: '#e65100',
            900: '#bf360c',
          },
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'], //falback Umum
        heading: ['Poppins', 'ui-sans-serif', 'sans-serif'], // Untuk Judul
        body: ['Open Sans', 'ui-sans-serif', 'sans-serif'], // Untuk Teks Isi
      },
    },
  },
  plugins: [],
};
