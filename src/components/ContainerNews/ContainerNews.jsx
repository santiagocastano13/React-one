import React from 'react'
import { News } from "../News/News";
import new1 from "../../assets/noticia-sololeveling.jpeg";
import { news } from "../../scripts/script.js";


export const ContainerNews = () => {
  return (
    <div className='w-full h-full p-4 px-0 flex items-center flex-row justify-evenly'>

        <div className='w-2/5 h-2/4'>
            <News className='w-full p flex flex-col justify-center items-center' img={new1} title="titulo noticia 1" description="Durante La Mole 2024, el evento de cómics más grande de México, CrunchyRoll presentó al talento de doblaje detrás de la producción del nuevo anime en tendencia Solo Leveling. En entrevista con CNN nos cuentan su experiencia como actores de doblaje y algunos aspectos técnicos de la profesión que quizás no sabías." />
        </div>

        <div className='w-2/5 flex flex-col'>

            {
                news.map( news =>
                    <div className='w-full h-40 m-4 flex flex-row' key={news.id}>
                        <img className='w-2/5 h-full' src={news.img} />
                        <div className="w-2/4 text-xs bg-gray-600">
                            <p>{news.date}</p>
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </div>
                    </div>
                    
                )
            }
        </div>

    </div>
  )
}
