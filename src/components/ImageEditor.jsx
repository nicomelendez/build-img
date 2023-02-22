import useEditor from "@/hooks/useEditor"
import { useEffect, useState } from "react"
import 'two-up-element'
import Cargando from "./Cargando"

export default function ImageEditor() {
    
    const { imageOriginal, imageModificada } = useEditor()
    const [processingImage, setProcessingImage] = useState(true)

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
        <div className="mx-auto">
            <two-up>
                <img src={imageOriginal} alt="Imagen original subida por el usuario" />
                {processingImage 
                    ? (
                        <div className="flex flex-col justify-center items-center">
                            <Cargando />
                        </div>
                    ) 
                    : (
                        <img src={imageModificada} alt="Imagen sin fondo subida por el usuario" />
                    )
                }
            </two-up>
            <br />
            <a download href={imageModificada} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-10 text-bold px-6 py-4 text-center">Descargar imagen</a>
        </div>
    )
}