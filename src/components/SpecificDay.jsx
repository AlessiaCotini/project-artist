import { Modal, Button, Row, Col } from "react-bootstrap";
import "../App.css";
const SpecificDay = ({ show, onHide, dayData }) => {
  if (!dayData) return null;

  const date = new Date(dayData.dt * 1000).toLocaleDateString("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <Modal show={show} onHide={onHide} centered className="weather-modal">
      <Modal.Header closeButton className="bg-dark text-white border-0">
        <Modal.Title className="text-capitalize">{date}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white p-4">
        <Row className="align-items-center text-center">
          <Col xs={12} md={6}>
            <img
              src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}@4x.png`}
              alt="weather icon"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="display-3 fw-bold">
              {Math.round(dayData.main.temp)}°C
            </h1>
            <p className="fs-4 text-capitalize">
              {dayData.weather[0].description}
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="text-center">
          <Col>
            <small className="text-white-50">Umidità</small>
            <p className="fw-bold">{dayData.main.humidity}%</p>
          </Col>
          <Col>
            <small className="text-white-50">Vento</small>
            <p className="fw-bold">
              {Math.round(dayData.wind.speed * 3.6)} km/h
            </p>
          </Col>
          <Col>
            <small className="text-white-50">Percepita</small>
            <p className="fw-bold">{Math.round(dayData.main.feels_like)}°C</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="bg-dark border-0">
        <Button variant="outline-light" onClick={onHide}>
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SpecificDay;
