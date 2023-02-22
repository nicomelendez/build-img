import useCloudinary from "@/hooks/useCloudinary";
import useEditor from "@/hooks/useEditor"
import { useEffect, useRef, useState } from "react"
import 'two-up-element/dist/two-up.mjs'
import 'two-up-element/lib/styles.css';
import Cargando from "./Cargando"
import { IconRecortar } from "./Icons";

function ImageEditor() {
    
    const { imageOriginal, imageModificada, datosDeImagen, processingImage, cambiarProcesoDeImagen, cambiarImagenModificada } = useEditor()
    const {filtroGris, filtroBlur, filtroSacarFondo, filtroSize} = useCloudinary()

    const rango = useRef()
    const [blurId, setBlur] = useState(0);

    const handlerGris = () => {
      cambiarProcesoDeImagen(true)
      const imagenEditada = filtroGris(datosDeImagen.public_id)
      cambiarImagenModificada(imagenEditada)
    }

    const handlerSacarFondo = () => {
      cambiarProcesoDeImagen(true)  
    const imagenEditada = filtroSacarFondo(datosDeImagen.public_id)
    cambiarImagenModificada(imagenEditada)
    }
    
    const handlerSize = () =>{
      cambiarProcesoDeImagen(true)
     const imagenEditada = filtroSize(datosDeImagen.public_id, 700, 200)
     cambiarImagenModificada(imagenEditada)
    }

    const handlerBlur = () => {
    cambiarProcesoDeImagen(true)
    const imagenEditada = filtroBlur(datosDeImagen.public_id, blurId);
    cambiarImagenModificada(imagenEditada)
    }

    const herramientas = [
      {
        id:1,
        name: <IconRecortar />,
      action: handlerSacarFondo
      
      },
      {
        id:2,
        name: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9" />
      </svg>,
       action: handlerBlur
      
      },
      {
        id:3,
        name: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>,
      action: handlerGris
      
      },
      {
        id:4,
        name: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>,
      action: handlerSize
      
      }
    ]
    const blurMedida = (event) =>{
      setBlur(event.target.value)
    }

    useEffect(() => {
        let intervalId
        let tries = 0
        
        const loadImage = () => {
            const img = new Image()
            img.src = imageModificada
            img.onload = () => {
                cambiarProcesoDeImagen(false)
                clearInterval(intervalId)
            }
        }

        if (processingImage) {
            loadImage()
            intervalId = setInterval(() => {
                tries++
                if (tries < 10) {
                    loadImage()
                } else {
                    clearInterval(intervalId)
                }
            }, 500)
        }
    
        return () => {
            clearInterval(intervalId)
        }
    }, [imageModificada, processingImage, cambiarProcesoDeImagen])

   
      return (
        <>
        {imageOriginal !== null 
        ? (
        <div className="w-full flex flex-col flex-wrap">
           <p className="text-center text-white font-bold my-5">Comienza a modificar tu imagen</p>
           <div className="w-full flex items-start flex-col">
             <div className="w-full sm:w-4/5 mx-auto flex justify-evenly pb-3">
              {herramientas.map(her=>{
               return(<div className="h-10 w-10 flex justify-center items-center rounded-full hover:cursor-pointer bg-slate-300" key={her.id}>
                   <button className="h-fit w-fit" onClick={her.action ? her.action : ()=>{}}>{her.name}</button>
               </div>)
              })}
             </div>
             <div className="flex flex-col items-center justify-center mx-auto space-y-2 mb-5">
              <label htmlFor="" className="text-white">Elegir grado de blur </label>
              <input className="" type='range' ref={rango} min='0' max='1000' onChange={blurMedida}/>
             </div>
       
              {processingImage && 
              (<div className="flex flex-col justify-center items-center w-full">
                <p className="text-center text-white font-bold mb-5">Procesando imagen...</p>
              </div>)}
      

             <div className='mx-auto lg:max-w-lg'>
               <two-up >
                   <img className="lg:max-h-[500px]" src={imageOriginal} alt="Imagen original subida por el usuario" />
                   {processingImage 
                       ? (
                           <div className="flex flex-col justify-center items-center">
                              <div className=""> 
                               <Cargando />
                              </div>
                           </div>
                       ) 
                       : (
                           <img className="lg:max-h-[500px]" src={imageModificada} alt="Imagen sin fondo subida por el usuario" />
                       )
                   }
               </two-up>
             </div>
           </div>
           <a download href={imageModificada} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-10 text-bold px-6 py-4 text-center mx-auto">Descargar imagen</a>
         </div>) : (<>Debe elegir una imagen</>)}
        </>
      )
}

ImageEditor.getInitialProps = async () => {
  return {}
}

export default ImageEditor