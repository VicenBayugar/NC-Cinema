import React, { useEffect } from 'react';
import './detail.css';

const Butaca = ({
  number,
  className,
  handlerButaca,
  butaca,
  setButacasDisponibles,
  butacas,
}) => {
  useEffect(() => {
    const disponiblesButacas = butacas.filter(butaca => butaca.state == false);
    setButacasDisponibles(disponiblesButacas);
  }, []);
  return (
    <>
      <div className="butaca-fila">
        <div
          className={`butaca-asiento ${className} `}
          onClick={() => handlerButaca(butaca)}>
          <p className="butaca-numero">{number}</p>
        </div>
      </div>
    </>
  );
};

export default Butaca;
