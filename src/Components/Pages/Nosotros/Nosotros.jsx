import './Nosotros.css'; // Importa el archivo CSS de estilos
import { Link } from 'react-router-dom';
function Nosotros() {
  return (
    <div className="con">
      <div className="pastor-container">
        <img
          src="public\img\imagenes\Pastor.jpg"
          alt="Marcos Benigno"
          className="pastor-image"
        />
        <div className="pastor-details">
          <h2 className="pastor-name">Marcos Benigno</h2>
          <p className="pastor-role">Pastor y director de la iglesia cita con la vida monte cristo</p>
        </div>
      </div>
      <div className="pastor-description">
        <p>
          La vida del pastor es una vocación llena de desafíos, sacrificios y bendiciones.
          El pastor lleva la carga de cuidar las almas de la congregación. Esto implica orar por ellos, aconsejarlos, visitarlos en momentos de necesidad y guiarlos en su caminar con Dios.
          La responsabilidad de predicar la Palabra de Dios con fidelidad y amor es un peso significativo. El pastor estudia, prepara las prédicas y ministra incluso cuando su propio corazón está afligido.
          Las emergencias, las visitas hospitalarias, los funerales y las reuniones con miembros de la iglesia pueden surgir en cualquier momento. Esto requiere de su flexibilidad y sacrificio personal.

        </p>
       
      </div>
      
      <div className="ministerios">
        <h2 className="titulo-ministerios">Ministerios</h2>
        <div className="ministe">
          <Link to="/ministerios" className="btn-minist">Ver más</Link>
        </div>
      </div>

    </div>
  );

}

export default Nosotros;