/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
