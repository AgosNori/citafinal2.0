import './Toast.css';

const Toast = () => {
  const handleYesClick = () => {
   
    window.location.href = '/soynuevo';
  };

/*   const handleNoClick = () => {
    window.location.href = '/';
  }; */

  return (
    <div className="toast-contai" id="toast-contai">
      <div className="contenido">
        <div className="contenidoTxtBtnLgo">
          <div className="logoText">
            <div className="texto">

              <p id="textoToast">¿Sos nuevo?</p>
            </div>
          </div>
          <hr id="division" />
          <div className="buttonsToast">
            <button className="sayYes" id="sayYes" onClick={handleYesClick}>
              <h5 className="textButtonToast">Sí</h5>
            </button>
          </div>
         {/*  <button className="sayNo" id="sayNo" onClick={handleNoClick}>
            <h5 className="textButtonToast">No</h5>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Toast;