import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function MusicGate() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useState(false);

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.4;
    audioRef.current.play();
    setPlaying(true);
    setOpen(false);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      {/* PANTALLA DE PERMISO */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl mb-4">¿Deseas entrar con música?</h2>

          <button
            onClick={startMusic}
            className="px-8 py-3 bg-lila rounded-full shadow text-lila-dark font-bold"
          >
            Activar música 🎵
          </button>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 underline"
          >
            Entrar sin música
          </button>
        </div>
      )}

      {/* BOTÓN FLOTANTE */}
      {!open && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-50 bg-lila-dark text-white rounded-full p-4 shadow-lg"
          title={playing ? "Pausar música" : "Reproducir música"}
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>
      )}

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="./indila.mp4" type="audio/mp4" />
      </audio>
    </>
  );
}
