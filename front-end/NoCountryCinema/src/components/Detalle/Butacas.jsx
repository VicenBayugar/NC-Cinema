import React from 'react';
import './detail.css';

const Butaca = props => {
  return (
    <>
      <div className="butaca-fila">
        <div className={`butaca-asiento ${props.state} `}>
          <p className="butaca-numero">{props.number}</p>
        </div>
      </div>
    </>
  );
};

export default Butaca;
