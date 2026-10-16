import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.body};
    color: ${({ theme }) => theme.color.ink};
    background: #fff;
    line-height: 1.5;
  }

  button, input { font-family: inherit; }
  button { cursor: pointer; }
  img { max-width: 100%; display: block; }
  h1, h2, h3, p { margin: 0; }

  a { color: inherit; }

  :focus-visible {
    outline: 2px solid #7ad0ff;
    outline-offset: 2px;
  }

  ::selection { background: #b9e4f8; }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }
`;
