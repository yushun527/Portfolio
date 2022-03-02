import { Avatar } from '@mui/material';
import React from 'react';

const Aboutme: React.FC = () => {
  return (
    <>
      <h1 className="plofile">Plofile</h1>
      <h2>Name</h2>
      <Avatar
        alt=""
        src="https://lh3.googleusercontent.com/pw/AM-JKLW9N4Oxxh0Z8ZDC8K9p7J2UzGjRJ5OHvmqJkJxTMLTrOA4HR8_ubVAfhCiLbatSzPnBzHownSZ0AH4gWtN_C7XHxsD7NcH4yPaA9SbZyDf3U71vnlhvO2jQBRNLSs4gvVRnUp8YURDRXEqNJkTC9yDw=s1013-no?authuser=0"
        sx={{ width: 200, height: 200 }}
        className="picture2"
      />
    </>
  );
};

export default Aboutme;
