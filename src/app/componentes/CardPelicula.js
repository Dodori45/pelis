import ButtonComprar from "../componentes/ButtomComprar";

const CardPelicula = ({ id, nombre, categoria, rating, imagen, defaultChecked, atg }) => {
  const esBajo = rating < 4;

  return (
    <>
      <input type="radio" name="slide" id={id} defaultChecked={defaultChecked} />
      <label 
        htmlFor={id} 
        className={`card ${esBajo ? 'low-rating-glow' : ''}`}
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="row">
          <div className={`icon ${esBajo ? 'icon-low' : ''}`}>
            {rating}
          </div>
          <div className="description">
            <h4>{nombre}</h4>
            <p>{categoria}</p>
            <p>Valoración: {rating}/5</p>
            <ButtonComprar atg={atg} />
          </div>
        </div>
      </label>
    </>
  );
};

export default CardPelicula;