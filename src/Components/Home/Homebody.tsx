import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Body: React.FC = () => {
  return (
    <Container className="layout">
      <>
        {' '}
        <Card style={{ width: '25rem' }} className="margin">
          <Card.Img variant="top" src="http://via.placeholder.com/278x180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }} className="margin">
          <Card.Img variant="top" src="http://via.placeholder.com/278x180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
      <>
        <Card style={{ width: '25rem' }} className="margin">
          <Card.Img variant="top" src="http://via.placeholder.com/278x180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }} className="margin">
          <Card.Img variant="top" src="http://via.placeholder.com/278x180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    </Container>
  );
};

export default Body;
