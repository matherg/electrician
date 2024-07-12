/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: '#273e6d',
                grey: '#cbcbcb',
                green: '#9dc357',
                fadedblue: '#74849b',
                fadedbluegrey: '#8794a5',
                fadedgrey: '#a8b0b9',
                fadedgreen: '#b8c89a',
            },
        },
    },
    container: {
        center: true,
        padding: '2rem',
    },
    plugins: [],
}
