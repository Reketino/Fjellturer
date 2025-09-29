import Image from "next/image";



export default function Home() {
  return (
    
    <main className="flex flex-col items-center flex-1 p-4 pb-20 gap-6 sm:p-20">
        <div className="font-sans flex flex-col min-h-screen">
        <h1 className="mb-4 font-extrabold text-center text-4xl">Sykkylven Fjell og Turer</h1>
        <div className="w-full relative rounded-3xl overflow-hidden">
        <Image 
        src="/sykkylvenilufta.jpg" 
        alt="Oversikts bilde fra Sykkylven"
       width={1600}
       height={900}
        className="w-full h-[400px] sm:h-[600px] object-cover filter brightness-90 contrast-125 hover:brightness-110 transition duration-300" 
        priority
        />
       
        </div>
        <p className="font-bold text-center mb-2">
          Oppdag de spektakulære fjellene og turene i Sykkylven!.</p>   
   
   <div className="mt-6 flex flex-col items-center space-y-1">
  <span className="text-center text-lg font-medium">
    Eg veit ei bygd der inne
  </span>
  <span className="text-center text-lg font-medium">
    imellom fjell og fjord,
  </span>
  <span className="text-center text-lg font-medium">
    ho gøymer tusen minne,
  </span>
  <span className="text-center text-lg font-medium">
    dei kjæraste på jord.
  </span>
  <span className="text-center text-lg font-medium">
    Så mang ei bygd og mang
  </span>
  <span className="text-center text-lg font-medium">
    ei grend var vakker nok
  </span>
  <span className="text-center text-lg font-medium">
    og vide kjend,
  </span>
  <span className="text-center text-lg font-medium">
    men ei imellom hine
  </span>
  <span className="text-center text-lg font-medium">
    i minneglans vil skinne.
  </span>


  <span className="mt-4 text-center text-base italic font-light text-gray-600">
    — @Henrik Straumsheim
  </span>
</div>
 </div>
      </main> 
  );
}
