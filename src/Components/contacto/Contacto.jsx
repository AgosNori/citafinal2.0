import "./Contacto.css";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const  Contacto =()=> {
  const refForm = useRef();

  const handleSubmitContacto = (event) => {
    event.preventDefault();

    const serviceIdContacto = 'service_f83zyjj';
    const templateIdContacto = 'template_m2qg3ul';
    const apiKey = 'GAXjvuQsYAV_fuH47';

    emailjs.sendForm(serviceIdContacto, templateIdContacto, refForm.current, apiKey)
      .then(result => {
        console.log(result.text);

        refForm.current.reset();

        Swal.fire({
          title: "Mensaje enviado!",
          text: "Gracias por contactarnos.",
          icon: "success",
          confirmButtonText: "OK"
        })
      })
      .catch(error => {
        console.error(error);

        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });

  }
 /*  
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
  }; */

  return (
    <div>
      <div className="contact-container">
        <div className="form-container">
          <div className="titulo-contacto">
            <h2>Ponte en Contacto</h2>
          </div>
          <div>
            <form  ref={refForm} onSubmit={handleSubmitContacto} className="contact-form">
              <div>
                <label className="name_user" htmlFor="">Nombre:</label>
                <input
                  type="text"
                  id="name_user"
                  name="name_user"
                  placeholder=" Su nombre"
                   /*value={formData.name_user}
                 onChange={handleInputChange}*/
                />
              </div>
              <div>
                <label className="email_user" htmlFor="">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email_user"
                  placeholder="Su correo"
                  /*value={formData.email}
                  onChange={handleInputChange}*/
                />
              </div>
              <div>
                <label className="telefono_user" htmlFor="">Telefono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono_user"
                  placeholder="999-999999"
                  /*value={formData.telefono}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    const pattern = /[0-9-]/;
                    if (!pattern.test(e.key)) {
                      e.preventDefault();
                    }
                  }}*/
                />
              </div>
              <div>
                <label className="contacto" htmlFor="">Mensaje:</label>
                <textarea
                  id="mensaje"
                  name="contacto"
                  placeholder="Escribe tu mensaje aquí..."
                  cols="40"
                  rows="6"
                  /*value={formData.mensaje}
                  onChange={handleInputChange}*/
                ></textarea>
              </div>

                <button type="btn" >
                  Enviar
                </button>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
