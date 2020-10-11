type ColorType =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'black'
  | 'gray'
  | 'border';

export const color: { [key in ColorType]: string } = {
  primary: '#2C2CFF',
  secondary: '#43a047',
  white: '#ffffff',
  black: '#000000',
  gray: '#888888',
  border: '#c2c2c2',
};
