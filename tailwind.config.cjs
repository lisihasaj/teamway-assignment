/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        screens: {
            xs: "380px",
            sm: "480px",
            "2sm": "540px",
            md: "768px",
            "2md": "1024px",
            lg: "1200px",
            "2lg": "1440px",
            xl: "1920px",
            "2xl": "2400px",
        },
        extend: {
            colors: {},
        },
    },
    plugins: [],
};
