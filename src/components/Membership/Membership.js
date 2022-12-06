import "./Membership.css";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Membership() {
  console.log("We are in membership");
  const [total, setTotal] = useState(0);
  const [silverTotal, setSilverTotal] = useState(0);
  const [goldTotal, setGoldTotal] = useState(0);
  const [diamondTotal, setDiamondTotal] = useState(0);

  const services = [
    { name: "Provider Consultation(s)", price: 99, startPlan: 1 },
    { name: "3D Stylu Body Scan", price: 69, startPlan: 1 },
    { name: "Health Risk Assessment", price: 79, startPlan: 2 },
    { name: "Body Composition Assessment", price: 199, startPlan: 2 },
    { name: "Weight-Loss Program", price: 49, startPlan: 3 },
    { name: "Workout Sessions", price: 89, startPlan: 3 },
    { name: "Meal Planner Consultation", price: 99 },
  ];

  useEffect(() => {
    const tot = 0;
    services.forEach((ser) => {
      setTotal((prevState) => prevState + ser.price);
      if (ser.startPlan < 2) {
        setSilverTotal((prevState) => {
          console.log("silver total: ", prevState);
          return prevState + ser.price;
        });
      }
      if (ser.startPlan < 3) setGoldTotal((prevState) => prevState + ser.price);
      if (ser.startPlan <= 3)
        setDiamondTotal((prevState) => prevState + ser.price);
    });
  }, [services.length]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "mediumaquamarine",
      }}
    >
      {/* <Row className="row g-0"> */}
      {/* <Col xs="1" md lg="1"></Col>
        <Col xs="3" md lg="3" style={{ marginLeft: "2%" }}>
          <Card>
            <Card.Img src="../../../public/assets/signup-1.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="3" md lg="3" style={{ margin: "5% 2%" }}>
          <Card>
            <Card.Img src="../../../public/assets/signup-1.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="3" md lg="3" style={{ marginRight: "2%" }}>
          <Card>
            <Card.Img src="../../../public/assets/signup-1.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="1" md lg="1"></Col> */}
      <Row className="row g-0">
        <Col xs="1" md lg="1"></Col>
        <Col xs="2" md lg="2">
          Service
        </Col>
        <Col xs="2" md lg="2">
          Price
        </Col>
        <Col xs="2" md lg="2">
          Silver
        </Col>
        <Col xs="2" md lg="2">
          Gold
        </Col>
        <Col xs="2" md lg="2">
          Diamond
        </Col>
        <Col xs="1" md lg="1"></Col>
      </Row>
      {services.map((service) => (
        <Row className="row g-0">
          <Col xs="1" md lg="1"></Col>
          <Col xs="2" md lg="2">
            {service.name}
          </Col>
          <Col xs="2" md lg="2">
            ${service.price}
          </Col>
          <Col xs="2" md lg="2">
            {service.startPlan < 2 ? (
              <input type="checkbox" value="" checked disabled />
            ) : (
              <input
                type="checkbox"
                value=""
                onClick={(e) => {
                  console.log("Is checked: ", e.target.checked);
                  e.target.checked
                    ? setSilverTotal((prevState) => prevState + service.price)
                    : setSilverTotal((prevState) => prevState - service.price);
                }}
              />
            )}
          </Col>
          <Col xs="2" md lg="2">
            {service.startPlan < 3 ? (
              <input type="checkbox" value="" checked disabled />
            ) : (
              <input
                type="checkbox"
                value=""
                onClick={(e) =>
                  e.target.checked
                    ? setSilverTotal((prevState) => prevState + service.price)
                    : setSilverTotal((prevState) => prevState - service.price)
                }
              />
            )}
          </Col>
          <Col xs="2" md lg="2">
            {service.startPlan <= 3 ? (
              <input type="checkbox" value="" checked disabled />
            ) : (
              <input
                type="checkbox"
                value=""
                onClick={(e) =>
                  e.target.checked
                    ? setSilverTotal((prevState) => prevState + service.price)
                    : setSilverTotal((prevState) => prevState - service.price)
                }
              />
            )}
          </Col>
          <Col xs="1" md lg="1"></Col>
        </Row>
      ))}
      <Row className="row g-0">
        <Col xs="1" md lg="1"></Col>
        <Col xs="2" md lg="2">
          Total
        </Col>
        <Col xs="2" md lg="2">
          ${total}
        </Col>
        <Col xs="2" md lg="2">
          ${silverTotal}
        </Col>
        <Col xs="2" md lg="2">
          ${goldTotal}
        </Col>
        <Col xs="2" md lg="2">
          ${diamondTotal}
        </Col>
        <Col xs="1" md lg="1"></Col>
      </Row>
      {/* </Row> */}
    </div>
  );
}
