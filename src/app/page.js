import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      
      <main className="flex flex-col items-center flex-1 p-8 pb-20 gap-8 sm:p-20">
        <h1 className="mb-2">Sykkylven Fjell og Turer</h1>
        <img src="/Mann på topp.jpg" alt="Mann på topp" className="rounded-full filter brightness-90 contrast-125 hover:brightness-110 transition duration-300" />
        <p>Oppdag de spektakulære fjellene og turene i Sykkylven!, med beskrivelse.</p>
      </main>
      
    </div>
  );
}
