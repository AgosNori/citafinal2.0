import './Footer.css';

function Footer() {
  return (
    <div className="pg-footer">
      <footer className="footerPrincipal">
        <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <img src='public\img\logos\Logo RGB BLANCO.png' width="200"></img>
              </a>
            </div>
          </div>

          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="/nosotros"> Nosotros</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#"> Misiones</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/galeria">Galeria</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/musicos">Musicos</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/matrimonios">Matrimonios</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="https://institutocitaconlavida.com">Instituto Biblico</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Canales de Comunicación</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="https://www.youtube.com/@citaconlavidamontecristo3858">Canal de Youtube</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="http://citaconlavida.com.ar/radiohtml.html">Radio Amistad</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Casa Central</h2>

              <a className="footer-call-to-action-button button" href="http://citaconlavida.com.ar" target="_self">Casa central </a>
            </div>

          </div>
       
          <div className='botonRedesSociales'>
            <div className="footer-social-links footer-call-to-action">
              <div className="share-button">
                <div className="share-button__back">
                  <a className="share__link footer-social-link x" href="https://twitter.com/citamonte" title="x">
                    <img src="public\img\iconos\x.png" width="30px" alt="x" />
                  </a>
                  <a className="share__link footer-social-link x" href="https://www.facebook.com/citaconlavida.montecristo/?locale=es_LA" title="facebook">
                    <img src="public/img/iconos/facebook.png" width="30px" alt="Facebook" />
                  </a>
                  <a className="share__link footer-social-link ig" href="https://www.instagram.com/citaconlavidamontecristo/?hl=es" title="instagram">
                    <img src="public/img/iconos/instagram.png" width="30px" alt="Instagram" />
                  </a>
                  <a className="share__link footer-social-link whatsapp" href="#" title="whatsapp">
                    <img src="public/img/iconos/whatsapp.png" width="30px" alt="WhatsApp" />
                  </a>
                </div>
                <div className="share-button__front">
                  <p className="share-button__text">Redes Sociales</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">

            <div className="copyrightSection text-center p-3" >
              © 2024 Copyright:
              <a className="text-white">Cita Con la Vida Montecristo</a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer;