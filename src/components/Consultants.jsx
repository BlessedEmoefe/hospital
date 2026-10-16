import { useState } from 'react';
import styled from 'styled-components';
import { consultants } from '../data';
import { container } from '../theme';
import { IconArrow } from './Icons';

const Section = styled.section`
  position: relative;
  ${container};
  padding: 48px 0 36px;
  scroll-margin-top: 150px;
  overflow: hidden;
`;

const Hex = styled.svg`
  position: absolute;
  right: -20px;
  top: 10px;
  width: 220px;
  height: 200px;
  color: #d7e7f1;
  pointer-events: none;
`;

const Heading = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.heading};
  margin-bottom: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 980px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.color.card};
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: ${({ $on }) => ($on ? '0 0 0 3px #9ad8f5' : 'none')};

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    object-position: center 18%;
  }
`;

const Body = styled.div`
  padding: 16px 12px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 1;
`;

const Name = styled.h3`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.25;
`;

const Role = styled.p`
  font-size: 14.5px;
  line-height: 1.3;
  min-height: 38px;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
`;

const Tag = styled.span`
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  padding: 6px 8px;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.3;
`;

const Bio = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.92);
`;

const Select = styled.button`
  background: none;
  border: 0;
  padding: 0;
  color: inherit;
  text-align: inherit;
  font: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
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
`;

export function Consultants() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <Section id="consultants">
      <Hex viewBox="0 0 200 180" aria-hidden="true">
        <polygon points="100,8 176,48 176,132 100,172 24,132 24,48" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <polygon points="100,36 150,66 150,120 100,150 50,120 50,66" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </Hex>
      <Heading>Featured consultants</Heading>
      <Grid>
        {consultants.map((person) => (
          <Card key={person.name} $on={selected === person.name}>
            <Select
              type="button"
              aria-pressed={selected === person.name}
              onClick={() => setSelected((current) => (current === person.name ? null : person.name))}
            >
              <img src={person.image} alt={`${person.name}, ${person.role}`} />
              <Body>
                <Name>{person.name}</Name>
                <Role>{person.role}</Role>
                {open && <Bio>{person.bio}</Bio>}
                <Tags>
                  {person.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </Tags>
              </Body>
            </Select>
          </Card>
        ))}
      </Grid>
      <Row>
        <More type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Show fewer' : 'View all consultants'}
          <IconArrow />
        </More>
      </Row>
    </Section>
  );
}
