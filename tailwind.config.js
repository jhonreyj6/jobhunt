/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
