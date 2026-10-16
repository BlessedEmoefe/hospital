import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IconClose } from './Icons';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(8, 32, 52, 0.46);
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 24px;
`;

const Dialog = styled.div`
  width: min(520px, 100%);
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 24px 60px rgba(0, 30, 60, 0.28);
  padding: 26px 26px 22px;
  color: ${({ theme }) => theme.color.ink};

  h2 {
    font-family: ${({ theme }) => theme.font.display};
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.blue};
    margin-bottom: 10px;
    letter-spacing: 0.01em;
  }

  p { margin: 0 0 12px; line-height: 1.55; font-size: 16px; }
`;

const Close = styled.button`
  float: right;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.color.blue};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;

  &:hover { background: #eef7fc; }
`;

export function Modal({ title, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <Backdrop onClick={onClose}>
      <Dialog
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <Close type="button" onClick={onClose} aria-label="Close">
          <IconClose />
        </Close>
        <h2>{title}</h2>
        {children}
      </Dialog>
    </Backdrop>
  );
}
