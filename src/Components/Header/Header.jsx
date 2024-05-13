import Carousel from 'react-bootstrap/Carousel';
import './Header.css';

function Header() {
  return (
 
      <Carousel>
        <Carousel.Item>
          <img src='img\imagenes\Header1.jpg' alt='' width="100%" height="530px" />
          <Carousel.Caption>
            <h3>Cita Con la Vida Montecristo</h3>
            <p>La iglesia de la Familia. Eres Bienvenido!.</p>
            <button href="#">Sembrar aquí<img src='img\iconos\sembrar.png' width="30px" alt=""/></button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='img\imagenes\Header2.jpg' alt='' width="100%" height="530px" />
          <Carousel.Caption>
            <h3>Santa Cena del Señor</h3>
            <p>No te prives del Privilegio de comer en su mesa.</p>
     
              <button href="#">Sembrar aquí<img src='img\iconos\sembrar.png' width="30px" alt=""/></button>
  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='img\imagenes\2.jpg' alt='' width="100%" height="530px" />
          <Carousel.Caption>
            <h3>Reuniones Dominicales </h3>
            <p>Nuestro culto se celebra todos los domingos te esperamos!.</p>
            <button href="#">Sembrar aquí<img src='img\iconos\sembrar.png' width="30px" alt=""/></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  );
}

export default Header;
