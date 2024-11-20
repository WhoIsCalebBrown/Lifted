import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'raisin-black': '#232323',
                'granite-gray': '#656565',
                'spanish-gray': '#989898',
                'royal-purple': '#7951a8',
                'purple-heart': '#69369e',
                'teal': '#4db5b0',
            },
        },
    },
    plugins: [],
};
