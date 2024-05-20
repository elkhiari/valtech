import Travaux from "./Travaux";

export default function Hero() {
  return (
    <div className="h-default  flex justify-center items-center *:duration-500 main">
      <div className="section group flex place-content-center place-items-center w-full h-default overflow-hidden text-white relative">
        <video
          className="top-0 absolute w-screen h-default -z-10 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>
        <div className="p-4 z-10 w-full flex flex-col space-y-10 items-center">
          <h1 className=" text-3xl font-bold group-hover:text-[100px]">
            Travaux
          </h1>
          <Travaux />
        </div>
      </div>
      <div className="section text-white overflow-hidden w-full h-default relative flex place-content-center place-items-center  bg-[url('https://www.valtech.ma/images/valtech/background-blue.jpg')]">
        <div className="p-4 z-10 ">
          <h1 className="text-3xl font-bold">Produits</h1>
        </div>
        <h1 className="text-3xl font-bold">Produits</h1>
      </div>
    </div>
  );
}
