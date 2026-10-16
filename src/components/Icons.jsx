export function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevron({ direction = 'right', ...props }) {
  const turn = { right: 0, down: 90, left: 180, up: -90 }[direction];
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{ transform: `rotate(${turn}deg)` }} {...props}>
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M6 16.5 4 20l4.2-1.6A8.5 8.5 0 1 0 6 16.5z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPerson(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M5.5 19.5v-1.2a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconHeart(props) {
  return (
    <svg viewBox="0 0 64 64" width="88" height="88" fill="none" stroke="white" strokeWidth="2.4" aria-hidden="true" {...props}>
      <path d="M32 52s-16-9.6-22-18.2C6.2 28.2 8 20 15.2 17.2 21 15 26 18 32 24c6-6 11-9 16.8-6.8C56 20 57.8 28.2 54 33.8 48 42.4 32 52 32 52z" />
    </svg>
  );
}

export function IconRibbon(props) {
  return (
    <svg viewBox="0 0 64 64" width="88" height="88" fill="none" stroke="white" strokeWidth="2.4" aria-hidden="true" {...props}>
      <path d="M32 38c8 0 14-7 14-15S40 8 32 8 18 15 18 23s6 15 14 15z" />
      <path d="M24 36l-6 20 14-8 14 8-6-20" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCare(props) {
  return (
    <svg viewBox="0 0 64 64" width="88" height="88" fill="none" stroke="white" strokeWidth="2.4" aria-hidden="true" {...props}>
      <circle cx="32" cy="24" r="10" />
      <path d="M14 52c2-10 8-16 18-16s16 6 18 16" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlus(props) {
  return (
    <svg viewBox="0 0 64 64" width="88" height="88" fill="none" stroke="white" strokeWidth="2.4" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="20" />
      <path d="M32 20v24M20 32h24" strokeLinecap="round" />
    </svg>
  );
}

export function SocialIcon({ type }) {
  const paths = {
    facebook: 'M14 8h2V5h-2c-2.8 0-4.5 1.7-4.5 4.4V12H7v3h2.5v7h3v-7H15l.5-3h-3V9.6c0-.8.4-1.6 1.5-1.6z',
    x: 'M6 6l12 12M18 6L6 18',
    instagram: 'M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm8.2 4.2h.01M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    linkedin: 'M6 9h3v9H6zM7.5 5a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM11 9h2.8v1.2h.1c.4-.7 1.4-1.4 2.8-1.4 3 0 3.5 1.8 3.5 4.2V18H17v-4.2c0-1 0-2.3-1.5-2.3s-1.7 1.1-1.7 2.2V18H11V9z',
  };
  const isX = type === 'x';
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill={isX ? 'none' : 'currentColor'} stroke={isX ? 'currentColor' : 'none'} strokeWidth={isX ? 2 : 0} aria-hidden="true">
      {type === 'instagram' ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16.4" cy="7.6" r="0.8" fill="currentColor" />
        </>
      ) : (
        <path d={paths[type]} strokeLinecap="round" />
      )}
    </svg>
  );
}
