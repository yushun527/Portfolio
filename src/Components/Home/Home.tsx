import React from 'react';
import { Card } from 'react-bootstrap';
import Body from './Homebody';

const Home: React.FC = () => {
  return (
    <>
      <Card className="bg-white">
        <Card.Img
          className="picture"
          src="https://www.pakutaso.com/shared/img/thumb/gori0I9A3053072102529_TP_V.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay className="title">
          <Card.Title>
            <h1>Welcome to my portfolio</h1>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <h1 className="word">Skills</h1>
      <h2 className="word2">HTML, CSS, JavaScript, TypeScript, React</h2>
      <h1 className="word">Works</h1>
      <Body />
    </>
  );
};

export default Home;
