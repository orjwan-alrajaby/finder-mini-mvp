'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles';
import { BREAKPOINTS } from './utils';

const theme = {
  palette: {
    background: 'var(--background)',
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    tertiary: 'var(--tertiary)',
    text: 'var(--text)',
    textMuted: 'var(--textMuted)',
    accent: 'var(--accent)',
    accentSecondary: 'var(--accent-secondary)',
    accentTertiary: 'var(--accent-tertiary)',
    surface: 'var(--surface)',
    inputColor: 'var(--inputColor)',
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
      extraLarge: 'var(--extra-large-font)',
      xxLarge: 'var(--xx-large-font)',
    },
  },
  breakpoints: BREAKPOINTS, 
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
      accentSecondary: string;
      accentTertiary: string;
      surface: string;
      inputColor: string;
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
        extraLarge: string;
        xxLarge: string;
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