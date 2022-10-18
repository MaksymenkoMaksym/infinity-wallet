export const theme = {
  colors: {
    black: '#000',
    white: '#fff',

    green: '#24CCA7',
    pink: '#FF6596',
    blue: '#4A56E2',
    gray: '#BDBDBD',
    grayIcon: '#E0E0E0',

    background: {
      white: '#fff',
      blurSelect: 'rgba(255, 255, 255, 0.7)',
      blurTablet: 'rgba(255, 255, 255, 0.4)',
      currency: '#4A56E2',
    },
    diagram: {
      main: '#FED057',
      products: '#FFD8D0',
      car: '#FD9498',
      selfConcern: '#C5BAFF',
      childCare: '#6E78E8',
      home: '#4A56E2',
      education: '#81E1FF',
      leisure: '#24CCA7',
      other: '#00AD84',
    },
  },
  space: [0, 10, 20, 30, 40, 50, 110],
  fonts: {
    main: 'Circe, sans-serif',
    secondary: 'Poppins, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '18px',
    l: '24px',
    xl: '30px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    main: 1.5,
  },
  borders: {
    none: 'none',
    normal: '1px solid #4A56E2',
  },
  radii: {
    none: '0',
    sm: '10px',
    md: '20px',
    lg: '30px',
    round: '50%',
  },
  breakpoints: [
    '40em',
    '@media (min-width: 56em) and (orientation: landscape)',
    '64em',
  ],
};
