import {  useState } from "react";
import { IconBlur, IconEfecto, IconRecortar, IconsAjustar, IconsAvatar } from "./Icons";
import RangoDeEfectos from "./RangoDeEfectos";

export default function Herramientas() {
  
    const [accion, setAccion] = useState('')


    const herramientas = [
        {
          id:1,
          icons: <IconRecortar />,
          name: 'Recortar'
        },
        {
          id:2,
          icons: <IconBlur />,
          name: 'Blur'
        
        },
        {
          id:3,
          icons: <IconEfecto />,
          name: 'Efectos'
        
        },
        {
          id:4,
          icons: <IconsAjustar />,
          name: 'Ajustar'
        },
        {
            id:5,
            icons: <IconsAvatar />,
            name: 'Avatar'
        }
      ]

      const handlerEfecto = (her)=>{
            setAccion(her.name)
      }
  return (
    <div className="flex flex-col lg:flex-row  w-full gap-4 justify-around">
        <div className="mx-auto w-full flex flex-row flex-wrap lg:space-y-4 lg:flex-col justify-evenly pb-3">
            {herramientas.map(her=>{
            return(
                    <div className="bg-slate-300 w-12 h-12 text-[10px] lg:w-14 lg:h-14 lg:text-xs flex flex-col items-center justify-center hover:cursor-pointer rounded-full" onClick={()=>{handlerEfecto(her)}} key={her.id}>
                        <div className="">
                            <span>{her.icons}</span>
                        </div>
                        <div>
                            <strong>{her.name}</strong>
                        </div>
                    </div>
                )
            })}
        </div>
     
        <RangoDeEfectos accion={accion} />
            
    </div>
  )
}
