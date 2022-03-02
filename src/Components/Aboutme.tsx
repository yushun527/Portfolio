import { Avatar } from '@mui/material';
import React from 'react';

const Aboutme: React.FC = () => {
  return (
    <div className="background">
      <h1 className="plofile">Plofile</h1>
      <Avatar
        alt=""
        src="https://lh3.googleusercontent.com/pw/AM-JKLW9N4Oxxh0Z8ZDC8K9p7J2UzGjRJ5OHvmqJkJxTMLTrOA4HR8_ubVAfhCiLbatSzPnBzHownSZ0AH4gWtN_C7XHxsD7NcH4yPaA9SbZyDf3U71vnlhvO2jQBRNLSs4gvVRnUp8YURDRXEqNJkTC9yDw=s1013-no?authuser=0"
        sx={{ width: 200, height: 200 }}
        className="picture2"
      />
      <div>
        <h2 className="plofile">Name: Yushun Ando</h2>
        <h2 className="plofile">Birthday: 2000年5月27日</h2>
        <p className="aboutme">
          現在南山大学に通う学生です。出身は北海道です。高校まで北海道にいました。
          <br />
          大学では政策系や環境問題などについて学んでいます。
          <br />
          プログラミングは大学三年生の時に始めました。
          <br />
          始めた理由は、エンジニアの需要が高まっているということと、私自身ものづくりが好きだからです。
          <br />
          趣味や好きなことは、ギター、ゲーム、映画鑑賞、漫画、音楽です。
          <br />
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
