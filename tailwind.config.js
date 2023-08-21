/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "grey-design": "#F5F0EC",
                "beige-design": "#DCC1AB",
                "green-design": "#1B5B31",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-10deg)" },
                    "50%": { transform: "rotate(10deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
