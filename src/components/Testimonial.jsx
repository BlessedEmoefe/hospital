import styled from 'styled-components';
import { testimonial } from '../data';
import { container } from '../theme';

const Section = styled.section`
  position: relative;
  ${container};
  padding: 56px 0 24px;
  overflow: hidden;
`;

const Hex = styled.svg`
  position: absolute;
  left: -40px;
  top: 20px;
  width: 280px;
  height: 250px;
  color: #d5e6f0;
  pointer-events: none;
`;

const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(220px, 320px) minmax(0, 1fr);
  align-items: center;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center 20%;
  border-radius: 4px;
  position: relative;
  z-index: 1;

  @media (max-width: 760px) {
    height: 240px;
  }
`;

const Card = styled.figure`
  margin: 0;
  background: ${({ theme }) => theme.color.quote};
  color: white;
  margin-left: -42px;
  padding: 32px 36px 22px 58px;
  min-height: 250px;
  position: relative;
  z-index: 0;
  box-shadow: 0 10px 28px rgba(0, 60, 100, 0.12);

  blockquote {
    font-size: 16.5px;
    line-height: 1.5;
    font-weight: 500;
  }

  @media (max-width: 760px) {
    margin-left: 0;
    margin-top: -28px;
    padding: 28px 20px 18px;
  }
`;

const Mark = styled.span`
  display: block;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 64px;
  line-height: 0.7;
  margin-top: 12px;
  opacity: 0.95;
`;

const Name = styled.figcaption`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  letter-spacing: 0.14em;
  font-size: 14px;
  margin-top: 8px;
`;

export function Testimonial() {
  return (
    <Section aria-label="Patient story">
      <Hex viewBox="0 0 200 180" aria-hidden="true">
        <polygon points="100,8 176,48 176,132 100,172 24,132 24,48" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <polygon points="100,34 154,64 154,122 100,152 46,122 46,64" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </Hex>
      <Layout>
        <Photo src={testimonial.image} alt="Patient sitting in a yellow chair" />
        <Card>
          <blockquote>{testimonial.quote}</blockquote>
          <Mark aria-hidden="true">“</Mark>
          <Name>{testimonial.name}</Name>
        </Card>
      </Layout>
    </Section>
  );
}
