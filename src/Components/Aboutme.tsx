import { Avatar, Container } from '@mui/material';
import React from 'react';

const Aboutme: React.FC = () => {
  return (
    <>
      <h1 className="plofile">Plofile</h1>
      <Container className="box">
        <Avatar
          alt=""
          src="https://lh3.googleusercontent.com/pw/AM-JKLW9N4Oxxh0Z8ZDC8K9p7J2UzGjRJ5OHvmqJkJxTMLTrOA4HR8_ubVAfhCiLbatSzPnBzHownSZ0AH4gWtN_C7XHxsD7NcH4yPaA9SbZyDf3U71vnlhvO2jQBRNLSs4gvVRnUp8YURDRXEqNJkTC9yDw=s1013-no?authuser=0"
          sx={{ width: 200, height: 200 }}
          className="picture2"
        />
        <>
          <h2>Name: Yushun Ando</h2>
          <h2>Birthday: 2000年5月27日</h2>
          <p>大学三年生の時にプログラミングを始めました。</p>
        </>
      </Container>
    </>
  );
};

export default Aboutme;
