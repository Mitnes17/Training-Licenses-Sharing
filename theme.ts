import { createTheme } from '@mui/material'
import type React from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    smallText: React.CSSProperties
    smallTextMedium: React.CSSProperties
    caption: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    smallText?: React.CSSProperties
    smallTextMedium?: React.CSSProperties
    caption?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    smallText: true
    smallTextMedium: true
    caption: true
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    smallText: {
      fontSize: '14px',
      lineHeight: '24px'
    },
    smallTextMedium: {
      fontWeight: '500',
      lineHeight: '24px',
      fontSize: '14px'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '18px'
    },
    h1: {
      fontWeight: '600',
      fontSize: '64px',
      lineHeight: '64px'
    },
    h2: {
      fontWeight: '600',
      fontSize: '48px',
      lineHeight: '56px'
    },
    h3: {
      fontWeight: '600',
      fontSize: '40px',
      lineHeight: '48px'
    },
    h4: {
      fontWeight: '600',
      fontSize: '32px',
      lineHeight: '40px'
    },
    h5: {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '32px'
    },
    h6: {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '24px'
    }
  }
})
