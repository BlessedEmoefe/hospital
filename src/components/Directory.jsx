import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { slug } from '../data';
import { useSite } from '../site';
import { container } from '../theme';
import { IconArrow, IconSearch } from './Icons';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 116, 192, 0.45); }
  100% { box-shadow: 0 0 0 14px rgba(0, 116, 192, 0); }
`;

const Section = styled.section`
  ${container};
  padding: ${({ $first }) => ($first ? '72px 0 18px' : '28px 0 18px')};
  scroll-margin-top: 150px;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.heading};
  margin-bottom: 12px;
`;

const Lede = styled.p`
  max-width: 720px;
  margin: 0 auto 26px;
  text-align: center;
  color: #667887;
  font-size: 16.5px;
  line-height: 1.5;
`;

const Search = styled.form`
  width: min(640px, 100%);
  margin: 0 auto 22px;
  position: relative;

  svg {
    position: absolute;
    left: 14px;
    top: 13px;
    color: #8aa0b0;
  }

  input {
    width: 100%;
    height: 46px;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 4px;
    padding: 0 14px 0 42px;
    font-size: 15px;
    color: #31495a;
  }

  input:focus { border-color: #7ec4e8; outline: none; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 16px;

  @media (max-width: 800px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const Pill = styled.button`
  width: 100%;
  text-align: left;
  background: ${({ $on, theme }) => ($on ? theme.color.blue : '#fff')};
  color: ${({ $on, theme }) => ($on ? '#fff' : theme.color.pill)};
  border: 1.5px solid ${({ $on, theme }) => ($on ? theme.color.blue : theme.color.pillBorder)};
  border-radius: 999px;
  min-height: 48px;
  padding: 10px 16px;
  font-size: 15.5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  animation: ${({ $flash }) => ($flash ? pulse : 'none')} 1.4s ease;

  &:hover {
    background: ${({ theme }) => theme.color.blue};
    color: white;
    border-color: ${({ theme }) => theme.color.blue};
  }
`;

const Detail = styled.div`
  margin-top: 16px;
  border: 1px solid #d5eaf5;
  background: #f7fcff;
  padding: 16px 18px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;

  strong { color: ${({ theme }) => theme.color.blue}; font-size: 18px; }
  p { margin-top: 4px; color: #5d7282; }

  button {
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.color.blue};
    font-size: 22px;
    line-height: 1;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const More = styled.button`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.color.link};
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 13px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
`;

const Empty = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.muted};
  padding: 12px 0 4px;
`;

export function Directory({ id, title, lede, items, more, prefix, action, searchable, placeholder, first }) {
  const { flash } = useSite();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!flash) return undefined;
    const hidden = more.some((label) => slug(label, prefix) === flash);
    if (hidden) setOpen(true);
    const timer = window.setTimeout(() => {
      const node = document.getElementById(`item-${flash}`);
      if (node && document.getElementById(id)?.contains(node)) {
        node.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, hidden ? 50 : 0);
    return () => window.clearTimeout(timer);
  }, [flash, more, prefix, id]);

  const pool = query.trim() || open ? [...items, ...more] : items;
  const visible = pool.filter((label) => label.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <Section id={id} $first={first}>
      <Heading>{title}</Heading>
      <Lede>{lede}</Lede>
      {searchable && (
        <Search onSubmit={(event) => event.preventDefault()} role="search">
          <IconSearch />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
          />
        </Search>
      )}
      {visible.length === 0 ? (
        <Empty>No matches for “{query.trim()}”.</Empty>
      ) : (
        <Grid>
          {visible.map((label) => {
            const itemId = slug(label, prefix);
            return (
              <Pill
                key={itemId}
                id={`item-${itemId}`}
                type="button"
                $on={selected === label}
                $flash={flash === itemId}
                onClick={() => setSelected((current) => (current === label ? null : label))}
              >
                {label}
                <IconArrow />
              </Pill>
            );
          })}
        </Grid>
      )}
      {selected && (
        <Detail>
          <div>
            <strong>{selected}</strong>
            <p>Consultants, the care pathway, and contact details for {selected}.</p>
          </div>
          <button type="button" onClick={() => setSelected(null)} aria-label="Close details">×</button>
        </Detail>
      )}
      <Row>
        <More type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Show fewer' : action}
          <IconArrow />
        </More>
      </Row>
    </Section>
  );
}
