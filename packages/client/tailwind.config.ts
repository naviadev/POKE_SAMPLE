import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    {
      pattern: /^bg-typeColors-\d+$/,
    },
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        typeColors: {
          1: '#D1D5DB', // gray-300
          2: '#F87171', // red-400
          3: '#60A5FA', // blue-400
          4: '#FBBF24', // yellow-400
          5: '#34D399', // green-400
          6: '#22D3EE', // cyan-300
          7: '#FB923C', // orange-600
          8: '#8B5CF6', // purple-700
          9: '#8B4513', // brown-400 (or a custom brown color)
          10: '#38BDF8', // sky-400
          11: '#F472B6', // pink-400
          12: '#047857', // green-600
          13: '#4B5563', // gray-600
          14: '#6366F1', // indigo-400
          15: '#1E40AF', // blue-700
          16: '#1F2937', // gray-800
          17: '#9CA3AF', // gray-400
          18: '#F9A8D4', // pink-300
        },
        statsColor: {
          H: '#ff6384',
          A: '#36a2eb',
          B: '#ffce56',
          C: '#9966ff',
          D: '#4bc0c0',
          S: '#f5692d',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config