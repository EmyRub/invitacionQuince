import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import { FaChurch, FaGlassCheers, FaMapMarkerAlt } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function App() {

  return (
    <>
      <header className="flex flex-col justify-center items-center relative p-8 ">

        <img src="./main-frame.png" alt="Sofia" className="block max-w-[90%] mt-12" />
        <h1 className="text-center">XV años <span className="block">Danna Sofía</span></h1>

        <img src="./bg-flowerIzq.png" alt="Arreglo floral" width={480} height={476} className="absolute left-0 bottom-0 w-lg" />
        <img src="./bg-flowerIzq.png" alt="Arreglo floral" width={480} height={476} className="absolute left-0 top-0 w-lg rotate-90" />
        <img src="./bg-flowerIzq.png" alt="Arreglo floral" width={480} height={476} className="absolute -right-16 -top-5 w-lg rotate-180" />
      </header>

      <section className="template-section">

        <p className="text-center">
          Acompáñame a vivir un momento sin igual,
          <span className="block">donde mis sueños corren libres hacia lo ideal.</span>
          <span className="block">Hoy comienza un capítulo lleno de ilusión,</span>
          <span className="block">un pequeño futuro que abraza mi corazón.</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-12 lg:gap-4 lg:mt-12">

          <img src="./marco-floresRe.png" alt="Sofia" className="block lg:max-w-[90%] mt-12" />

          <div className="">
            <p className="text-center lg:text-left text-6xl! lg:text-8xl!">21</p>
            <p className="text-center lg:text-left text-7xl! lg:text-9xl! font-secundary">Febrero</p>
            <p className="text-center lg:text-left text-6xl! lg:text-8xl!">2026</p>
          </div>

        </div>

      </section>

      <section className="py-10 lg:py-14 bg-lila-dark">
        <h2 className="text-white mb-2 lg:mb-10">Faltan:</h2>

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
        <h2>Itinerario</h2>

        <FaChurch className="text-lila-dark text-6xl mx-auto" />
        <p className="text-center">Ceremonia</p>
        <p className="text-center">4:30 p.m.</p>

        <FaGlassCheers className="text-lila-dark text-6xl mx-auto mt-11" />
        <p className="text-center">Evento</p>
        <p className="text-center">5:30 p.m.</p>

        <FaMapMarkerAlt className="text-lila-dark text-5xl mx-auto mt-11" />
        <p className="text-center">Jardín de eventos Azarel</p>
        <a href="https://maps.app.goo.gl/9H9agY5havCT3Z7o7" className="block mx-auto mt-4 max-w-2/3 md:max-w-80 text-2xl lg:text-4xl">Ver ubicación</a>
      </section>

      <section className="template-section">
        <h2>Galería</h2>

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
        </Swiper>
      </section>
    </>
  )
}

export default App
