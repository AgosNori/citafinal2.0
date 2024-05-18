import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contacto.css";
import Swal from "sweetalert2";

function Contacto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name_user: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEnviar = async (e) => {
    e.preventDefault();
    try {
      const { name_user, email, telefono } = formData;
      if (!name_user.trim() || !email.trim() || !telefono.trim()) {
        Swal.fire({
          icon: "error",
          title: "Error de validación",
          text: "Por favor complete todos los campos, son obligatorios.",
        });
        return;
      }

      const response = await fetch("http://localhost:3500/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // id_user: 1,
          name_user: name_user,
          email,
          telefono,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Tu mensaje ha sido enviado correctamente.",
        });
        navigate("/");
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          // Manejar errores del servidor si es necesario
        } else {
          throw new Error("Error al enviar el mensaje");
        }
      }
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al enviar el mensaje. Por favor, inténtelo de nuevo.",
      });
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="form-container">
          <div className="titulo-contacto">
            <h2>Ponte en Contacto</h2>
          </div>
          <div>
            <form className="contact-form">
              <div>
                <label htmlFor="name_user">Nombre:</label>
                <input
                  type="text"
                  id="name_user"
                  name="name_user"
                  placeholder=" Su nombre"
                  value={formData.name_user}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Su correo"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="telefono">Telefono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="999-999999"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    const pattern = /[0-9-]/;
                    if (!pattern.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  cols="40"
                  rows="6"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="boton">
                <button type="submit" onClick={handleEnviar}>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;


/* import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Contacto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name_user: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEnviar = async () => {
    try {
      if (!formData.name_user || !formData.email || !formData.telefono || !formData.mensaje) {
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          text: 'Por favor complete todos los campos, son obligatorios.',
        });
        return;
      }
      const response = await fetch('http://localhost:3500/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id_user: 1, 
          name_user: formData.name_user,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
        }),
      });
      
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Tu mensaje ha sido enviado correctamente.',
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
        </p> }
      </div>
        </div>
        <div className="form-container">
          <h2>Contacto</h2>
          <form className="contact-form">
            
            <div>
              <label >Nombre:</label>
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
              <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." cols="40" rows="6" onChange={handleInputChange}></textarea>
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

export default Contacto; */