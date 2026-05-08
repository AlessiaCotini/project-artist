import "../App.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import WomenProfile from "../components/WomenProfile";
import ManProfile from "../components/ManProfile";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ onRegister }) => {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const registrationStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && gender) {
      onRegister({ name: name, gender: gender });

      navigate("/home");
    } else {
      alert("Per favore, inserisci il nome e seleziona il sesso.");
    }
  };

  return (
    <div style={registrationStyle} className="registration-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="glass-card p-5 mt-5">
              <div className="text-center mb-4">
                <div className="d-flex justify-content-center mb-3">
                  {gender === "woman" ? (
                    <WomenProfile />
                  ) : gender === "man" ? (
                    <ManProfile />
                  ) : (
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                      }}
                    ></div>
                  )}
                </div>
                <h2 className="fw-bold text-white">Crea Account</h2>
                <p className="text-white-50">Il tuo profilo meteo</p>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Nome Utente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il tuo nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-white">Sesso</Form.Label>
                  <Form.Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                    required
                  >
                    <option value="" style={{ color: "black" }}>
                      Seleziona:
                    </option>
                    <option value="woman" style={{ color: "black" }}>
                      Donna
                    </option>
                    <option value="man" style={{ color: "black" }}>
                      Uomo
                    </option>
                  </Form.Select>
                </Form.Group>

                <Button
                  variant="warning"
                  className="w-100 py-2 fw-bold shadow-sm"
                  type="submit"
                >
                  INIZIAMO
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationForm;
