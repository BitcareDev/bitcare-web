// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import { Container, Row, Col } from "reactstrap";

export default function CustomGrid() {
  return (
    <div>
      {/* <Row className="justify-content-md-center">
        <Col xs lg="4" xl="6" md="4" style={{ background: "red" }} fluid="sml">
          1 of 3
        </Col>
        <Col md="auto" xxl="6" style={{ background: "green" }}>
          Variable width content
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
        <Col xs lg="4" style={{ background: "blue" }}>
          3 of 3
        </Col>
      </Row> */}
      {/* <Row>
        <Col style={{ background: "red" }} xs lg={4}>
          1 of 3
        </Col>
        <Col md={6} style={{ background: "green" }} xs lg="2">
          2 of 3 (wider)
        </Col>
        <Col style={{ background: "blue" }} xs lg="2">
          3 of 3
        </Col>
      </Row> */}
      {/* <Row fluid>
        <Col style={{ background: "red" }}>1 of 3</Col>
        <Col xs={6} style={{ background: "green" }}>
          2 of 3 (wider)
        </Col>
        <Col style={{ background: "orange" }}>3 of 3</Col>
      </Row> */}
      {/* <Row className="justify-content-md-center">
        <Col xs lg="2" style={{ background: "black" }}>
          1 of 3
        </Col>
        <Col md="auto" style={{ background: "wheat" }}>
          Variable width content
        </Col>
        <Col xs lg="2" style={{ background: "brown" }}>
          3 of 3
        </Col>
      </Row> */}
      {/* <Row>
        <Col style={{ background: "white" }}>1 of 3</Col>
        <Col xs={5} style={{ background: "yellow" }}>
          2 of 3 (wider)
        </Col>
        <Col style={{ background: "blue" }}>3 of 3</Col>
      </Row> */}
      <Row>
        <Col xs="12" md lg="6" style={{ background: "red" }}>
          sm=4
        </Col>
        {/* <Col md="auto" style={{ background: "green" }}>
          sm=4 wider
        </Col> */}
        <Col xs="12" md lg="6" style={{ background: "orange" }}>
          sm=4
        </Col>
        {/* <Col style={{ background: "orange" }}>sm=4</Col> */}
      </Row>
    </div>
  );
}
