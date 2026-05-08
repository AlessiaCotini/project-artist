import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationForm from "./pages/Registration";
import NavbarMeteo from "./components/NavbarMeteo";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterMeteo from "./components/FooterMeteo";
import ciliegio from "./assets/ciliegio.jpg";
const key = "d62b8a1863ddfd71fa9ead5f9ab6840d";
function App() {
  const [userData, setUserData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bgImage, setBgImage] = useState(ciliegio);
  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError(null);
    try {
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=it`,
      );
      const currentData = await currentRes.json();
      if (!currentRes.ok) throw new Error("Città non trovata");
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=it`,
      );
      const forecastData = await forecastRes.json();
      setWeatherData({
        current: currentData,
        forecast: forecastData.list,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = (data) => {
    setUserData(data);
    fetchWeather("Bali");
  };
  const changeBackground = (imageUrl) => {
    setBgImage(imageUrl);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RegistrationForm onRegister={handleRegistration} />}
        />
        <Route
          path="/home"
          element={
            userData ? (
              <div
                className="dashboard-wrapper vh-100 d-flex flex-column"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  minHeight: "100vh",
                  transition: "background-image 0.5s ease-in-out",
                }}
              >
                <NavbarMeteo
                  onSearch={fetchWeather}
                  userName={userData.name}
                  userGender={userData.gender}
                  onChangeBg={changeBackground}
                />
                <HomePage
                  data={weatherData}
                  loading={loading}
                  error={error}
                  className="flex-grow-1"
                />
                <FooterMeteo />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
