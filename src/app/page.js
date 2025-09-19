import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      
      <main className="flex flex-col items-center flex-1 p-6 pb-20 gap-6 sm:p-20">
        <h1 className="mb-2 font-extrabold text-4xl">Sykkylven Fjell og Turer</h1>
        <img 
        src="/sykkylvenilufta.jpg" 
        alt="Oversikts bilde fra Sykkylven" 
        className="rounded-full filter brightness-90 contrast-125 hover:brightness-110 transition duration-300 mb-2" />
        <p className="font-bold ">
          Oppdag de spektakulære fjellene og turene i Sykkylven!, med beskrivelse.</p>
      </main>
      
    </div>
  );
}
