import React from 'react';

const images = {
  '1977-05-25': require('../../../assets/images/1977-05-25.jpeg'),
  '1980-05-17': require('../../../assets/images/1980-05-17.jpeg'),
  '1983-05-25': require('../../../assets/images/1983-05-25.jpeg'),
  '1999-05-19': require('../../../assets/images/1999-05-19.jpeg'),
  '2002-05-16': require('../../../assets/images/2002-05-16.jpeg'),
  '2005-05-19': require('../../../assets/images/2005-05-19.jpeg'),
  '2015-12-11': require('../../../assets/images/2015-12-11.jpeg'),
  '2017-12-14': require('../../../assets/images/2017-12-14.jpeg')
};

export default ({ date, alt, ...rest }) => {
  const image = images[date] || false;
  return (
    image && (
      <figure {...rest}>
        <img src={image} alt={alt} />
      </figure>
    )
  );
};
