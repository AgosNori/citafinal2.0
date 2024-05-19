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
