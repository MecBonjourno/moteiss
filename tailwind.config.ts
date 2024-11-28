// import { Config } from 'tailwindcss';
// import tailwindcssAnimate from 'tailwindcss-animate';

// const config: Config = {
//   darkMode: ['class'],
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
// 	  extend: {
// 		fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         cursive: ['Dancing Script', 'cursive'], // Add this line
//       },
// 		colors: {
// 		  primary: {
//           light: '#ff6b6b', // Vibrant red for hover states
//           DEFAULT: '#ff4d4d', // Main red accent for buttons and highlights
//           dark: '#e63946', // Deeper red for subtle contrasts
//         },
//         dark: {
//           light: '#1e1e2e', // Background for cards or modal overlays
//           DEFAULT: '#0d0d0d', // Main dark background
//           darker: '#000000', // Pure black for deepest sections
//         },
//         secondary: {
//           light: '#ffa3a3', // Light, warm pinkish-red
//           DEFAULT: '#ff8282', // Secondary red/pink for variation
//         },
//         accent: {
//           glow: '#ff7d7d', // Glow effect for highlights (soft red-pink)
//           muted: '#b30000', // Muted red for subtle text/icons
//         },
//         neutral: {
//           light: '#f5f5f5', // Light text for dark backgrounds
//           DEFAULT: '#d1d1d1', // Neutral text for less emphasis
//           dark: '#a1a1a1', // Slightly darker for muted components
//         },
//         neonRed: '#ff4d4d', // Neon red color
//         darkBg: '#0d0d0d', // Dark background color
// 		  },
// 		boxShadow: {
//         'red-glow': '0 0 10px 2px rgba(255, 77, 77, 0.7)', // Soft glowing red shadow
//         neon: '0 0 5px #ff4d4d, 0 0 20px #ff4d4d, 0 0 30px #ff4d4d, 0 0 40px #ff4d4d', // Neon effect shadow
//       },
//       backgroundImage: {
//         'gradient-dark':
//           'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(14,14,14,1) 100%)',
//         'gradient-red':
//           'linear-gradient(180deg, rgba(255,77,77,1) 0%, rgba(230,57,70,1) 100%)',
//       },
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         chart: {
//           '1': 'hsl(var(--chart-1))',
//           '2': 'hsl(var(--chart-2))',
//           '3': 'hsl(var(--chart-3))',
//           '4': 'hsl(var(--chart-4))',
//           '5': 'hsl(var(--chart-5))',
//         },
      
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//     },
//   },
//   plugins: [tailwindcssAnimate],
// };

// export default config;
import { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cursive: ['var(--font-dancing-script)'], // Updated to use CSS variable
      },
      colors: {
        primary: {
          light: '#ff6b6b',
          DEFAULT: '#ff4d4d',
          dark: '#e63946',
        },
        dark: {
          light: '#1e1e2e',
          DEFAULT: '#0d0d0d',
          darker: '#000000',
        },
        secondary: {
          light: '#ffa3a3',
          DEFAULT: '#ff8282',
        },
        accent: {
          glow: '#ff7d7d',
          muted: '#b30000',
        },
        neutral: {
          light: '#f5f5f5',
          DEFAULT: '#d1d1d1',
          dark: '#a1a1a1',
        },
        neonRed: '#ff4d4d',
        darkBg: '#0d0d0d',
      },
      boxShadow: {
        'red-glow': '0 0 10px 2px rgba(255, 77, 77, 0.7)',
        neon: '0 0 5px #ff4d4d, 0 0 20px #ff4d4d, 0 0 30px #ff4d4d, 0 0 40px #ff4d4d',
      },
      backgroundImage: {
        'gradient-dark':
          'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(14,14,14,1) 100%)',
        'gradient-red':
          'linear-gradient(180deg, rgba(255,77,77,1) 0%, rgba(230,57,70,1) 100%)',
      },
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
