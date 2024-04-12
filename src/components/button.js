
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons';
import '..//App.css';

const icons = [faCoffee, faHeart, faLeaf, faStar];

const ButtonComponent = () => {
  const [icon, setIcon] = useState(null);

  const handleClick = () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * icons.length);
      setIcon(icons[randomIndex]);
    }, 3000);
  };

  return (
    <div className='button' >
      <button className='btn' onClick={handleClick}>Show Icon</button>
      {icon && <FontAwesomeIcon className='icon' icon={icon}  />}
    </div>
  );
};

export default ButtonComponent;


