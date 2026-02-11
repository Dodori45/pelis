import { useState } from "react";

const ButtonComprar = ({ atg }) => {
  const [ci, setci] = useState(0);

  const manejarRenta = () => {
    setci(ci + 1);
    atg();
  };

  return (
    <button 
      onClick={manejarRenta}
      className="btn-rentar" 
    >
      {ci === 0 
        ? "Rentar Ahora" 
        : `Rentada ${ci} veces`}
    </button>
  );
};

export default ButtonComprar;