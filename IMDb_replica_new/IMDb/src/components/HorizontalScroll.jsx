import { useRef, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../css/horizontalScroll.css";
import * as Icon from "react-bootstrap-icons";

function HorizontalScroll({ movies }) {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div style={{ marginTop: "0", padding: "0", position: "relative" }}>



      <div
        className=" mx-auto position-absolute top-50 start-50 translate-middle"
        style={{
          minHeight: "100%",
          width: "99%",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          zIndex: 1,
        }}
      >
        <Button
          className="bg-transparent"
          style={{ border: "none" }}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 10, 500, -10);
          }}
          disabled={arrowDisable}
        >
          {" "}
          <Icon.CaretLeft size={36} />
        </Button>
        <Button
          className="bg-transparent"
          style={{ border: "none" }}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 10, 500, 10);
          }}
        >
          {" "}
          <Icon.CaretRight size={36} />
        </Button>
      </div>

      <div
        className=" col-12 col-sm-10 col-lg-11 mx-auto  d-flex  overflow-hidden"
        style={{ padding: "0" }}
        ref={elementRef}
      >
        {movies.map((movie, index) => (
          <Container key={index}>
            <Card
              style={{
                minWidth: "240px",
                height: "500px",
                padding: "0px",
                borderRadius: "0",
                margin: "0",
              }}
              className="text-light bg-dark  col-12 mx-1"
            >
              <Card.Img
                src={movie.poster}
                style={{
                  width: "100%",
                  height: "65%",
                  objectFit: "fill",
                  borderRadius: "0",
                  margin: "auto",
                }}
              ></Card.Img>

              <Card.Body>
                <Card.Text>
                  <Icon.StarFill color="red" /> {movie.IMDB_rating}
                </Card.Text>
                <Card.Title>{movie.title}</Card.Title>
              </Card.Body>

              <Card.Footer className="d-grid mb-2">
                <Container
                  as={Button}
                  className="text-primary text-center p-2 rounded "
                  style={{ backgroundColor: "#2C2C2C" }}
                >
                  {" "}
                  <Icon.Plus size={24} />
                  watchlist
                </Container>
              </Card.Footer>
            </Card>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default HorizontalScroll;
