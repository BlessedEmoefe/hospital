import styled from 'styled-components';

const Lockup = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ $tone }) => ($tone === 'blue' ? '#0074c0' : '#fff')};
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 600;
  font-size: ${({ $small }) => ($small ? '14px' : '22px')};
  letter-spacing: -0.02em;
  line-height: 1;
  white-space: nowrap;

  svg {
    width: ${({ $small }) => ($small ? '26px' : '38px')};
    height: ${({ $small }) => ($small ? '26px' : '38px')};
    display: block;
    flex: none;
  }
`;

export function Logo({ tone = 'white', small = false, wordmark = true }) {
  return (
    <Lockup $tone={tone} $small={small}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path fill="currentColor" d="M21.2 13h5.6v8.2H35v5.6h-8.2V35h-5.6v-8.2H13v-5.6h8.2V13z" />
      </svg>
      {wordmark && <span>Beacon Hospital</span>}
    </Lockup>
  );
}
