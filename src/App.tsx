import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import { FaChurch, FaGlassCheers, FaMapMarkerAlt } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useFadeIn } from "./hooks/useFadeIn";


import MusicGate from "./MusicGate.tsx";

function App() {
  useFadeIn()
  // const [scrollY, setScrollY] = useState(0)

  /**Cortina flores */
  // useEffect(() => {
  //   const onScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);


  // Cuántos píxeles tarda en abrirse
  // const maxScroll = 300;
  // const progress = Math.min(scrollY / maxScroll, 1);


  return (
    <>
      <MusicGate />
      {/* <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">

        IZQUIERDA 
        <picture>
          <source
            srcSet="./bg-flowerIzq.webp"
            type="image/webp"
            style={{
              transform: `translateX(-${progress * 100}%)`,
              filter: `blur(${(1 - progress) * .7}px)`,
              opacity: 1 - progress * 0.1
            }}
            className="absolute left-0 top-0 h-full w-full lg:w-3/4 object-cover object-bottom-right transition-transform duration-75"
          />
          <img
            width={480}
            height={476}
            loading="lazy"
            alt="Arreglo floral"
            src="./bg-flowerIzq.png"
            style={{
              transform: `translateX(-${progress * 100}%)`,
              filter: `blur(${(1 - progress) * .7}px)`,
              opacity: 1 - progress * 0.1
            }}
            className="absolute left-0 top-0 h-full w-full lg:w-3/4 object-cover object-bottom-right transition-transform duration-75"
          />
        </picture>*/}

      {/* DERECHA 
        <picture>
          <source
            srcSet="./bg-flowerIzq.webp"
            type="image/webp"
            style={{
              transform: `translateX(-${progress * 100}%)`,
              filter: `blur(${(1 - progress) * .8}px)`,
              opacity: 1 - progress * 0.1
            }}
            className="absolute right-0 top-0 h-full w-full lg:w-3/4 object-cover object-bottom-right rotate-180 transition-transform duration-75"
          />
          <img
            width={480}
            height={476}
            loading="lazy"
            alt="Arreglo floral"
            src="./bg-flowerIzq.png"
            style={{
              transform: `translateX(-${progress * 100}%)`,
              filter: `blur(${(1 - progress) * .8}px)`,
              opacity: 1 - progress * 0.1
            }}
            className="absolute right-0 top-0 h-full w-full lg:w-3/4 object-cover object-bottom-right rotate-180 transition-transform duration-75"
          />
        </picture>

      </div>*/}

      <div className="min-h-screen lg:min-h-[180vh]">

        {/* ESPACIO BUFFER PARA SCROLL INICIAL */}
        <div className="h-[500px]">

          <header className="flex flex-col justify-center gap-12 items-center min-h-screen">

            <picture>
              <source srcSet="./main-frame.webp" type="image/webp" />
              <img src="./main-frame.png" alt="Sofia" className="block mx-auto w-full lg:max-w-[80%]" width={1500} height={1320} />
            </picture>

            <h1 className="mt-6 fade-in">XV años <span className="block">Danna Sofía</span></h1>

          </header>

        </div>
      </div>

      <section className="template-section mt-16">

        <p className="fade-in">
          Acompáñame a vivir un momento sin igual,
          <span className="block">donde mis sueños corren libres hacia lo ideal.</span>
          <span className="block">Hoy comienza un capítulo lleno de ilusión,</span>
          <span className="block">un pequeño futuro que abraza mi corazón.</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-12 lg:gap-4 lg:mt-12">

          <picture>
            <source srcSet="./marco-flores.webp" type="image/webp" />
            <img src="./marco-flores.png" alt="Sofia" className="fade-in block lg:max-w-[90%] mt-12" width={639} height={720} />
          </picture>

          <div className="fade-in">
            <p className="lg:text-left! text-6xl! lg:text-8xl!">21</p>
            <p className="lg:text-left! text-7xl! lg:text-9xl! font-secundary">Febrero</p>
            <p className="lg:text-left! text-6xl! lg:text-8xl!">2026</p>
            <picture>
              <source srcSet="./calendario.webp" type="image/webp" />
              <img src="./calendario.png" alt="Calendario" className="fade-in block lg:max-w-[90%] mt-12" width={550} height={450} />
            </picture>
          </div>

        </div>

      </section>

      <section className="py-10 lg:py-14 bg-lila-dark">
        <h2 className="fade-in text-white mb-2 lg:mb-10">Faltan:</h2>

        <span className="max-w-11/12 md:max-w-xl mx-auto flex justify-center">
          <FlipClockCountdown
            className="flip-responsive"
            to="2026-02-21T00:00:00-06:00"
            labels={['Días', 'Horas', 'Minutos', 'Segundos']}
            digitBlockStyle={{
              width: 60,
              height: 80,
              color: '#fff',
              fontSize: '28px',
              borderRadius: '8px',
              background: '#b1aaebcf',
            }}
            labelStyle={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          />
        </span>
      </section>

      <section className="template-section">
        <h2 className="fade-in">Itinerario</h2>

        <div className="fade-in">
          <FaChurch className="text-lila-dark text-6xl mx-auto" />
          <p>Ceremonia</p>
          <p>4:30 p.m.</p>
        </div>

        <div className="fade-in">
          <FaGlassCheers className="text-lila-dark text-6xl mx-auto mt-11" />
          <p>Evento</p>
          <p>5:30 p.m.</p>
        </div>

        <div className="fade-in">
          <FaMapMarkerAlt className="text-lila-dark text-5xl mx-auto mt-11" />
          <p>Jardín de eventos Azarel</p>
          <a href="https://maps.app.goo.gl/9H9agY5havCT3Z7o7" className="block mx-auto mt-4 max-w-2/3 md:max-w-80 text-2xl lg:text-4xl">Ver ubicación</a>
        </div>

      </section>

      <section id="vestimenta" className="py-10 lg:py-18 bg-lila-dark text-white">
        <div className="mx-auto max-w-11/12 lg:max-w-5xl">
          <h2 className="fade-in">Código de vestimenta</h2>
          <div className="flex justify-center gap-4 my-8 fade-in">
             <img src="./dresscode.png" alt="dressCode" className="block mx-auto" width={150} height={25} />      
          </div>
          <p className="text-lila fade-in">FORMAL</p>

          <h3 className="mt-20 fade-in">Sugerencia</h3>
          <p className="text-2xl lg:text-4xl! max-w-4xl mx-auto text-lila fade-in">Amablemente, el color lila únicamente para la quinceañera</p>
        </div>
      </section>

      <section className="template-section">
        <h2 className="fade-in">Galería</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          <SwiperSlide> <img src="./galeria/01.JPG" alt="galeria" /></SwiperSlide>
          <SwiperSlide><img src="./galeria/02.JPG" alt="galeria" /></SwiperSlide>
          <SwiperSlide><img src="./galeria/03.JPG" alt="galeria" /></SwiperSlide>
          <SwiperSlide><img src="./galeria/04.JPG" alt="galeria" /></SwiperSlide>
          <SwiperSlide><img src="./galeria/05.JPG" alt="galeria" /></SwiperSlide>
          <SwiperSlide><img src="./galeria/06.jpg" alt="galeria" /></SwiperSlide>
          <SwiperSlide><img src="./galeria/07.jpg" alt="galeria" /></SwiperSlide>

        </Swiper>
      </section>

      <section id="padrinos" className="py-10 lg:py-16 lg:mt-12">
        <div className="mx-auto max-w-11/12 lg:max-w-5xl">
          <h2 className="fade-in text-white! text-base/5 mb-10!">Te esperamos en compañía de...</h2>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-6">

            <figure className="fade-in flex-1/4">

              <picture>
                <source srcSet="./marco-padres.webp" type="image/webp" />
                <img src="./marco-padres.png" alt="Padres" className="block mx-auto mb-4" width={400} height={450} />
              </picture>

              <figcaption className="text-white text-4xl">Mis Padres</figcaption>
            </figure>

            <figure className="fade-in flex-11/12 md:flex-1/3 lg:flex-1/4">
              <picture>
                <source srcSet="./marco-hermanita.webp" type="image/webp" />
                <img src="./marco-hermanita.png" alt="hermanita" className="block mx-auto mb-4" width={400} height={450} />
              </picture>

              <figcaption className="text-white text-4xl">Mi hermanita</figcaption>
            </figure>

            <figure className="fade-in flex-11/12 md:flex-1/3 lg:flex-1/4">
              <picture>
                <source srcSet="./marco-abuela.webp" type="image/webp" />
                <img src="./marco-abuela.png" alt="abuela" className="block mx-auto mb-4" width={400} height={450} />
              </picture>
              <figcaption className="text-white text-4xl">Mi abuela</figcaption>
            </figure>

            <picture className="fade-in flex-11/12 md:flex-1/3 lg:flex-1/4">
              <source srcSet="./marco-padrinos.webp" type="image/webp" />
              <img src="./marco-padrinos.png" alt="padrinos" className="block mx-auto mb-4" width={400} height={450} />
            </picture>

            <picture className="fade-in flex-11/12 md:flex-1/3 lg:flex-1/4">
              <source srcSet="./marco-padrino.webp" type="image/webp" />
              <img src="./marco-padrino.png" alt="padrino" className="block mx-auto mb-4" width={400} height={450} />
            </picture>
          </div>
          <p className="center text-4xl lg:text-xl text-white fade-in">Mis padrinos</p>

          <a
            target="_blanc"
            className="fade-in block mx-auto mt-12 lg:mt-16 text-2xl lg:text-4xl"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfI0WBrpBbwDtsmnOTd4rizEUuFZ1oUTjFcxOsHVQwoiJxIOQ/viewform"
          >
            Confirmar asistencia
          </a>

        </div>
      </section>

      <section className="template-section ">
        <h2 className="fade-in">¡No olvides compartirnos tus fotos!</h2>

        <picture className="block my-10 fade-in">
          <source srcSet="./QR.webp" type="image/webp" />
          <img src="./QR.jpeg" alt="QR" className="block mx-auto" width={500} height={423} />
        </picture>

        <a
          target="_blanc"
          className="fade-in block mx-auto mt-12 lg:mt-16 text-2xl lg:text-4xl"
          href="https://photos.google.com/share/AF1QipMMmoFRRD33Mo3wJI3jfmNGe3H8TiGFfeX17lgjYaBho6uzaA6yPSjxJrTpyP6O2g?key=VmZfcGZVVE05OFdrWldEWW5vZHpfQ0ZYZ2lOeV9B"
        >
          <span className="font-primary!">¡</span> ó accede a este link <span className="font-primary!">!</span>
        </a>
      </section>
    </>
  )
}

export default App
