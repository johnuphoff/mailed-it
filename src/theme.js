import { css } from 'styled-components';

export const breakpoints = [36, 48, 62, 75].map(n => `${n}em`);

export const sizes = {
  lg: breakpoints[3],
  md: breakpoints[2],
  sm: breakpoints[1],
  xs: breakpoints[0]
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals, ...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(literals, ...args)};
    }
  `;

  return acc;
}, {});

export const space = [0, 4, 8, 12, 16, 20, 24, 32, 64, 128];

export const iconSizes = [16, 20, 24, 28, 32];

export const containerWidth = 640;
export const containerPadding = space[5];

export const layout = {
  containerWidth,
  containerPadding
}

// font
export const font = 'objektiv-mk2, helvetica, Arial, sans-serif';
export const fontSecondary = 'sans-serif';
export const fontFamilies = [font, fontSecondary];
export const fontSizes = [12, 14, 16, 20, 22, 24, 32, 40, 52];
export const fontWeights = { regular: 400, semiBold: 500, bold: 700 };
export const lineHeights = ['16px', '20px', '24px', '28px', '32px', '36px', '40px', '52px'];

// colors

export const blue = '#2D7FF9';
export const green = '#23C2A7';
export const orange = '#FCB400';
export const red = '#F82B5F';
export const white = '#FFFFFF';
export const black = '#333333';
export const grayBlue = '#95A0A6';
export const lightBlue = '#F0F7FF';

export const gray = ['#F4F4F4', '#EFEFEF', '#E0E0E0', '#C4C4C4', '#969696', '#646464'];

// text
export const textColors = {
  black: 'rgba(51,51,51,1.0)',
  gray: 'rgba(166,170,181,1.0)'
};

export const colors = {
  blue,
  green,
  orange,
  red,
  white,
  black,
  lightBlue,
  gray,
  text: textColors,
  state: {
    primary: blue,
    primaryLight: lightBlue,
    success: green,
    warning: orange,
    danger: red
  }
};

export const shadows = [
  '0 1px 4px 0 rgba(21,37,66,0.18)',
  '0 4px 8px 0 rgba(21,37,66,0.15)',
  '0 6px 16px 0 rgba(21,37,66,0.15)',
  '0 16px 32px 0 rgba(21,37,66,0.15)'
];

export const radii = [0, 1, 2, 3, 4, 5];

const theme = {
  breakpoints,
  colors,
  font,
  fontFamilies,
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  radii,
  shadows,
  space
};

export default theme;
