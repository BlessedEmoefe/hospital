import styled from "styled-components";
import { useSite } from "../site";
import { SocialIcon } from "./Icons";
import { Logo } from "./Logo";

const Shell = styled.footer`
  background: white;
  padding: 22px 20px 88px;
  scroll-margin-top: 150px;
`;

const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px 22px;
  color: #8b98a3;
  font-size: 13.5px;
  text-align: center;

  button {
    background: none;
    border: 0;
    color: inherit;
    padding: 0;
    font-size: inherit;
  }

  button:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;

  a {
    width: 28px;
    height: 28px;
    border: 1.5px solid #b7c3cc;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #7e8d99;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.color.blue};
    border-color: ${({ theme }) => theme.color.blue};
  }
`;

const Partners = styled.div`
  margin-top: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Seal = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 45%, #e6c98a, #b8893d 70%);
  color: white;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.45);
`;

const Shield = styled.div`
  width: 62px;
  height: 74px;
  background: #142a6b;
  color: white;
  clip-path: polygon(50% 0, 100% 12%, 88% 78%, 50% 100%, 12% 78%, 0 12%);
  display: grid;
  place-items: center;
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const Academy = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.blue};

  strong,
  span {
    display: block;
    font-family: ${({ theme }) => theme.font.display};
    line-height: 1.1;
  }

  strong {
    font-size: 14px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.01em;
  }
`;

const Mark = styled.div`
  width: 54px;
  height: 36px;
  border-radius: 4px;
  background: linear-gradient(135deg, #0b4f9c, #1aa0d8 55%, #f0b429);
`;

export function Footer() {
  const { openModal } = useSite();

  return (
    <Shell id="contact">
      <Legal>
        <button type="button" onClick={() => openModal("privacy")}>
          Privacy Policy
        </button>
        <button type="button" onClick={() => openModal("terms")}>
          Disclaimer and Terms of Use
        </button>
        <button type="button" onClick={() => openModal("cookies")}>
          Cookie Policy
        </button>
        <span>© 2026 Beacon Hospital | Registration number: 420575</span>
        <span>Site by Fruition</span>
        <Socials>
          {["facebook", "x", "instagram", "linkedin"].map((type) => (
            <a key={type} href="#contact" aria-label={type}>
              <SocialIcon type={type} />
            </a>
          ))}
        </Socials>
      </Legal>
      <Partners aria-label="Hospital partners">
        <Seal>
          Accredited
          <br />
          partner
        </Seal>
        <Mark aria-hidden="true" />
        <Shield>UCD</Shield>
        <Academy>
          <Logo tone="blue" small wordmark={false} />
          <div>
            <strong>Beacon Hospital</strong>
            <span>Academy</span>
          </div>
        </Academy>
      </Partners>
    </Shell>
  );
}
