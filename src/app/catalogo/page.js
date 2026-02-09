"use client"
import { useEffect, useState } from "react";
import CardPelicula from "../componentes/CardPelicula";

function App() {
  const [totalRentas, setTotalRentas] = useState(0);

  useEffect(() => {
    const compras = localStorage.getItem("carrito") || "0";
    setTotalRentas(parseInt(compras));
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", totalRentas);
  }, [totalRentas]);

  const atg = () => setTotalRentas(prev => prev + 1);

  const peliculas = [
    { id: "c1", nombre: "Los juegos del hambre", categoria: "Ciencia Ficción", rating: 3, imagen: "../hambre.jpg" },
    { id: "c2", nombre: "Harry Potter", categoria: "Fantasía", rating: 4, imagen: "../harry.jpg"},
  ];

  return (
    <div className="wrapper flex flex-col items-center justify-center">
      {/* Banner con tu clase original */}
      <div className="total-rentas-banner mb-10">
        Películas Rentadas: {totalRentas}
      </div>

      <div className="container">
        {peliculas.map((peli, index) => (
          <CardPelicula
            key={peli.id}
            {...peli}
            defaultChecked={index === 0}
            atg={atg}
          />
        ))}
      </div>
    </div>
  );
}

export default App;