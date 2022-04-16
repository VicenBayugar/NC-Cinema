import React from 'react';
import './detail.css';

const Butaca = props => {
  return (
    <>
      <div className="butaca-asiento">
        <p className="butaca-numero">{props.number}</p>
      </div>
    </>
  );
};

export default Butaca;
