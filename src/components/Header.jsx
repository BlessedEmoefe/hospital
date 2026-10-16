import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  departments,
  mainNav,
  moreDepartments,
  moreServices,
  services,
  slug,
  utilityLinks,
} from "../data";
import { useSite } from "../site";
import { container } from "../theme";
import { IconChevron, IconClose, IconMenu, IconSearch } from "./Icons";
import { Logo } from "./Logo";

const Shell = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  background: ${({ theme }) => theme.color.blue};
  color: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
`;

const Inner = styled.div`
  ${container};
  padding-top: 8px;
  padding-bottom: 10px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  min-height: 86px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  flex: 1;

  @media (max-width: 980px) {
    display: none;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  min-height: 28px;

  @media (max-width: 980px) {
    display: none;
  }
`;

const QuietLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const QuietButton = styled.button`
  background: none;
  border: 0;
  color: white;
  padding: 0;
  font-size: 13.5px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    display: none;
  }
`;

const Item = styled.div`
  position: relative;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: 2px solid ${({ $on }) => ($on ? "white" : "transparent")};

  &:hover {
    border-bottom-color: white;
  }
`;

const NavButton = styled.button`
  background: none;
  border: 0;
  color: white;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0 0 4px;
  border-bottom: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    border-bottom-color: white;
  }
`;

const Drop = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  left: 0;
  background: white;
  min-width: 230px;
  padding: 8px 0;
  box-shadow: 0 14px 34px rgba(0, 40, 70, 0.18);
  z-index: 5;

  a,
  button {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.color.blue};
    text-decoration: none;
    padding: 10px 16px;
    font-size: 15px;
    letter-spacing: 0;
    text-transform: none;
    font-weight: 600;
  }

  a:hover,
  button:hover {
    background: #f2f9fd;
  }
`;

const IconBtn = styled.button`
  background: none;
  border: 0;
  color: white;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

const SearchWrap = styled.div`
  position: relative;
`;

const SearchPanel = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  width: min(380px, 80vw);
  background: white;
  color: ${({ theme }) => theme.color.ink};
  box-shadow: 0 16px 40px rgba(0, 30, 60, 0.2);
  padding: 14px;
  z-index: 6;

  input {
    width: 100%;
    height: 42px;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 4px;
    padding: 0 12px;
    font-size: 15px;
  }

  ul {
    list-style: none;
    margin: 8px 0 0;
    padding: 0;
    max-height: 280px;
    overflow: auto;
  }

  li button {
    width: 100%;
    text-align: left;
    background: none;
    border: 0;
    padding: 8px 6px;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: #1d4e6e;
    font-size: 15px;
  }

  li button:hover {
    background: #f4fafd;
  }

  small {
    color: ${({ theme }) => theme.color.muted};
    font-size: 12px;
  }
`;

const Empty = styled.p`
  margin: 10px 4px 4px;
  color: ${({ theme }) => theme.color.muted};
  font-size: 14px;
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: 0;
  color: white;
  width: 40px;
  height: 40px;
  place-items: center;

  @media (max-width: 980px) {
    display: grid;
  }
`;

const MobilePanel = styled.div`
  display: none;
  background: white;
  color: #16425d;

  @media (max-width: 980px) {
    display: block;
  }

  a,
  button {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: 0;
    border-bottom: 1px solid #e6eef4;
    color: ${({ theme }) => theme.color.blue};
    text-decoration: none;
    padding: 14px 20px;
    font-weight: 600;
    font-size: 15px;
  }
`;

const Actions = styled.div`
  display: flex;
`;

const Action = styled.button`
  flex: 1;
  height: 38px;
  border: 0;
  color: white;
  background: ${({ $hot, theme }) =>
    $hot ? theme.color.emergency : theme.color.blue};
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(10px, 1.5vw, 13px);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.06);
  }
`;

const sectionFor = {
  top: "home",
  departments: "departments",
  services: "departments",
  consultants: "consultants",
};

