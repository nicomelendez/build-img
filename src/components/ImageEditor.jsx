import useEditor from "@/hooks/useEditor"
import { useEffect, useRef, useState } from "react"
import 'two-up-element/dist/two-up.mjs'
import 'two-up-element/lib/styles.css';
import Cargando from "./Cargando"
import { grayscale, blur, backgroundRemoval} from "@cloudinary/url-gen/actions/effect"
import { Cloudinary } from "@cloudinary/url-gen";

export default function ImageEditor() {
    
    const { imageOriginal, imageModificada, datosDeImagen, cambiarImagenModificada } = useEditor()
    const [processingImage, setProcessingImage] = useState(true)
    const rango = useRef()
    const [blurId, setBlur] = useState(0);

    const cloudinary = new Cloudinary({
      cloud: {
        cloudName: "djslvlh8h",
      },
      url: {
        secure: true,
      },
    });

    const handlerGris = () => {
      setProcessingImage(true)
      const imagenGris = cloudinary.image(datosDeImagen.public_id).effect(grayscale());
      cambiarImagenModificada(imagenGris.toURL())
    }

    const handlerSacarFondo = () => {
    setProcessingImage(true)  
    const imageWithoutBackground = cloudinary
    .image(datosDeImagen.public_id)
    .effect(backgroundRemoval())
    cambiarImagenModificada(imageWithoutBackground.toURL())
    }
    
    const handlerTexto = () =>{
    //  const imageConTexto = .resize(scale().width(1000))
    //  .reshape(
    //    cutByImage(
    //      image("torn-paper").transformation(
    //        new Transformation().resize(
    //          scale().width("1.0").height("1.0").relative()
    //        )
    //      )
    //    )
    //  )
    //  .overlay(
    //    source(
    //      image("torn-paper").transformation(
    //        new Transformation()
    //          .resize(scale().width("1.0").height("1.0").relative())
    //          .adjust(opacity(40))
    //      )
    //    )
    //  )
    //  .effect(sepia())
    //  cambiarImagenModificada(imageConTexto.toURL())
    }

    const handlerBlur = () => {
    setProcessingImage(true)
    const imagenGris = cloudinary.image(datosDeImagen.public_id).effect(blur().strength(blurId));
    cambiarImagenModificada(imagenGris.toURL())
    }

    const herramientas = [
      {
        id:1,
        name: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>,
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
      action: handlerTexto
      
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
                setProcessingImage(false)
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
    }, [imageModificada, processingImage])

   
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
               <two-up>
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