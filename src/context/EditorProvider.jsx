import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { ImageStatus } from './types.d'
const EditorContext = createContext();

const EditorProvider = ({ children }) => {

    const [imageStatus, setImageStatus] = useState(ImageStatus.READY)
    const [imageOriginal, setImageOriginal] = useState(null)
    const [imageModificada, setImageModificada] = useState(null)
    const [datosDeImagen, setDatosDeImagen] = useState(null)
    const [processingImage, setProcessingImage] = useState(true)

    const router = useRouter()

    const cambiarImagenModificada = (url) =>{
        setImageModificada(url)
    }

    const cambiarProcesoDeImagen = (valor) => {
        setProcessingImage(valor)
    }


    useEffect(()=>{
        localStorage.setItem('imagenOriginal', JSON.stringify(imageOriginal))
        localStorage.setItem('imagenModificada', JSON.stringify(imageModificada))
    },[imageOriginal, imageModificada])

    return(
        <EditorContext.Provider value={{
            imageStatus,
            setImageStatus,
            imageModificada,
            cambiarProcesoDeImagen,
            processingImage,
            setImageModificada,
            setImageOriginal,
            imageOriginal,
            router,
            cambiarImagenModificada,
            setDatosDeImagen,
            datosDeImagen
        }}>
            { children }
        </EditorContext.Provider>
    )
}

export {
    EditorProvider
}
export default EditorContext;