export function Header() {
  const { openModal, flashItem } = useSite();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    const ids = [
      "top",
      "departments",
      "services",
      "consultants",
      "news",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && sectionFor[visible.target.id])
          setActive(sectionFor[visible.target.id]);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onPointer = (event) => {
      if (!event.target.closest("[data-nav]")) setDrop(null);
      if (!event.target.closest("[data-search]")) setSearchOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setDrop(null);
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const catalogue = [
    ...[...departments, ...moreDepartments].map((label) => ({
      label,
      group: "Department",
      id: slug(label, "dept"),
    })),
    ...[...services, ...moreServices].map((label) => ({
      label,
      group: "Service",
      id: slug(label, "svc"),
    })),
  ];
  const results = catalogue
    .filter((item) =>
      item.label.toLowerCase().includes(query.trim().toLowerCase()),
    )
    .slice(0, 8);

  function choose(item) {
    setSearchOpen(false);
    setMenuOpen(false);
    setQuery("");
    flashItem(item.id);
  }

  function follow(item) {
    setDrop(null);
    setMenuOpen(false);
    if (item.action) openModal(item.action);
  }

  return (
    <Shell id="top">
      <Inner>
        <Brand>
          <a href="#top" aria-label="Beacon Hospital home">
            <Logo />
          </a>
          <Stack>
            <Top>
              {utilityLinks.map((link) =>
                link.href ? (
                  <QuietLink key={link.label} href={link.href}>
                    {link.label}
                  </QuietLink>
                ) : (
                  <QuietButton
                    key={link.label}
                    type="button"
                    onClick={() => openModal(link.action)}
                  >
                    {link.label}
                  </QuietButton>
                ),
              )}
              <SearchWrap data-search>
                <IconBtn
                  type="button"
                  aria-label="Search"
                  aria-expanded={searchOpen}
                  onClick={() => setSearchOpen((open) => !open)}
                >
                  <IconSearch />
                </IconBtn>
                {searchOpen && (
                  <SearchPanel>
                    <input
                      autoFocus
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search departments and services"
                      aria-label="Search departments and services"
                    />
                    {results.length === 0 ? (
                      <Empty>No matches.</Empty>
                    ) : (
                      <ul>
                        {results.map((item) => (
                          <li key={item.id}>
                            <button type="button" onClick={() => choose(item)}>
                              {item.label}
                              <small>{item.group}</small>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </SearchPanel>
                )}
              </SearchWrap>
            </Top>
            <Nav aria-label="Primary" data-nav>
              {mainNav.map((item) => (
                <Item key={item.id}>
                  {item.links ? (
                    <NavButton
                      type="button"
                      aria-expanded={drop === item.id}
                      onClick={() =>
                        setDrop((current) =>
                          current === item.id ? null : item.id,
                        )
                      }
                    >
                      {item.label}
                      <IconChevron direction="down" width="14" height="14" />
                    </NavButton>
                  ) : item.href ? (
                    <NavLink href={item.href} $on={active === item.id}>
                      {item.label}
                    </NavLink>
                  ) : (
                    <NavButton type="button" onClick={() => follow(item)}>
                      {item.label}
                    </NavButton>
                  )}
                  {drop === item.id && item.links && (
                    <Drop>
                      {item.links.map((link) =>
                        link.href ? (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setDrop(null)}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <button
                            key={link.label}
                            type="button"
                            onClick={() => follow(link)}
                          >
                            {link.label}
                          </button>
                        ),
                      )}
                    </Drop>
                  )}
                </Item>
              ))}
            </Nav>
          </Stack>
          <Burger
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </Burger>
        </Brand>
      </Inner>
      {menuOpen && (
        <MobilePanel>
          {mainNav.map((item) =>
            item.href ? (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <button key={item.id} type="button" onClick={() => follow(item)}>
                {item.label}
              </button>
            ),
          )}
          {utilityLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => follow(link)}
              >
                {link.label}
              </button>
            ),
          )}
        </MobilePanel>
      )}
      <Actions>
        <Action type="button" onClick={() => openModal("bill")}>
          Pay a bill
        </Action>
        <Action type="button" $hot onClick={() => openModal("emergency")}>
          Emergency Department
        </Action>
      </Actions>
    </Shell>
  );
}
