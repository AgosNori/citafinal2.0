import "./motivos.css";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
export const MotivoOracion = () => {
  /* este codigo se conecta  a la base de datos para recibir los pedidos */
  /*
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      nombre: "",
      email: "",
      telefono: "",
      pedido: "",
    });
  
    const [errors, setErrors] = useState([]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleEnviar = async () => {
      try {
        if (!formData.nombre || !formData.email || !formData.telefono) {
          Swal.fire({
            icon: "error",
            title: "Error de validación",
            text: "Por favor complete todos los campos, son obligatorios.",
          });
          return;
        }
        const response = await fetch("http://localhost:3500/motivos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
            icon: "success",
            title: "Mensaje enviado",
            text: "Tu motivo deoración ha sido enviado correctamente.",
          });
          navigate("/");
        } else {
          const data = await response.json();
          setErrors(data.errors || []);
        }
      } catch (error) {
        console.error("Error al enviar el mensaje", error);
      }
    };*/
  const refForm = useRef();

  const handleSubmitMotivos = (event) => {
    event.preventDefault();

    const serviceIdMotivos = 'service_f83zyjj';
    const templateIdMotivos = 'template_73di0lh';
    const apiKey = 'GAXjvuQsYAV_fuH47';

    emailjs.sendForm(serviceIdMotivos, templateIdMotivos, refForm.current, apiKey)
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

  return (
    <div>
      <div className="contact-container">
        {/*  {errors.length > 0 && (
          <ul className="error-list">
            {errors.map((error, index) => (
              <li key={index} className="error-item">
                {error.msg}
              </li>
            ))}
          </ul>
        )} */}
        <div className="text-container">
          <div className="text-container">
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
          <form ref={refForm} onSubmit={handleSubmitMotivos} action="" className="contact-form">
            <fieldset>
              <label className="name" htmlFor="">Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Su nombre"
              /*  onChange={handleInputChange} */
              />
            </fieldset>
            <fieldset>
              <label className="email" htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Su correo"
              /*  onChange={handleInputChange} */
              />
            </fieldset>
            <fieldset>
              <label className="telefono" htmlFor="">Teléfono:</label>
              <input
                type="tel"
                name="telefono"
                placeholder="999-999999"
              /*  onChange={handleInputChange}
               onKeyPress={(e) => {
                 const pattern = /[0-9-]/;
                 if (!pattern.test(e.key)) {
                   e.preventDefault();
                 }
               }} */
              />
            </fieldset>
            <fieldset>
              <label className="pedido" htmlFor="">Mensaje:</label>
              <textarea
                id="pedido"
                name="pedido"
                placeholder="Escribe tu mensaje aquí..."
                cols="40"
                rows="6"
              /*  onChange={handleInputChange} */
              ></textarea>
            </fieldset>
          
              <button type="btn" >
                Enviar
              </button>
       
          </form>
        </div>
      </div>
    </div>
  );
}

export default MotivoOracion;