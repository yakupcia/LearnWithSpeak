const light = {
  global: {
    white: '#fff',
    green: 'green',
  },
  text: {
    brand: '#ab5413',
    primary: '#161e2b',
    secondary: '#6a717d',
    error: '#db3232',
  },
  title: {
    primary: '#15191f',
  },
  background: {
    primary: '#ebeff5',
    secondary: '#fff',
    brand: '#ab5413',
  },
  border: {
    primary: '#191a19',
    secondary: '#ddd',
  },
  foreground: {
    tertiarry: '#f5ef42',
    brand: '#f5ef42',
  },
};

const dark = {
  global: {
    white: '#fff',
    green: 'green',
  },
  text: {
    brand: '#ab5413',
    primary: '#a9b500',
    secondary: '#d5d5d5',
    error: '#db3232',
  },
  title: {
    primary: '#a9b500',
  },
  background: {
    primary: '#303030',
    secondary: '#212121',
    brand: '#a9b500',
  },
  border: {
    primary: '#191a19',
    secondary: '#999',
  },
  foreground: {
    tertiarry: '#a9b500',
    brand: '#f5ef42',
  },
};

const THEME: 'dark' | 'light' = 'dark';

const colors = THEME === 'dark' ? dark : light;

export {colors};
