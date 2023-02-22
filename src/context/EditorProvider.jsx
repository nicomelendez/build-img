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
    const [blurId, setBlur] = useState(0)
    const [largo, setLargo] = useState(0)
    const [alto, setAlto] = useState(0)


    const resetearLargoAlto = () => {
        setAlto(0)
        setLargo(0)
    }

    const cambiarLargo = (event) =>{
        setLargo(event.target.value)
    }

    const cambiarAlto = (event) =>{
        setAlto(event.target.value)
    }

    const blurMedida = (event) =>{
        setBlur(event.target.value)
    }

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
            blurId,
            cambiarLargo,
            cambiarAlto,
            resetearLargoAlto,
            largo,
            alto,
            blurMedida,
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