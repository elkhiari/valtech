import React from "react";
import { BsCalendarDate } from "react-icons/bs";

function History() {
  const timeline = [
    {
      date: "1986",
      title: "Création de Valtech",
      paragraph:
        "Création de Valtech, anciennement Valmont Maroc. L'entreprise a démarré son activité avec l'importation, l'installation et la mise en œuvre de centre-pivots de la marque Valmont, leader mondial de la grande irrigation.",
    },
    {
      date: "1991",
      title: "Diversification dans les parcours de golf",
      paragraph:
        "Valtech s'est diversifié dans la réalisation clés en main de parcours de golf, incluant l'équipement en matériel d’entretien, mobilier de parcours et voiturettes.",
    },
    {
      date: "Années 1990",
      title:
        "Distribution de produits d’entretien pour terrains de golf et espaces verts",
      paragraph:
        "En parallèle, Valtech a développé une activité de distribution d’une gamme complète de produits d’entretien pour terrains de golf et espaces verts, notamment les semences de gazon et les engrais spécifiques, en partenariat avec des marques renommées.",
    },
    {
      date: "1994",
      title: "Négoce de géosynthétiques et distribution de semences agricoles",
      paragraph:
        "Valtech a lancé une activité de négoce de géosynthétiques et de fourniture et pose de géomembranes d’étanchéité. Au cours de la même année, Valtech a acquis la distribution exclusive des semences agricoles PIONEER (leader mondial) et a mis en place un réseau de distributeurs à travers l’ensemble des régions agricoles du Maroc.",
    },
    {
      date: "Aujourd'hui",
      title: "Compétences de l'équipe",
      paragraph:
        "Pour mener à bien l'ensemble de son activité, Valtech dispose de 148 collaborateurs permanents, dont 22 ingénieurs qui supervisent une équipe de techniciens spécialisés et ouvriers qualifiés ayant une expérience de plus de 15 ans.",
    },
    {
      date: "Jusqu'à fin 2015",
      title: "Parcours de golf",
      paragraph:
        "Grâce à la compétence de ses équipes et la collaboration de ses partenaires, Valtech a réalisé une vingtaine de parcours de golf.",
    },
    {
      date: "Jusqu'à fin 2015",
      title: "Terrains de sport",
      paragraph:
        "Valtech a réalisé plus de 45 terrains de sport, principalement de football en gazon naturel et synthétique.",
    },
    {
      date: "Jusqu'à fin 2015",
      title: "Stations de traitement et d’épuration (STEP)",
      paragraph:
        "Valtech a réalisé plus de 12 stations de traitement et d’épuration (STEP).",
    },
    {
      date: "Jusqu'à fin 2015",
      title: "Centres d’enfouissement techniques (CET)",
      paragraph:
        "Valtech a réalisé 6 centres d’enfouissement techniques (CET).",
    },
    {
      date: "Jusqu'à fin 2015",
      title: "Autres réalisations",
      paragraph:
        "Valtech a également réalisé divers autres terrains de sport (polo, équitation, etc.) et projets d’espaces verts importants (hôtels, resorts, etc.).",
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 max-w-4xl mx-auto   mb-10">
      {timeline.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            {item.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 e">
            {item.title}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">
            {item.paragraph}
          </p>
        </li>
      ))}
      {/* <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
          1986
        </time>
        <h3 className="text-lg font-semibold text-gray-900 e">
          Création de Valtech
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 ">
          Création de Valtech, anciennement Valmont Maroc. L'entreprise a
          démarré son activité avec l'importation, l'installation et la mise en
          œuvre de centre-pivots de la marque Valmont, leader mondial de la
          grande irrigation.
        </p>
      </li> */}
    </ol>
  );
  return (
    <div className=" p-10 min-h-[100vh] flex flex-col justify-center">
      <div className="h-[100vh]">
        <div className="w-full mb-2 flex items-center space-x-2">
          {/* <BsCalendarDate className="text-xl text-black" /> */}
          <img src="/logo.svg" alt="valtech" className="w-14  rounded-full" />
          <h2 className="text-xl font-bold text-black">
            1986 :{" "}
            <span className="text-gray-500 text-sm font-medium">
              Création de la société VALTECH
            </span>
          </h2>
        </div>
        <div className="border-l-2 mx-7 border-green-600  w-full px-10">
          <div className="bg-slate-200 p-5 rounded-lg">
            <h3>Création de Valtech, anciennement Valmont Maroc.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
