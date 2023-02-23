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
    const [letras, setLetras] = useState(null)
    const [sizeLetra, setSizeLetras] = useState(null)


    const cambiarLetras = (event) => {
        setLetras(event.target.value)
    }

    const cambiarSizeLetras = (event) => {
        setSizeLetras(event.target.value)
    }

    const conseguirImagenOriginalLocalSotre = () => {
        const imagenOrg = localStorage.getItem('imagenOriginal')
        if(imagenOrg){
            return imagenOrg
        }
    }
    const conseguirImagenModificadaLocalSotre = () => {
       const imageMod = localStorage.getItem('imagenModificada')
       if(imageMod){
        return imageMod
       }
    }
 
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
        if(imageModificada !== null || imageOriginal !== null){
            let imageMod = conseguirImagenModificadaLocalSotre()
            let imagenOrg = conseguirImagenOriginalLocalSotre()

            if(imageModificada !== imageMod || imageOriginal !== imagenOrg){
                localStorage.setItem('imagenOriginal', JSON.stringify(imageOriginal))
                localStorage.setItem('imagenModificada', JSON.stringify(imageModificada))
            }
          
        }
    },[imageOriginal, imageModificada])

    useEffect(()=>{
        if(imageOriginal === null || imageModificada === null){
            let imageMod = conseguirImagenModificadaLocalSotre()
            let imagenOrg = conseguirImagenOriginalLocalSotre()   
            if(imageMod || imagenOrg){
                setImageModificada(String(imageMod))
                setImageOriginal(String(imagenOrg))
            }     
        }
        
    },[])

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
            cambiarLetras,
            letras,
            sizeLetra,
            cambiarSizeLetras,
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