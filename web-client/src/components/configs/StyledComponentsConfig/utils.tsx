export const BREAKPOINTS = {
  'xs': '480px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1440px',
  '3xl': '1600px',
  '4xl': '1920px',
};

type BreakpointKey = keyof typeof BREAKPOINTS;

function createMediaQuery(type: 'min' | 'max') {
  const obj = {} as Record<
    BreakpointKey,
    (strings: TemplateStringsArray, ...values: string[]) => string
  >;
  for (const key in BREAKPOINTS) {
    const breakpointKey = key as BreakpointKey;

    obj[breakpointKey] = (strings, ...values) => {
      if (!Array.isArray(strings)) {
        return `@media (${type}-width: ${BREAKPOINTS[breakpointKey]}) { ${strings} }`;
      }

      let css = '';
      for (let i = 0; i < strings.length; i++) {
        css += strings[i];
        if (values[i] !== undefined) css += values[i];
      }

      return `@media (${type}-width: ${BREAKPOINTS[breakpointKey]}) { ${css} }`;
    };
  }
  return obj;
}

export const media = {
  min: createMediaQuery('min'),
  max: createMediaQuery('max'),
};
