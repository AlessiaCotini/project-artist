import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useState } from "react";
import WomenProfile from "./WomenProfile";
import ManProfile from "./ManProfile";
import orologio from "../assets/orologio.jpg";
import tramonto from "../assets/tramonto.jpg";
import gattino from "../assets/gattino.jpg";
import venere from "../assets/venere.jpg";
import bacio from "../assets/bacio.jpg";
import { Link } from "react-router-dom";
const NavbarMeteo = ({ userGender, userName, onSearch, onChangeBg }) => {
  const [city, setCity] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <Navbar expand="lg" className="glass-navbar sticky-top text-black">
      <Container>
        <Link to="/home" className="text-warning fw-bold me-4 navbar-brand">
          IL TUO METEO
        </Link>

        <Navbar.Toggle aria-controls="weather-nav" className="border-white" />

        <Navbar.Collapse id="weather-nav">
          <Form
            className="d-flex mx-auto search-form"
            onSubmit={handleSearchSubmit}
          >
            <FormControl
              type="search"
              placeholder="Cerca città..."
              className="me-2 search-input"
              aria-label="Search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              Cerca
            </Button>
          </Form>
          <Link to="/galleria" className="nav-link text-white me-3">
            Per saperne di più
          </Link>
          <NavDropdown
            title="Scegli il tuo quadro"
            id="bg-dropdown"
            className="me-3 custom-dropdown bg-transparent"
          >
            <NavDropdown.Item onClick={() => onChangeBg(venere)}>
              La Venere
            </NavDropdown.Item>

            <NavDropdown.Item onClick={() => onChangeBg(bacio)}>
              Il bacio
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => onChangeBg(orologio)}>
              Orologi
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => onChangeBg(tramonto)}>
              Tramonto
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => onChangeBg(gattino)}>
              Il gatto sull'oceano
            </NavDropdown.Item>
          </NavDropdown>

          <Nav className="ms-auto align-items-center">
            <span className="text-white me-3 d-none d-lg-block">
              Ciao, <strong>{userName || "Artista"}</strong>!
            </span>
            <div className="navbar-profile-wrapper">
              {userGender === "woman" ? <WomenProfile /> : <ManProfile />}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMeteo;
