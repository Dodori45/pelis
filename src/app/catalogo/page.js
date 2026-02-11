'use client'

import { useEffect, useState } from "react";
import CardPelicula from "../componentes/CardPelicula";
import SearchBar from "../componentes/searchBar";

function App() {
  const [totalRentas, setTotalRentas] = useState(0);
  const [terminoBusqueda, setTerminoBusqueda] = useState(""); 

  useEffect(() => {
    const compras = localStorage.getItem("carrito") || "0";
    setTotalRentas(parseInt(compras));
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", totalRentas.toString());
  }, [totalRentas]);

  const atg = () => setTotalRentas(prev => prev + 1);

  const peliculas = [
    { id: "c1", nombre: "Los juegos del hambre", categoria: "Ciencia Ficción", rating: 3, imagen: "../hambre.jpg" },
    { id: "c2", nombre: "Harry Potter", categoria: "Fantasía", rating: 4, imagen: "../harry.jpg"},
    { id: "c3", nombre: "Crepusculo", categoria: "Romance", rating: 5, imagen: "../Twilight.jpg"},
  ];

  const peliculasFiltradas = peliculas.filter(peli => 
    peli.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="wrapper">
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', zIndex: 10 }}>
         <SearchBar onSearch={setTerminoBusqueda} />
         
         <div style={{ 
            background: '#621551', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '30px', 
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(129, 133, 87, 0.4)'
         }}>
            Rentas: {totalRentas}
         </div>
      </div>

      <div className="container">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((peli, index) => (
            <CardPelicula
              key={peli.id}
              {...peli}
              defaultChecked={index === 0} 
              atg={atg}
            />
          ))
        ) : (
           <p style={{ color: 'gray', fontStyle: 'italic' }}>No seas exigente que esto no es Netflix</p>
        )}
      </div>

    </div>
  );
}

export default App;