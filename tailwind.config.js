/** @type {import {  } from ("tailwindcss").Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extedn: {
            animation: {
                "gradient-x" : "gradient-x 15s ease infinite",
            },
            keyframes: {
                "gradient-x" : {
                    "0%, 100%" : {
                        "background-size" : "200% 200%",
                        "background-position" : "left center",
                    },
                    "50%" : {
                        "background-size" : "200% 200%",
                        "background-position" : "right center",
                    },
                },
            },
        },
    }, 
    plugins: [],
}