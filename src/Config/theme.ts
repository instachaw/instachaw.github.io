import { css } from "reakit";
import defaultTheme from "reakit-theme-default";

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

const grayscale = [
  "#221a1a",
  "#5b4a4b",
  "#918383",
  "#ab9da0",
  "#b8b4ad",
  "#e0dedf",  
  "#faf7f8",
]

export const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    grayscale
  },
  Heading
}