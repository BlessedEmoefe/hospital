import { css } from 'styled-components';

const hexSvg = (stroke) =>
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='150' height='130' viewBox='0 0 150 130'><path d='M75 6 L138 40 V96 L75 130 L12 96 V40 Z' fill='none' stroke='${stroke}' stroke-width='1.4'/></svg>`,
  );

export const theme = {
  font: {
    display: '"Montserrat", "Avenir Next", "Segoe UI", sans-serif',
    body: '"Source Sans 3", "Avenir Next", "Segoe UI", sans-serif',
  },
  color: {
    blue: '#0074c0',
    blueDark: '#0064ad',
    emergency: '#4eb4e8',
    news: '#007fc8',
    quote: '#008fd0',
    card: '#007cc4',
    link: '#1593d4',
    pill: '#178fcb',
    pillBorder: '#8ecfed',
    heading: '#8ea6b6',
    ink: '#5c6e7c',
    muted: '#7d8e9c',
    line: '#d7e5ee',
    white: '#ffffff',
    soft: '#f5fafc',
  },
  layout: {
    max: '1140px',
  },
  pattern: `url("data:image/svg+xml,${hexSvg('rgba(255,255,255,0.22)')}")`,
  patternSoft: `url("data:image/svg+xml,${hexSvg('rgba(120,170,200,0.35)')}")`,
};

export const container = css`
  width: min(${({ theme }) => theme.layout.max}, calc(100% - 48px));
  margin-inline: auto;
`;
