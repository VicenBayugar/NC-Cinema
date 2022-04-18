import React from 'react';
import './detail.css';

const Butaca = ({ number, className }) => {
  // console.log(props)
  return (
    <>
      <div className="butaca-fila">
        <div className={`butaca-asiento ${className} `}>
          <p className="butaca-numero">{number}</p>
        </div>
      </div>
    </>
  );
};

export default Butaca;
