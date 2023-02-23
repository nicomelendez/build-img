import useCloudinary from "@/hooks/useCloudinary";
import useEditor from "@/hooks/useEditor";
import { useState } from "react";

export default function RangoDeEfectos({ accion }) {

    const { datosDeImagen, cambiarProcesoDeImagen, cambiarImagenModificada, largo, alto ,blurMedida, blurId, cambiarLargo, cambiarAlto, cambiarLetras, cambiarSizeLetras, letras, sizeLetra } = useEditor()
    const {filtroGris, filtroBlur, filtroSacarFondo, filtroSize, filtroAvatar, filtroPrimavera,filtroInvierno,filtroOtnio, filtroGif} = useCloudinary()
    
    const handlerGris = () => {
        cambiarProcesoDeImagen(true)
        const imagenEditada = filtroGris(datosDeImagen)
        cambiarImagenModificada(imagenEditada)
    }

    const handlerGif = () => {
        cambiarProcesoDeImagen(true)
        const imagenEditada = filtroGif(datosDeImagen)
        cambiarImagenModificada(imagenEditada)
    }

    const handlerPrimavera = () => {
        cambiarProcesoDeImagen(true)
        const imagenEditada = filtroPrimavera(datosDeImagen)
        cambiarImagenModificada(imagenEditada)
    }

    const handlerOtnio = () => {
        cambiarProcesoDeImagen(true)
        const imagenEditada = filtroOtnio(datosDeImagen)
        cambiarImagenModificada(imagenEditada)
    }

    const handlerInvierno = () => {
        cambiarProcesoDeImagen(true)
        const imagenEditada = filtroInvierno(datosDeImagen)
        cambiarImagenModificada(imagenEditada)
    }

    const handlerSacarFondo = () => {
        cambiarProcesoDeImagen(true)  
        const imagenEditada = filtroSacarFondo(datosDeImagen)
        cambiarImagenModificada(imagenEditada)
    }

    const handlerAvatar = () => {
        if(largo === 0 || alto === 0){
            return alert('Debe ingresar un tamaño')
            
            }
        if(letras && !sizeLetra){
            return alert('Debe elegir un tamaño de fuente')
        }
        cambiarProcesoDeImagen(true)  
        const imagenEditada = filtroAvatar(datosDeImagen, largo, alto, letras, sizeLetra)
        cambiarImagenModificada(imagenEditada)
    }
    const handlerSize = () =>{
        if(largo === 0 || alto === 0){
        return alert('Debe ingresar un tamaño')
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

    const estilosButton = 'mx-auto w-4/5 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 font-semibold rounded-lg text-white '
    const estilosContent = 'min-w-[200px] bg-slate-100 mx-auto p-4 w-4/5 rounded-xl shadow flex flex-col items-center space-y-5 sombra'
    const estiloItem = 'hover:underline hover:cursor-pointer'
    const estilosTitulos = 'text-center font-bold text-lg'
    
    if(accion === 'Blur'){
        return (
            <div className={estilosContent}>
                <p className={estilosTitulos}>Añadir blur</p>
                <div className="flex flex-col items-center justify-start space-y-2 my-5">
                    <label htmlFor="" className="text-black text-sm">Grado de blur <strong>{blurId}</strong></label>
                    <input className="" type='range' min='0' max='1000' onChange={blurMedida}/>
                    <button className={estilosButton} onClick={handlerBlur}>Aplicar</button>
                </div>
            </div>
        )
    }    
    if(accion === 'Avatar'){
        return (
            <div className={estilosContent}>
                <p className={estilosTitulos}>Crear un avatar</p>

                <p>Define las medidas</p>

                <div className="">
                    <label className="text-black">Largo</label>
                    <input className="w-full" onChange={cambiarLargo} type='number' />
                </div>
                <div>
                    <label className="text-black">Alto</label>
                    <input className="w-full" onChange={cambiarAlto} type='number' />
                </div>
                <div>
                    <label className="text-black">Texto - Opcional</label>
                    <input className="w-full" onChange={cambiarLetras} type='text' />
                </div>
                <div>
                    <label className="text-black">Tamaño de fuente</label>
                    <input className="w-full" onChange={cambiarSizeLetras} type='number' />
                </div>
                <button className={estilosButton} onClick={handlerAvatar}>Aplicar</button>
            </div>
        )
    }
    if(accion === 'Ajustar'){
        return (
            <div className={estilosContent}>
                <p className={estilosTitulos}>Modificar tamaño</p>
                <div>
                    <label className="text-black">Largo</label>
                    <input className="w-full" onChange={cambiarLargo} type='number' />
                </div>
                <div>
                    <label className="text-black">Alto</label>
                    <input className="w-full" onChange={cambiarAlto} type='number' />
                </div>
                <button className={estilosButton} onClick={handlerSize}>Aplicar</button>
            </div>
        )
    }
    if(accion === 'Recortar'){
        return (
            <div className={estilosContent}>
                <p className={estilosTitulos}>Recortar fondo</p>
                <button className={estilosButton} onClick={handlerSacarFondo}>Aplicar</button>
            </div>
        )
    }
    if(accion === 'Efectos'){
        return (
            <div className={estilosContent}>
                <p className={estilosTitulos}>Elige un efecto</p>
                <ul className="flex flex-row flex-wrap gap-5 lg:gap-0 lg:items-start justify-around items-center w-full lg:flex-col lg:space-y-5 pt-4 font-semibold">
                    <li><button className={estiloItem} onClick={handlerGris}>Gris</button></li>
                    <li><button className={estiloItem} onClick={handlerPrimavera}>Primavera</button></li>
                    <li><button className={estiloItem} onClick={handlerOtnio}>Otoño</button></li>
                    <li><button className={estiloItem} onClick={handlerInvierno}>Invierno</button></li>
                </ul>
           
            </div>
        )
    }
    else{
        return (
            <div className={estilosContent + ' justify-center'}>
                <p className="text-center ">Eliga un efecto para comenzar a modificar su imagen</p>
            </div>
        )
    }
}
