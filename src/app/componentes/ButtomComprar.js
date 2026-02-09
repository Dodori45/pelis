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
      className="mt-2.5 px-[15px] py-[5px] rounded-[20px] bg-[rgba(109,7,83,0.8)] 
                 text-white font-bold text-[0.9rem] border-none cursor-pointer 
                 transition-all hover:bg-[rgba(148,11,127,1)] active:scale-95 w-fit"
    >
      {ci === 0 
        ? "Rentar" 
        : `Rentada: ${ci} ${ci === 1 ? 'vez' : 'veces'}`}
    </button>
  );
};

export default ButtonComprar;