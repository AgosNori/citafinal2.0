import "./Jovenes.css";
import PropTypes from "prop-types";
function Jovenes({ images }) {
  return (
    <>
      <h2 className="texto-bienvenida-jovenes"> Bienvenidos al Ministerio de Jóvenes</h2>
      <div className="texto-jovenes">
        <div className="jovenes-imagenes">
          <img className="img-jov" src="public\img\imagenes\Jovenes1.jpg"></img>
        </div>
        <p>El ministerio de prepara a los  jóvenes con visión de un futuro integro, entendiendo los preceptos de la sana doctrina. Involucrar a los jóvenes en el servicio, la adoración y el liderazgo les permite crecer y contribuir.
          Los jóvenes enfrentan decisiones importantes sobre su futuro. El ministerio debe ofrecer apoyo espiritual y práctico mientras navegan por la universidad, la carrera, trabajos y las relaciones.
        </p>
        <div>
          <h2> Ministerio de PreAdolescentes</h2>
        </div>
        <div className="ados-imagenes">
          <div>
            <p>
              Etapa Crucial: La preadolescencia es un período de transición entre la niñez y la adolescencia. Los preadolescentes necesitan un espacio seguro donde puedan explorar su fe, hacer preguntas y recibir orientación.
              El ministerio con preadolescentes está centrado en establecer sólidos fundamentos bíblicos. Es el momento adecuado para enseñarles sobre la gracia, la salvación y la vida en Cristo.
            </p>
          </div>
          <img className="img-ados" src="public\img\imagenes\Jovenes2.jpg"></img>
        </div>
        <div>
          <h2> Ministerio de Adolescentes</h2>
        </div>
        <div className="pre-imagenes">

          <div>
            <p>
              Desafíos de la Adolescencia: La adolescencia es una etapa de cambios físicos, emocionales y sociales. Los adolescentes enfrentan desafíos como la identidad, las presiones sociales y las dudas de fe.
              El ministerio con adolescentes debe ir más allá de la superficialidad. Predicar la Palabra de Dios con fidelidad y abordar temas relevantes para ellos es esencial.</p>
          </div>
          <img className="img-pre" src="public\img\imagenes\Jovenes3.jpg"></img>
        </div>
      </div>
      <div className="cuadro-imagenes">
        {/* Itera sobre las imágenes y muestra cada una */}
        {images.map((image, index) => (
          <img key={index} className="img-cuadro" src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </>
  );
}
Jovenes.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Jovenes;