import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import SpecificDay from "../components/SpecificDay"; // Assicurati che il percorso sia corretto
import { useState } from "react";
import "../App.css";
const HomePage = ({ data, loading, error }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <Spinner animation="border" variant="light" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Card className="glass-card p-4">
          <h4 className="text-danger">
            Mi dispiace, la ricerca non ha prodotto risultati!
          </h4>
          <p className="text-white">{error}</p>
        </Card>
      </Container>
    );
  }

  if (!data || !data.current) return null;

  const current = data.current;
  const forecastList = data.forecast;
  const dailyForecast = forecastList.filter((reading) =>
    reading.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="home-content">
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="main-weather-card text-center p-5 mb-4 mt-5">
              <h2 className="city-name">{current.name}</h2>
              <img
                src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
                alt="weather icon"
                style={{ width: "150px", margin: "0 auto" }}
              />
              <div className="temp-display">
                {Math.round(current.main.temp)}°C
              </div>
              <p className="weather-desc text-capitalize">
                {current.weather[0].description}
              </p>
            </Card>
            <h3 className="text-white mb-4 mt-5 text-center fw-bold">
              Prossimi Giorni
            </h3>
            <Row className="g-2 justify-content-center">
              {dailyForecast.map((day, index) => {
                const date = new Date(day.dt * 1000).toLocaleDateString(
                  "it-IT",
                  {
                    weekday: "short",
                    day: "numeric",
                  },
                );
                return (
                  <Col key={index} xs={6} sm={4} md={2} className="mb-2">
                    <Card
                      className="detail-card p-2 text-center h-100 border-0 shadow-sm text-white"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedDay(day)}
                    >
                      <p
                        className="fw-bold mb-1 text-capitalize"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {date}
                      </p>
                      <img
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt="forecast icon"
                        style={{ width: "40px", margin: "0 auto" }}
                      />
                      <p className="mb-0 fw-bold">
                        {Math.round(day.main.temp)}°C
                      </p>
                      <small
                        className="text-white-50 text-capitalize"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {day.weather[0].description}
                      </small>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <SpecificDay
        show={selectedDay !== null}
        onHide={() => setSelectedDay(null)}
        dayData={selectedDay}
      />
    </div>
  );
};

export default HomePage;
