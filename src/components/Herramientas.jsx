import useCloudinary from "@/hooks/useCloudinary";
import useEditor from "@/hooks/useEditor";
import { useRef, useState } from "react";
import { IconBlur, IconGris, IconRecortar, IconsAjustar, IconsAvatar } from "./Icons";
import RangoDeEfectos from "./RangoDeEfectos";

export default function Herramientas() {
  
    const {filtroGris, filtroBlur, filtroSacarFondo, filtroSize, filtroAvatar} = useCloudinary()
    const {datosDeImagen, cambiarProcesoDeImagen, cambiarImagenModificada, blurId, largo, alto } = useEditor()
    const [accion, setAccion] = useState('')

    const handlerGris = () => {
     cambiarProcesoDeImagen(true)

     const imagenEditada = filtroGris(datosDeImagen)
     cambiarImagenModificada(imagenEditada)
    }

    const handlerSacarFondo = () => {
      cambiarProcesoDeImagen(true)  
      const imagenEditada = filtroSacarFondo(datosDeImagen)
      cambiarImagenModificada(imagenEditada)
    }

    const handlerAvatar = () => {
        cambiarProcesoDeImagen(true)  
        const imagenEditada = filtroAvatar(datosDeImagen, largo, alto)
        cambiarImagenModificada(imagenEditada)
    }
    const handlerSize = () =>{
      if(largo === 0 || alto === 0){
        return false
      }
      cambiarProcesoDeImagen(true)
      const imagenEditada = filtroSize(datosDeImagen, largo, alto)
      cambiarImagenModificada(imagenEditada)
    }

    const handlerBlur = () => {
      cambiarProcesoDeImagen(true)
      const imagenEditada = filtroBlur(datosDeImagen, blurId);
      cambiarImagenModificada(imagenEditada)
    }

    const herramientas = [
        {
          id:1,
          icons: <IconRecortar />,
          action: handlerSacarFondo,
          name: 'Recortar'
        },
        {
          id:2,
          icons: <IconBlur />,
          action: handlerBlur,
          name: 'Blur'
        
        },
        {
          id:3,
          icons: <IconGris />,
          action: handlerGris,
          name: 'Gris'
        
        },
        {
          id:4,
          icons: <IconsAjustar />,
          action: handlerSize,
          name: 'Ajustar'
        },
        {
            id:5,
            icons: <IconsAvatar />,
            action: handlerAvatar,
            name: 'Avatar'
        }
      ]
      const handlerEfecto = (her)=>{
            her.action()
            setAccion(her.name)
      }
  return (
    <div className="flex w-full gap-4 justify-around">
        <div className="mx-auto flex space-y-4 flex-col justify-evenly pb-3">
            {herramientas.map(her=>{
            return(
                <>
                    <div className="h-10 w-10 flex justify-center items-center rounded-full hover:cursor-pointer bg-slate-300" key={her.id}>
                        <button className="h-fit w-fit" onClick={()=>{handlerEfecto(her)}}>{her.icons}</button>
                    </div>
                </>
                )
            })}
        </div>
        <div className="bg-slate-100 p-4 w-4/5 rounded-xl shadow">
            <RangoDeEfectos accion={accion} />
        </div>        
            
    </div>
  )
}
