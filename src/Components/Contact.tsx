import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <div className="background">
      <h1 className="form"> Contact</h1>
      <Form className="textarea">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>coment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="primary" size="lg" active className="button">
        送信
      </Button>
    </div>
  );
};

export default Contact;
