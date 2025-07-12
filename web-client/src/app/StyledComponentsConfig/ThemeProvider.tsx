'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';

const theme = {
  palette: {
    background: 'var(--background)',
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    tertiary: 'var(--tertiary)',
    text: 'var(--text)',
    textMuted: 'var(--textMuted)',
    accent: 'var(--accent)',
    surface: 'var(--surface)',
  },
  fonts: {
    inter: {
      regular: 'var(--font-inter-regular)',
      medium: 'var(--font-inter-medium)',
      semibold: 'var(--font-inter-semibold)',
    },
    sizes: {
      extraSmall: 'var(--extra-small-font)',
      small: 'var(--small-font)',
      medium: 'var(--medium-font)',
      large: 'var(--large-font)',
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1600px',
    '4xl': '1920px',
  }
};

export default function ClientLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: string;
      primary: string;
      secondary: string;
      tertiary: string;
      text: string;
      textMuted: string;
      accent: string;
      surface: string;
    };
    fonts: {
      inter: {
        regular: string;
        medium: string;
        semibold: string;
      };
      sizes: {
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
      };
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    }
  }
}