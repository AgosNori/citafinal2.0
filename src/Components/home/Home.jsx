import CardNovedades from "../Cards/CardNovedades";
import Reuniones from "../reuniones/Reunioines";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">

      <div className="head">
        <div className="cartBienvenida">
          <div className="fotoprincipalHome">
            <div className="parallax-inner-Home">
              <h1>Bienvenidos a la iglesia de la familia</h1>
            </div>
          </div>
          <div className="textoHome">
            <p className="parrafoHome">Creemos en una vida transformada por el poder del amor de Dios. Nuestro propósito es inspirar y equipar a las personas para vivir una vida plena y significativa en Cristo.  Nuestra misión es proporcionar un lugar donde cada persona pueda experimentar el amor incondicional de Dios, crecer en su relación con Él y ser capacitado para marcar una diferencia positiva en el mundo.
              <br /> <br />
              Veni a encuentro con Dios
              <br /><br />
              Nos encontramos en Pasaje Cervantes N°675 - Ciudad de Montecristo
            </p>
          </div>
          <div className="ubiHome">
            <img src="public\img\iconos\locate_gps_navigation_pin_point_location_icon-icons.com_59906.png" width="100px"></img>
            <a href="https://maps.app.goo.gl/6BakSCjhzpEDPxnm7" className="btn-">
              <button className="btnHome Ubi">Como llegar</button>
            </a>
          </div>
          <div className="sembrarHome">
            <h3>¿Deseas sembrar en nuestra iglesia?</h3>
            <Link className="btnSembrar" to="https://www.mercadopago.com.ar/paid?code=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=EAIaIQobChMI2uTNv4n3hQMVf15IAB3f0w0KEAAYASAAEgKxXPD_BwE">
              <button className="btnHome Sembrar">Sembrar Aquí</button>
            </Link>
          </div>
          <div className="reunionesIglesia">
            <h3>Nuestras Reuniones</h3>
            <Reuniones />
          </div>
          <div className="video-container">
            <h3>Mensaje de Bienvenida.</h3>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="img\imagenes\kidsabados.mp4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="novedadesHome">
            <h3 className="subtitulo">Novedades</h3>
            <CardNovedades />
          </div>
          <div className="infoMinisterios">
          <p>Te invitamos a conocer a nuestras areas de trabajo</p>
          <Link to="/ministerios" className="cta">
            <span>Más información</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
        <div className="parrafo">
          <h2 className="escribenos">Escríbenos</h2>
          <div className="seccionEscribenos">
            <div>
              <p className="parrafo-escribenos">
                Por consultas, pedidos de oracion u otro motivo no dudes en
                contactarnos; alguien de nuestros colaboradores se pondra en
                cintacto,
              </p>
            </div>
            <div >
              <Link to="/contacto" className="btn-escribenos">
                Escríbenos
              </Link>
            </div>
          </div>
        </div>
        <div className="infoMotivos">
          <p>Si estas pasando por momentos difíciles, si necesitas fortaleza, dirección o simplemente deseas compartir tus alegrías y
            agradecimientos, te animamos a que te pongas en contacto con nosotros. Nuestro equipo de oración esta listo para interceder
            por ti y acompañarte en tu caminar espiritual. No dudes en llamarnos, enviarnos un mensaje o visitarnos en nuestras reuniones.
            Estamos aquí para ti, porque juntos somos más fuertes en el amor de Cristo. Que la paz de Dios que sobrepasa todo entendiemiento
            guarde vuestros corazones y mentes en Cristo Jesús. ¡Bendiciones y esperamos escucharte pronto! Tu familia en la fe.</p>
          <Link to="/motivos" className="ctaM">
            <span>Pedidos de oración</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
        <div className="canales">
          <div className="canales-ver">
            <img src="public\img\iconos\iconmonstr-video-camera-12-240.png" className="" width="90px"></img>
            <h6>Volve a revivir la palabra por nuestro canal.</h6>

            <Link to="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-ver">
              Ver
            </Link>
          </div>
          <div className="canales-ver">
            <img src="public\img\iconos\galeria.png" className=""></img>
            <h6>Nuestra Galería de imágenes.</h6>
            <Link to="/galeria" className="btn-ver">
              Ver
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Home;
