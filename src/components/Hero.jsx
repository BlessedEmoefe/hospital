import styled from 'styled-components';
import { container } from '../theme';
import { IconArrow } from './Icons';

const Band = styled.section`
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(0, 32, 68, 0.78) 0%, rgba(0, 48, 92, 0.55) 32%, rgba(0, 40, 80, 0.12) 58%, rgba(0, 20, 40, 0.08) 100%),
    url('/images/hero-mri.jpg') center 30% / cover no-repeat;
  color: white;

  @media (max-width: 720px) {
    min-height: 440px;
  }
`;

const Inner = styled.div`
  ${container};
  position: relative;
  z-index: 1;
  padding-block: 54px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  max-width: 520px;
  line-height: 1.15;
`;

const Lead = styled.p`
  max-width: 460px;
  margin-top: 18px;
  font-size: 16.5px;
  line-height: 1.5;
  padding-left: 16px;
  position: relative;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 0;
    top: 0.55em;
  }
`;

const Cta = styled.a`
  margin-top: 26px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  border: 1.5px solid white;
  border-radius: 999px;
  padding: 6px 18px 6px 6px;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  span {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1.5px solid white;
    display: grid;
    place-items: center;
  }

  &:hover { background: white; color: ${({ theme }) => theme.color.blue}; }
`;

export function Hero() {
  return (
    <Band>
      <Inner>
        <Title>This is modern medicine</Title>
        <Lead>
          Beacon Hospital provides exceptional patient care with dedicated teams of highly skilled compassionate professionals, enabled by our world leading technologies and equipment.
        </Lead>
        <Cta href="#departments">
          <span><IconArrow /></span>
          Departments & Services
        </Cta>
      </Inner>
    </Band>
  );
}
