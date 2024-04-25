import React from 'react'
import { News } from "../News/News";
import new1 from "../../assets/spiderman.jpg";
import { news } from "../../scripts/script.js";


export const ContainerNews = () => {
  return (
    <div className='w-full h-full p-4 px-0 flex items-center flex-row justify-evenly border-b border-white'>

        <div className='w-2/5 h-2/4 p-4 border border-white rounded'>
            <News className='w-full flex flex-col justify-center items-center' img={new1} title="Marvel’s Spider-Man 2 " description='A lo largo de dos años de tráileres y avances, Insomniac Games ha ido anunciando y presentando las principales novedades de Marvel’s Spider-Man 2. Que si tiene un mapa el doble de grande que añade los distritos de Queens y Brooklyn (Coney Island incluida). Que si ahora podemos manejar a Peter y a Miles y cambiar entre ambos a lo GTA V (contando con un árbol de habilidades para cada uno, más un tercero en común).'/>
        </div>

        <div className='w-2/5 flex flex-col'>

            {
                news.map( news =>
                    <div className='w-full h-40 m-4 flex flex-row border border-white rounded' key={news.id}>
                        <img className='w-2/5 h-full' src={news.img} />
                        <div className="w-auto text-white text-justify pt-4 pb-4 pr-1 pl-1">
                            <h2 className='text-sm font-bold '>{news.title}</h2>
                            <p className='text-xs'>{news.description}</p>
                        </div>
                    </div>
                    
                )
            }
        </div>

    </div>
  )
}
