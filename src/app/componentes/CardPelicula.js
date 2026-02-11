import ButtonComprar from "../componentes/ButtomComprar";

const CardPelicula = ({ id, nombre, categoria, rating, imagen, defaultChecked, atg }) => {
  
  const estrellas = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <>
      <input 
        type="radio" 
        name="slide" 
        id={id} 
        defaultChecked={defaultChecked} 
      />

      <label htmlFor={id} className="card">
        <div className="cardProducto">
            
            <div className="cardImagen">
                <img src={imagen} alt={nombre} />
            </div>

            <div className="card-info">
                <p style={{ color: '#fbbf24', fontSize: '1.2rem' }}>{estrellas}</p>
                <h4>{nombre}</h4>
                <p style={{ opacity: 0.8 }}>{categoria}</p>
                
                <ButtonComprar atg={atg} />
            </div>

        </div>
      </label>
    </>
  );
};

export default CardPelicula;