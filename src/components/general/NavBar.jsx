import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assets/logos/logo.png";
import navigation from "../../data/navigation";

const isExternal = (to) => typeof to === "string" && to.startsWith("http");

/** One dropdown entry: group header, external link, or internal route. */
const MenuItem = ({ item, onNavigate }) => {
  if (item.type === "header") {
    return <NavDropdown.Header>{item.label}</NavDropdown.Header>;
  }

  const content = (
    <>
      <span>{item.label}</span>
      {item.badge && <span className="badge text-bg-primary">{item.badge}</span>}
    </>
  );

  if (isExternal(item.to)) {
    return (
      <NavDropdown.Item
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {content}
      </NavDropdown.Item>
    );
  }

  return (
    <NavDropdown.Item as={NavLink} to={item.to} onClick={onNavigate}>
      {content}
    </NavDropdown.Item>
  );
};

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Collapse the mobile menu whenever the route changes.
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="iswc-navbar"
    >
      <Container fluid="xl">
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          <img src={logo} alt="ISWC 2026 home" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="iswc-main-nav" aria-label="Toggle navigation" />

        <Navbar.Collapse id="iswc-main-nav">
          <Nav as="ul" className="ms-auto align-items-lg-center">
            {navigation.map((entry) =>
              entry.items ? (
                <NavDropdown
                  as="li"
                  key={entry.label}
                  title={entry.label}
                  id={`nav-${entry.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {entry.items.map((item) => (
                    <MenuItem
                      key={item.label}
                      item={item}
                      onNavigate={closeMenu}
                    />
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Item as="li" key={entry.label}>
                  {isExternal(entry.to) ? (
                    <Nav.Link
                      href={entry.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      {entry.label}
                    </Nav.Link>
                  ) : (
                    <Nav.Link as={NavLink} to={entry.to} end onClick={closeMenu}>
                      {entry.label}
                    </Nav.Link>
                  )}
                </Nav.Item>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
