import { Container, Row, Col, Card } from "react-bootstrap";
import orologio from "../assets/orologio.jpg";
import tramonto from "../assets/tramonto.jpg";
import gattino from "../assets/gattino.jpg";
import venere from "../assets/venere.jpg";
import bacio from "../assets/bacio.jpg";
import ilbacio from "../assets/ilbacio.jpg";

const ArtGallery = () => {
  const quadriInfo = [
    {
      img: venere,
      title: "La Nascita di Venere",
      artist: "Sandro Botticelli",
      desc: "Un'icona del Rinascimento che rappresenta l'ideale della bellezza classica.",
    },
    {
      img: bacio,
      title: "Il Bacio",
      artist: "Gustav Klimt",
      desc: "Un capolavoro del periodo aureo, simbolo di amore universale e decorativismo.",
    },
    {
      img: orologio,
      title: "La Persistenza della Memoria",
      artist: "Salvador Dalí",
      desc: "Famoso per i suoi orologi molli, esplora il concetto del tempo soggettivo.",
    },
    {
      img: tramonto,
      title: "Impressione, levar del sole",
      artist: "Claude Monet",
      desc: "Il quadro che diede il nome all'Impressionismo, catturando la luce del mattino.",
    },
    {
      img: gattino,
      title: "Il Gatto sull'Oceano",
      artist: "Contemporaneo",
      desc: "Un tocco di fantasia e surrealismo moderno per rilassare la vista.",
    },
    {
      img: ilbacio,
      title: "Il Bacio",
      artist: "Gustav Klimt",
      desc: "Un capolavoro dorato dove due amanti si fondono in un abbraccio eterno tra geometrie simboliche e preziosi mosaici.",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-white text-center mb-5 fw-bold">Galleria d'Arte</h2>
      <Row className="g-4">
        {quadriInfo.map((art, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="glass-card h-100 border-0 text-dark">
              <Card.Img
                variant="top"
                src={art.img}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="bg-gradient">
                <Card.Title className="fw-bold">{art.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-secondary">
                  {art.artist}
                </Card.Subtitle>
                <Card.Text className="text-dark-50 small">{art.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtGallery;
