// Design System - Consistent colors and styling for M3 Recruit

export const colors = {
  // Primary brand colors (purple theme)
  primary: {
    50: '#f8f6ff',   // Very light purple
    100: '#f0ecff',  // Light purple
    200: '#e1d7ff',  // Lighter purple
    300: '#d0beff',  // Light purple
    400: '#b899ff',  // Medium light purple
    500: '#9d70ff',  // Medium purple
    600: '#8b5cf6',  // Dark purple
    700: '#7c3aed',  // Darker purple
    800: '#6d28d9',  // Very dark purple
    900: '#5b21b6',  // Darkest purple
    950: '#4c1d95',  // Almost black purple
  },

  // Secondary colors (blue theme)
  secondary: {
    50: '#f0f9ff',   // Light blue
    100: '#e0f2fe',  // Light blue
    200: '#bae6fd',  // Lighter blue
    300: '#7dd3fc',  // Light blue
    400: '#38bdf8',  // Medium light blue
    500: '#0ea5e9',  // Medium blue
    600: '#0284c7',  // Dark blue
    700: '#0369a1',  // Darker blue
    800: '#075985',  // Very dark blue
    900: '#0c4a6e',  // Darkest blue
  },

  // Accent colors for highlights
  accent: {
    indigo: '#6366f1',   // Indigo
    cyan: '#06b6d4',     // Cyan
    emerald: '#10b981',  // Emerald
    amber: '#f59e0b',    // Amber
  },

  // Neutral colors
  neutral: {
    50: '#fafafa',   // Off-white
    100: '#f4f4f5',  // Very light gray
    200: '#e4e4e7',  // Light gray
    300: '#d4d4d8',  // Lighter gray
    400: '#a1a1aa',  // Light gray
    500: '#71717a',  // Medium gray
    600: '#52525b',  // Dark gray
    700: '#3f3f46',  // Darker gray
    800: '#27272a',  // Very dark gray
    900: '#18181b',  // Darkest gray
  }
} as const

// Semantic color mappings for consistent usage
export const semanticColors = {
  // Brand colors
  brand: {
    primary: colors.primary[600],
    primaryHover: colors.primary[700],
    primaryLight: colors.primary[100],
    secondary: colors.secondary[600],
    secondaryHover: colors.secondary[700],
  },

  // Feature card colors (for consistent theming)
  features: {
    workflow: colors.accent.indigo,
    candidate: colors.primary[600],
    security: colors.secondary[700],
    analytics: colors.accent.cyan,
    integration: colors.primary[500],
    ai: colors.accent.emerald,
  },

  // Status colors
  status: {
    success: colors.accent.emerald,
    warning: colors.accent.amber,
    error: '#ef4444', // Red
    info: colors.accent.cyan,
  },

  // Background colors
  background: {
    primary: '#ffffff',        // Pure white
    secondary: colors.neutral[50],  // Off-white
    tertiary: colors.neutral[100],  // Light gray
    accent: '#fefbff', // Very light purple tint
  }
} as const

// Typography scale
export const typography = {
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  }
} as const

// Spacing scale
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const

// Border radius scale
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const

// Component variants for consistent styling (using Tailwind color classes)
export const componentVariants = {
  button: {
    primary: `bg-purple-800 hover:bg-purple-900 text-white`,
    secondary: `bg-blue-600 hover:bg-blue-700 text-white`,
    outline: `border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white`,
    ghost: `text-purple-800 hover:bg-purple-50`,
  },

  card: {
    default: `bg-white border border-gray-200`,
    elevated: `bg-white border border-gray-200 shadow-lg`,
    featured: `bg-gradient-to-br from-purple-50 to-white border border-purple-200`,
  },

  badge: {
    default: `bg-purple-100 text-purple-800 border border-purple-200`,
    success: `bg-emerald-500 text-white`,
    warning: `bg-amber-500 text-white`,
    info: `bg-cyan-500 text-white`,
  }
} as const

// Animation presets
export const animations = {
  fadeIn: 'animate-in fade-in duration-500',
  slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
  scaleIn: 'animate-in zoom-in-95 duration-300',
  bounceIn: 'animate-in bounce-in duration-700',
} as const
