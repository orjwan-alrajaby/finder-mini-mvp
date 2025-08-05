import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --background: #111827;
  --primary: #111827;
  --accent: #D85151;
  --secondary: #EEF1F6;
  --tertiary: #333D4C;
  --text: #FFFFFF;
  --textMuted: #CAD0D9;
  --surface: #1D2735;
  --inputColor: #9CA3AF;

  --accent-secondary: #3D7A81;
  --accent-tertiary: #FC9231;

  --extra-small-font: 0.75rem; /* 0.75 rem = 12px */
  --small-font: 0.875rem; /* 0.875 rem = 14px */
  --medium-font: 1rem; /* 1 rem = 16px */
  --large-font: 1.25rem; /* 1.25 rem = 20px */
  --extra-large-font: 1.5rem; /* 1.5 rem = 24px */
  --xx-large-font: 1.75rem; /* 1.75 rem = 28px */
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  max-width: 100%;
}

body {
  color: var(--textMuted);
  background: var(--background);
  font-family: var(--font-inter-regular);
  font-weight: 400;
  font-style: normal;
  font-size: var(--small-font);
  line-height: 1.5; /*1.5 * 14px = 21px */
  width: 100%;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

fieldset {
  all: unset;
  display: block;
  border: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  all: unset;
  display: block;
  padding: 0;
  margin: 0;
  border: 0;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}
`;

export default GlobalStyle;
