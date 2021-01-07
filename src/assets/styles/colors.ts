type ColorType =
  // base
  | 'primary'
  | 'secondary'
  | 'tertiary'
  // mono tone
  | 'black'
  | 'gray'
  | 'white'
  | 'blur'
  // unique
  | 'text'
  | 'border'
  | 'shadow'
  | 'link'
  | 'linkhover'
  | 'twitter'
  | 'facebook';

export const color: { [key in ColorType]: string } = {
  // base
  primary: '#ff2e63',
  secondary: '#3c84b0',
  tertiary: '#f4f4f4',
  // mono tone
  black: '#2a2a2a',
  gray: '#626262',
  white: '#ffffff',
  blur: 'rgba(0, 0, 0, 0.7)',
  // unique
  text: '#2a2a2a',
  border: '#cccccc',
  shadow: 'rgba(0, 0, 0, 0.2)',
  link: '#1e7dc0',
  linkhover: '#ff8800',
  twitter: '#55acee',
  facebook: '#3b5998',
};
