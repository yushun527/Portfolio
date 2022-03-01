import * as React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { ImPencil2, ImNewspaper } from 'react-icons/im';
import { Col, Row } from 'react-bootstrap';

const Sns: React.FC = () => {
  return (
    <Row className="point">
      <Col md="auto" className="abc">
        <h1>デザイン</h1>
        <ImPencil2 className="button" />
        <p>こんなことやってます</p>
      </Col>
      <Col md="auto" className="abc">
        <h1>コーティング</h1>
        <FaLaptopCode className="button" />
        <p>こんなことやってます</p>
      </Col>
      <Col md="auto" className="abc">
        <h1>ディレクション</h1>
        <ImNewspaper className="button" />
        <p>こんなことやってます</p>
      </Col>
    </Row>
  );
};

export default Sns;
