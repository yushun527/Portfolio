import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Service: React.FC = () => {
  return (
    <Container className="service">
      <Row lg="3">
        <Col>
          {' '}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Work1</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Work2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Work3</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row lg="3">
        <Col>
          {' '}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Work4</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Work5</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {' '}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Work6</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
