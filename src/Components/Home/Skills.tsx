import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Skills: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="word2">
            <h2 className="language">HTML, CSS</h2>
            <p>基本的な技術を勉強しました。</p>
            <p>簡単なサイトを作れます。</p>
          </p>
        </Col>
        <Col>
          {' '}
          <p className="word2">
            <h2 className="language">Javascript</h2>
            <p>関数や変数を勉強しました。</p>
            <p>簡単なtodoリストを作りました。</p>
          </p>
        </Col>
        <Col>
          {' '}
          <p className="word2">
            <h2 className="language">Typescript</h2>
            <p>基本の型などを学びました。</p>
            <p>ポートフォリオサイトを作りました。</p>
            <p>今も勉強中です。</p>
          </p>
        </Col>
        <Col>
          {' '}
          <p className="word2">
            <h2 className="language">React</h2>
            <p>使い方や機能を勉強しました。</p>
            <p>ポートフォリオサイトで使いました。</p>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
