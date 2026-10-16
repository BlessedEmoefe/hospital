import { useRef, useState } from 'react';
import styled from 'styled-components';
import { slides } from '../data';
import { container } from '../theme';
import { IconCare, IconChevron, IconHeart, IconPlus, IconRibbon } from './Icons';
import { Logo } from './Logo';

const icons = {
  heart: IconHeart,
  ribbon: IconRibbon,
  care: IconCare,
  plus: IconPlus,
};

const Band = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.news};
  background-image: ${({ theme }) => theme.pattern};
  background-size: 150px 130px;
  color: white;
  padding: 48px 0 26px;
`;

const Frame = styled.div`
  ${container};
  position: relative;
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  transition: transform 0.45s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Slide = styled.article`
  flex: 0 0 100%;
  min-width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.8fr);
  gap: 34px;
  align-items: center;
  padding: 0 42px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 0 36px;
    gap: 18px;
  }
`;

const Card = styled.div`
  background: white;
  color: ${({ theme }) => theme.color.ink};
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  min-height: 300px;
  box-shadow: 0 14px 36px rgba(0, 40, 80, 0.18);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Visual = styled.div`
  position: relative;
  background: linear-gradient(180deg, #0b6eae, #1490d2);
  min-height: 240px;
  display: grid;
  place-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    padding: 46px 8px 0;
    position: absolute;
    inset: 0;
  }
`;

const Kicker = styled.p`
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
  right: 14px;
  color: white;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.3;
  text-shadow: 0 1px 8px rgba(0, 40, 80, 0.35);
`;

const Body = styled.div`
  padding: 20px 22px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.span`
  border: 1px solid #7dcef2;
  color: ${({ theme }) => theme.color.pill};
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Point = styled.p`
  font-size: 14.5px;
  line-height: 1.45;
  color: #4d6272;
`;

const Foot = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  padding-top: 8px;
`;

const Phone = styled.p`
  font-size: 14px;
  color: #567084;

  a {
    display: block;
    color: ${({ theme }) => theme.color.blue};
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
  }
`;

const Aside = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.font.display};
    font-weight: 500;
    font-size: clamp(24px, 2.4vw, 32px);
    line-height: 1.25;
    margin-bottom: 14px;
  }

  p { font-size: 16px; line-height: 1.5; color: rgba(255, 255, 255, 0.95); }
`;

const Arrow = styled.button`
  position: absolute;
  top: 46%;
  ${({ $side }) => ($side === 'left' ? 'left: -6px;' : 'right: -6px;')}
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: white;
  display: grid;
  place-items: center;
  z-index: 2;

  &:hover { background: rgba(255, 255, 255, 0.16); }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 22px;
`;

const Dot = styled.button`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1.5px solid white;
  background: ${({ $on }) => ($on ? 'white' : 'transparent')};
  padding: 0;
`;

const Live = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

export function Promo() {
  const [index, setIndex] = useState(2);
  const startX = useRef(0);
  const slide = slides[index];

  function step(direction) {
    setIndex((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <Band
      aria-roledescription="carousel"
      aria-label="Featured services"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      }}
    >
      <Frame>
        <Arrow type="button" $side="left" aria-label="Previous slide" onClick={() => step(-1)}>
          <IconChevron direction="left" />
        </Arrow>
        <Viewport
          onTouchStart={(event) => { startX.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            const delta = event.changedTouches[0].clientX - startX.current;
            if (delta > 40) step(-1);
            if (delta < -40) step(1);
          }}
        >
          <Track style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((item, itemIndex) => {
              const Graphic = icons[item.icon] || IconPlus;
              return (
                <Slide key={item.id} aria-hidden={itemIndex !== index} inert={itemIndex !== index ? true : undefined}>
                  <Card>
                    <Visual>
                      {item.image && <img src={item.image} alt="" />}
                      <Kicker>{item.kicker}</Kicker>
                      {!item.image && <Graphic />}
                    </Visual>
                    <Body>
                      <Badges>
                        {item.badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}
                      </Badges>
                      {item.points.map((point) => <Point key={point}>{point}</Point>)}
                      <Foot>
                        <Phone>
                          For more information phone:
                          <a href={`tel:${item.phone.replace(/\s/g, '')}`}>{item.phoneLabel || item.phone}</a>
                        </Phone>
                        <Logo tone="blue" small />
                      </Foot>
                    </Body>
                  </Card>
                  <Aside>
                    <h2>{item.question}</h2>
                    <p>{item.answer}</p>
                  </Aside>
                </Slide>
              );
            })}
          </Track>
        </Viewport>
        <Arrow type="button" $side="right" aria-label="Next slide" onClick={() => step(1)}>
          <IconChevron direction="right" />
        </Arrow>
        <Dots>
          {slides.map((item, itemIndex) => (
            <Dot
              key={item.id}
              type="button"
              $on={itemIndex === index}
              aria-label={`Show slide ${itemIndex + 1}`}
              aria-current={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </Dots>
        <Live aria-live="polite">{slide.question}</Live>
      </Frame>
    </Band>
  );
}
