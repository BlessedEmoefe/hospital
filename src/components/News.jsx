import { useState } from 'react';
import styled from 'styled-components';
import { stories } from '../data';
import { container } from '../theme';
import { IconArrow } from './Icons';

const Band = styled.section`
  background-color: ${({ theme }) => theme.color.news};
  background-image: ${({ theme }) => theme.pattern};
  background-size: 160px 140px;
  color: white;
  padding: 56px 0 48px;
  scroll-margin-top: 150px;
`;

const Inner = styled.div`
  ${container};
`;

const Heading = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;

const Card = styled.article`
  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }

  time {
    display: block;
    margin-top: 14px;
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.82);
  }

  h3 {
    margin: 6px 0 8px;
    font-size: 18px;
    line-height: 1.35;
    font-weight: 700;
  }
`;

const Excerpt = styled.p`
  font-size: 14.5px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.92);
  display: ${({ $open }) => ($open ? 'block' : '-webkit-box')};
  -webkit-line-clamp: ${({ $open }) => ($open ? 'unset' : 3)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Open = styled.button`
  margin-top: 12px;
  background: none;
  border: 0;
  color: white;
  padding: 0;
  display: inline-flex;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
`;

const More = styled.button`
  background: none;
  border: 0;
  color: white;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 13px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export function News() {
  const [openId, setOpenId] = useState(null);
  const [all, setAll] = useState(false);

  return (
    <Band id="news">
      <Inner>
        <Heading>Latest news</Heading>
        <Grid>
          {stories.map((story) => {
            const open = all || openId === story.title;
            return (
              <Card key={story.title}>
                <img src={story.image} alt="" />
                <time dateTime={story.dateTime}>{story.date}</time>
                <h3>{story.title}</h3>
                <Excerpt $open={open}>{story.excerpt}</Excerpt>
                <Open
                  type="button"
                  aria-expanded={open}
                  aria-label={`${open ? 'Collapse' : 'Expand'} ${story.title}`}
                  onClick={() => setOpenId((current) => (current === story.title ? null : story.title))}
                >
                  <IconArrow />
                </Open>
              </Card>
            );
          })}
        </Grid>
        <Row>
          <More type="button" aria-expanded={all} onClick={() => setAll((value) => !value)}>
            {all ? 'Show less' : 'View all news'}
            <IconArrow />
          </More>
        </Row>
      </Inner>
    </Band>
  );
}
