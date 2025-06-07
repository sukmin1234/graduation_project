

import React, { useState } from 'react';
import home from '../../../images/icon/home.png';
import homeHover from '../../../images/icon/home_color.png';

function ImageHover({ defaultImg, hoverImg, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li className="footer-wrap">
      <a href="/"
      //mouse 이벤트
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}>
        <img src={hovered ? hoverImg : defaultImg} alt={`${label}_logo`} />
        <p>{label}</p>
      </a>
    </li>
  );
}

export default ImageHover;
