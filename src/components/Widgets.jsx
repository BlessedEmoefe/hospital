import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconChat, IconClose, IconPerson } from './Icons';

const Dock = styled.div`
  position: fixed;
  z-index: 35;
  ${({ $side }) => ($side === 'left' ? 'left: 18px;' : 'right: 18px;')}
  bottom: 18px;
`;

const Round = styled.button`
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.blue};
  color: white;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 20px rgba(0, 60, 110, 0.28);
`;

const Square = styled(Round)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

const Panel = styled.div`
  position: absolute;
  bottom: 68px;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  width: min(320px, calc(100vw - 36px));
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 30, 60, 0.24);
  color: #3d5566;
`;

const Head = styled.div`
  background: ${({ theme }) => theme.color.blue};
  color: white;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;

  button {
    background: none;
    border: 0;
    color: white;
    display: grid;
    place-items: center;
  }
`;

const Log = styled.div`
  max-height: 240px;
  overflow: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Bubble = styled.p`
  margin: 0;
  max-width: 90%;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.4;
  align-self: ${({ $mine }) => ($mine ? 'flex-end' : 'flex-start')};
  background: ${({ $mine, theme }) => ($mine ? theme.color.blue : '#eef5f9')};
  color: ${({ $mine }) => ($mine ? 'white' : '#31495a')};
`;

const Form = styled.form`
  display: flex;
  gap: 8px;
  padding: 10px;
  border-top: 1px solid #e4eef4;

  input {
    flex: 1;
    height: 38px;
    border: 1px solid #d5e3ec;
    border-radius: 6px;
    padding: 0 10px;
  }

  button {
    border: 0;
    background: ${({ theme }) => theme.color.blue};
    color: white;
    border-radius: 6px;
    padding: 0 12px;
    font-weight: 700;
  }
`;

const Sizes = styled.div`
  display: flex;
  gap: 8px;
  padding: 14px;

  button {
    flex: 1;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.pillBorder};
    background: white;
    color: ${({ theme }) => theme.color.blue};
    border-radius: 6px;
    font-weight: 700;
  }

  button[aria-pressed='true'] {
    background: ${({ theme }) => theme.color.blue};
    color: white;
  }
`;

export function Widgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [scale, setScale] = useState(1);
  const [messages, setMessages] = useState([
    { from: 'team', text: 'Hello. How can we direct you today?' },
  ]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * scale}px`;
    return () => {
      document.documentElement.style.fontSize = '';
    };
  }, [scale]);

  function send(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { from: 'you', text },
      {
        from: 'team',
        text: 'Thanks. For urgent medical help call 112 or 999. For everything else, use the department and service listings on this page.',
      },
    ]);
    setDraft('');
  }

  return (
    <>
      <Dock $side="left">
        {chatOpen && (
          <Panel $side="left" role="dialog" aria-label="Chat">
            <Head>
              Beacon Hospital
              <button type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}>
                <IconClose />
              </button>
            </Head>
            <Log>
              {messages.map((message, index) => (
                <Bubble key={`${message.from}-${index}`} $mine={message.from === 'you'}>
                  {message.text}
                </Bubble>
              ))}
            </Log>
            <Form onSubmit={send}>
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type a message"
                aria-label="Message"
              />
              <button type="submit">Send</button>
            </Form>
          </Panel>
        )}
        <Round type="button" aria-expanded={chatOpen} aria-label="Open chat" onClick={() => { setChatOpen((open) => !open); setAccessOpen(false); }}>
          <IconChat />
        </Round>
      </Dock>
      <Dock $side="right">
        {accessOpen && (
          <Panel $side="right" role="dialog" aria-label="Text size">
            <Head>
              Text size
              <button type="button" aria-label="Close text size" onClick={() => setAccessOpen(false)}>
                <IconClose />
              </button>
            </Head>
            <Sizes>
              <button type="button" aria-pressed={scale === 0.9} onClick={() => setScale(0.9)}>A-</button>
              <button type="button" aria-pressed={scale === 1} onClick={() => setScale(1)}>A</button>
              <button type="button" aria-pressed={scale === 1.15} onClick={() => setScale(1.15)}>A+</button>
            </Sizes>
          </Panel>
        )}
        <Square type="button" aria-expanded={accessOpen} aria-label="Text size options" onClick={() => { setAccessOpen((open) => !open); setChatOpen(false); }}>
          <IconPerson />
        </Square>
      </Dock>
    </>
  );
}
