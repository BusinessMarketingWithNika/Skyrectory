/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}

<style>
.gradient-background {
  background-image: linear-gradient(to right, red, yellow, green);
  background-size: 200% 200%;
  background-position: left center;
  animation: gradient-x 15s ease infinite;
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}
</style>

<div class="gradient-background">
  This div has a gradient background with animation.
</div>

