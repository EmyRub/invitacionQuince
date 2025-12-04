
function App() {

  return (
    <>
      <header className="flex flex-col justify-center items-center relative p-8 ">


        <img src="./main-frame.png" alt="Sofia" className="block max-w-[90%] mt-12" />

        <h1 className="text-center">XV años</h1>
        <h1>Danna Sofía</h1>
        <img src="./bg-flowerIzq.png" alt="Arreglo floral" width={480} height={476} className="absolute left-0 bottom-0 w-lg" />
        <img src="./bg-flowerIzq.png" alt="Arreglo floral" width={480} height={476} className="absolute left-0 top-0 w-lg rotate-90" />
        <img src="./bg-flowerIzq.png" alt="Arreglo floral" width={480} height={476} className="absolute -right-16 -top-5 w-lg rotate-180" />
      </header>

      <section className="px-8 py-24 mx-auto max-w-11/12 lg:max-w-[1080px]">

        <p className="text-center">
          Acompáñame a vivir un momento sin igual,
          <span className="block">donde mis sueños corren libres hacia lo ideal.</span>
          <span className="block">Hoy comienza un capítulo lleno de ilusión,</span>
          <span className="block">un pequeño futuro que abraza mi corazón.</span>
        </p>

        <div className="grid grid-cols-[2fr_1fr] items-center gap-4">

        <img src="./marco-flores.png" alt="Sofia" className="block max-w-[90%] mt-12" />

          <div className="">
            <p className="text-7xl">21</p>
            <p className="text-8xl font-secundary">Febrero</p>
            <p className="text-7xl">2026</p>
          </div>

        </div>



      </section>
    </>
  )
}

export default App
