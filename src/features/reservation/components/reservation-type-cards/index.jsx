import { Row, Col, Card } from "react-bootstrap";
import "./style.css";

import tableImg from "../../../../assets/Table illustration.png";
import multiTableImg from "../../../../assets/Multy tables.png";
import restaurantImg from "../../../../assets/Resaurant illustration.png";
import eventImg from "../../../../assets/Event illustration.png";

export function ReservationTypeCards({ selectedId, onSelect }) {
  const types = [
    { id: 1, title: "Reserve a table", img: tableImg },
    { id: 2, title: "Reserve multiple tables", img: multiTableImg },
    { id: 3, title: "Reserve all restaurant", img: restaurantImg },
    { id: 4, title: "Reserve for Event", img: eventImg },
  ];

  return (
    <div className="reservation-types mb-5">
      <Row>
        {types.map((item) => (
          <Col key={item.id} xs={6} md={3} className="mb-3 mb-md-0">
            <Card
              className={`type-card h-100 ${
                selectedId === item.id ? "selected" : ""
              }`}
              onClick={() => onSelect(item.id)}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
                <p className="type-title mb-3">{item.title}</p>
                <div className="type-img-wrapper">
                  <img src={item.img} alt={item.title} className="img-fluid" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
