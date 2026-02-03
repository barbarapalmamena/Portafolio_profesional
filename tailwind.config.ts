import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366f1",
                "primary-dark": "#4f46e5",
                secondary: "#ec4899",
                accent: "#14b8a6",
                "bg-dark": "#0f172a",
                "bg-darker": "#020617",
                "text-light": "#f1f5f9",
                "text-gray": "#94a3b8",
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'fade-in': 'fadeIn 1s ease-out',
                'bounce-slow': 'bounce 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
        },
    },
    plugins: [],
};

export default config;
