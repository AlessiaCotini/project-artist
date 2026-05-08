import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const FooterMeteo = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formattedDate = dateTime.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <footer className="glass-navbar mt-auto py-3 text-white border-top border-secondary">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={4} className="my-2 my-md-0">
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5">{formattedTime}</span>
              <span className="text-white-50 small text-capitalize">
                {formattedDate}
              </span>
            </div>
          </Col>

          <Col md={4} className="text-md-end">
            <small>
              &copy; {dateTime.getFullYear()} - Il tuo meteo navigando nell'arte
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMeteo;
