import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './motivos.css'; 
import Swal from 'sweetalert2';

function MotivoOracion() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pedido: '',
  });

  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEnviar = async () => {
    try {
      if (!formData.nombre || !formData.email || !formData.telefono ) {
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          text: 'Por favor complete todos los campos, son obligatorios.',
        });
        return;
      }
      const response = await fetch('http://localhost:3500/motivos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_motivo: 1, 
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          pedido: formData.pedido,
        }),
      });
      
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Tu motivo deoración ha sido enviado correctamente.',
        });
        navigate('/');
      } else {
        const data = await response.json();
        setErrors(data.errors || []);
      }
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
    }
  };

  return (
    <div>
      {/* <h1>Formulario para Motivos de Oración</h1> */}
      <div className="contact-container">
        {errors.length > 0 && (
          <ul className="error-list">
            {errors.map((error, index) => (
              <li key={index} className="error-item">{error.msg}</li>
            ))}
          </ul>
        )}
        <div className='text-container'>
        <div className='text-container'>
       {/*  <p>
          Si estás pasando por momentos difíciles, si necesitas fortaleza, dirección o simplemente deseas compartir tus alegrías y agradecimientos, te animamos a que te pongas en contacto con nosotros. Nuestro equipo de oración está listo para interceder por ti y acompañarte en tu caminar espiritual.
          Además de la oración, estamos aquí para escucharte, para brindarte apoyo en cualquier situación que estés enfrentando. No estás solo(a); somos una familia en Cristo, y juntos podemos encontrar consuelo, esperanza y soluciones en la Palabra de Dios.
          No dudes en llamarnos, enviarnos un mensaje o visitarnos en nuestras reuniones. Estamos aquí para ti, porque juntos somos más fuertes en el amor de Cristo.
          Que la paz de Dios que sobrepasa todo entendimiento guarde vuestros corazones y mentes en Cristo Jesús.
          ¡Bendiciones y esperamos escucharte pronto!
          Tu familia en la fe
        </p> */}
      </div>
        </div>
        <div className="form-container">
          <h2>Deja tus Motivos de Oración</h2>
          <form className="contact-form">
            
            <div>
              <label>Nombre:</label>
              <input type="text" name="nombre" placeholder='Su nombre' onChange={handleInputChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" placeholder='Su correo' onChange={handleInputChange} />
            </div>
            <div>
              <label>Teléfono:</label>
              <input type="tel" name="telefono" placeholder='999-999999' onChange={handleInputChange}
              
  onKeyPress={(e) => {
    const pattern = /[0-9-]/;
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  }}/>
  
            </div>
            <div>
              <label>Mensaje:</label>
              <textarea id="pedido" name="pedido" placeholder="Escribe tu mensaje aquí..." cols="40" rows="6" onChange={handleInputChange}></textarea>
            </div>
            <div className="boton">
              <button type="button" onClick={handleEnviar}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MotivoOracion;