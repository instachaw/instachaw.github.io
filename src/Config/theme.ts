import { css } from "reakit";
import defaultTheme from "reakit-theme-default";

const grayscale = [
  "#221a1a",
  "#5b4a4b",
  "#918383",
  "#ab9da0",
  "#b8b4ad",
  "#e0dedf",  
  "#faf7f8",
]

const primary = [
  "#801c45",
  "#9c223d",
  "#cf2d4e",
  "#ee353b",
  "#ff6666",
  "#ffbfc0",
  "#fff2f3",
]

const spacing = [
  '8px',
  '16px',
  '24px',
  '48px',
  '64px',
]

const radius = [
  '4px',
  '8px',
  '16px',
]

const Heading = css`
  font-weight: bold;

  &:first-child {
    margin-top: 0;
  }
  h1& {
    font-size: 48px;
    line-height: 72px;
  }
  h2& {
    font-size: 32px;
    line-height: 48px;
  }
  h3& {
    font-size: 24px;
    line-height: 36px;
  }
  h4& {
    font-size: 18px;
    line-height: 24px;
  }
  h5& {
    font-size: 16px;
    line-height: 24px;
  }
  h6& {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Input = css`
  display: block;
  width: 100%;
  padding: 0 ${spacing[1]};
  height: 45px;
  border-radius: ${radius[0]};
  &[type="checkbox"],
  &[type="radio"] {
    display: inline-block;
    width: auto;
    height: auto;
    padding: 0;
  }
  &::placeholder {
    color: currentcolor;
    opacity: 0.5;
  }
  textarea & {
    padding: 0.5em;
    height: auto;
  }
`;

export const theme = {
  ...defaultTheme,

  palette: {
    ...defaultTheme.palette,
    grayscale,
    primary,
  },
  spacing,

  Heading,
  Input
}