import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./Components/footer/Fotter";
import Home from "./Components/home/Home";
import CardNovedades from "./Components/Cards/CardNovedades";
import NavBorde from "./Components/NavBorde/NavBorde";
import Contacto from "./Components/contacto/Contacto";
import Galeria from "./Components/Galeria/Galeria";
import Matrimonios from "./Components/Matrimonios/Matrimonios";
import Ministerios from "./Components/Ministerios/MInisterios";
import Citakids from "./Components/Citakids/Citakids";
import Calendario from "./Components/Calendario/Calendario";
import Loader from "./Components/Loader/Loader";
import Musicos from "./Components/Musicos/Musicos";
import FooterMusic from "./Components/Musicos/FooterMusicos";
import Jovenes from "./Components/Jovenes/Jovenes";
import Campamento from "./Components/Campamentos/Campamento";
import Reuniones from "./Components/reuniones/Reunioines";
import Nosotros from "./Components/Pages/Nosotros/Nosotros";
import MotivoOracion from "./Components/MotivoOracion/MotivoOracion";
import Toast from "./Components/Toast/Toast";
import "./App.css";
//import Hombres from "./Components/Hombres/Hombres";
//import Mujeres from "./Components/Pages/Mujeres/Mujeres";
import SoyNuevo from "./Components/SoyNuevo/SoyNuevo";

import Mujeres from "./Components/Pages/Mujeres/Mujeres";

import Hombres from "./Components/Hombres/Hombres";
import Navbar from "./Components/Nav/Nav";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const contactoImages = [];
  // const hombresImages = ['public/img/imagenes/FOTOS EVANGELIZACION/hombres12.jpg',
  //'public/img/imagenes/FOTOS EVANGELIZACION/hombres3.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres22.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres15.jpg'];
  const jovenesImages = [
    "public/img/imagenes/App1.jpg",
    "public/img/imagenes/App2.jpg",
    "public/img/imagenes/Ministerios4.jpg",
    "public/img/imagenes/App3.jpg",
    "public/img/imagenes/App4.jpg",
    "public/img/imagenes/App5.jpg",
  ];
  const novedadesImage = [];
  const citakidsImages = [
    "public/img/imagenes/App6.jpg",
    "public/img/imagenes/App7.jpg",
    "public/img/imagenes/App8.jpg",
    "public/img/imagenes/App9.jpg",
    "public/img/imagenes/App1.jpg",
    "public/img/imagenes/App2.jpg",
    "public/img/imagenes/App10.jpg",
    "public/img/imagenes/App11.jpg",
    "public/img/imagenes/Ministerios4.jpg",
  ];
  const reunionesImages = [];
  const campamentoImages = [
    "public/img/Fotos Campamento/Campa1.jpg",
    "public/img/Fotos Campamento/Campa2.jpg",
    "public/img/Fotos Campamento/Campa3.jpg",
    "public/img/Fotos Campamento/Campa4.jpg",
    "public/img/Fotos Campamento/Pastor.jpg",
    "public/img/Fotos Campamento/Campa5.jpg",
    "public/img/Fotos Campamento/Campa6.jpg",
    "public/img/Fotos Campamento/Campa7.jpg",
    "public/img/Fotos Campamento/Campa8.jpg",

  ];
  const soyNuevoImages = [];
  const matrimoniosImages = [
    "public/img/imagenes/Matri1.jpg",
    "public/img/imagenes/imagen2.jpg",
  ];
  const ministeriosImages = [];
  const nosotrosImages = [];
  const musicosImages = [

  ];
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>{" "}
                  <Navbar />  
                  <NavBorde />
                  {/* <Toast /> */}
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contacto"
              element={
                <>
                  {" "}
                  <Navbar />
                  <Contacto />
                  <Footer/>
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Navbar /> <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contacto"
              element={
                <>
                  {" "}
                  <Navbar />
                  <Contacto />
                </>
              }
            />

            <Route
              path="/novedades"
              element={
                <>
                  {" "}
                  <Navbar />
                  <CardNovedades images={novedadesImage} /> <Footer />
                </>
              }
            />
            <Route
              path="/ministerios"
              element={
                <>
                  {" "}
                  <Navbar />
                  <NavBorde /> <Ministerios images={ministeriosImages} />{" "}
                  <FooterMusic />{" "}
                  <Toast />
                </>
              }
            />
            <Route
              path="/matrimonios"
              element={
                <>
                  <Navbar /> <NavBorde/><Matrimonios images={matrimoniosImages} />
                  <Footer />{" "}
                </>
              }
            />
            {/* <Route path="/hombres" element={<> <Navbar /><Hombres images={hombresImages} /><Footer /> </>} /> */}
            <Route
              path="/citakids"
              element={
                <>
                  <Navbar />
                  <NavBorde />
                  <Citakids images={citakidsImages} /> <FooterMusic />
                </>
              }
            />
            <Route
              path="/musicos"
              element={
                <>
                  <Navbar />
                  <Musicos images={musicosImages} /> <FooterMusic />
                </>
              }
            ></Route>
            <Route
              path="/nosotros"
              element={
                <>
                  <Navbar />
                  <Nosotros images={nosotrosImages} /> <Toast /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/calendario"
              element={
                <>
                  <Navbar />
                  <Calendario />
                  <Footer />
                  <Toast />{" "}
                </>
              }
            />
            <Route
              path="/soynuevo"
              element={
                <>
                  {" "}
                  <Navbar />
                  <NavBorde />
                  <SoyNuevo images={soyNuevoImages} />
                  <FooterMusic />{" "}
                </>
              }
            />
            <Route
              path="/galeria"
              element={
                <>
                  <Navbar />
                  <Galeria />
                  <Footer />
                  <Toast />{" "}
                </>
              }
            />
            <Route
              path="/motivos"
              element={
                <>  <Navbar /> <MotivoOracion /><Footer /> {" "} </>
              }
            />
            <Route
              path="/jovenes"
              element={
                <>
                  {" "}
                  <Navbar />
                  <Jovenes images={jovenesImages} />
                  <Footer />
                  <Toast />{" "}
                </>
              }
            />
            <Route
              path="/campamento"
              element={
                <>
                  <Navbar />
                  <Campamento campamentoImages={campamentoImages} />
                  <FooterMusic />
                  <Toast />
                </>
              }
            />
            <Route
              path="/reuniones"
              element={
                <>
                  {" "}
                  <Navbar />
                  <Reuniones reunionesImagesImages={reunionesImages} />
                  <Footer />
                  <Toast />
                </>
              }
            />
            <Route
              path="/mujeres"
              element={
                <>
                  {" "}
                  <Navbar />
                  <Mujeres />
                  <Footer />
                  <Toast />
                </>
              }
            />
            <Route
              path="/hombres"
              element={
                <>
                  {" "}
                  <Navbar />
                  <NavBorde />
                  <Hombres />
                  <Footer />
                  <Toast />
                </>
              }
            />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
export default App;