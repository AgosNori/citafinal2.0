import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contacto.css"; // Importa los estilos CSS
import Swal from "sweetalert2";

function Contacto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name_user: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEnviar = async (e) => {
    e.preventDefault();
    try {
      if (!formData.name_user || !formData.email || !formData.telefono) {
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
        body: JSON.stringify(formData),
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
        setErrors(data.errors || []);
      }
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
    }
  };

  return (
    <div>
      <div className="contact-container">
        {/* <div className="image-container">
          <img src="public/img/imagenes/bandas1.jpg"></img>
        </div */}
        {errors.length > 0 && (
          <ul className="error-list">
            {errors.map((error, index) => (
              <li key={index} className="error-item">
                {error.msg}
              </li>
            ))}
          </ul>
        )}

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
                  name="name_user"
                  placeholder=" Su nombre"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Su correo"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="telefono">Telefono:</label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="999-999999"
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
