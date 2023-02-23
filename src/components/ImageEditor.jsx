import useEditor from "@/hooks/useEditor"
import { useEffect} from "react"
import 'two-up-element/dist/two-up.mjs'
import 'two-up-element/lib/styles.css';
import Cargando from "./Cargando"
import Herramientas from "./Herramientas";

export default function ImageEditor() {
    
    const { imageOriginal, imageModificada, processingImage, cambiarProcesoDeImagen, router} = useEditor()
   

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
           <p className="text-center text-xl text-white font-bold my-5">Comienza a modificar tu imagen</p>
           <div className="w-full flex flex-col lg:flex-row  items-center justify-center gap-4">
            
            <div className="w-full lg:w-56">
              <Herramientas />
            </div>

             <div className='mx-auto lg:px-12'>
                {processingImage ? 
                (<div className="flex w-[290px] lg:w-[500px] flex-col justify-center h-52 items-center">
                  <Cargando />
                </div>) : (<img className="w-full" src={imageModificada} alt='Imagen para editar'/>)}
               
             </div>

           </div>
           
           <button onClick={()=>{router.push('/resultado')}} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-10 text-bold px-6 py-4 text-center mx-auto">Terminar edición</button>
         </div>) : (<>Debe elegir una imagen</>)}
        </>
      )
}