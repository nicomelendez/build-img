import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { ImageStatus } from "./types.d";
import { conseguirFotos } from "@/helpers/conseguirFotos";
import { almacenarFotos } from "@/helpers/almacenarFotos";
import { conseguirUltimaEdicion } from "@/helpers/conseguirUltimaEdicion.js";
import { crearUltimaEdicion } from "@/helpers/crearUltimaEdicion";
import { crearUrlConEfectos } from "@/helpers/crearUrlConEfectos";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const [imageStatus, setImageStatus] = useState(ImageStatus.READY);
  const [imageOriginal, setImageOriginal] = useState(null);
  const [imageModificada, setImageModificada] = useState(null);
  const [datosDeImagen, setDatosDeImagen] = useState(null);
  const [processingImage, setProcessingImage] = useState(true);
  const [blurId, setBlur] = useState(0);
  const [largo, setLargo] = useState(0);
  const [alto, setAlto] = useState(0);
  const [letras, setLetras] = useState(null);
  const [sizeLetra, setSizeLetras] = useState(null);
  const [multipleEdicion, setMultipleEdicion] = useState(null);
  const [titulo, setTitulo] = useState('')
  const [sizeFuente, setSizeFuente] = useState(null);

  const cambiarLetras = (event) => {
    setLetras(event.target.value);
  };

  const cambiarSizeLetras = (event) => {
    setSizeLetras(event.target.value);
  };
  
  const cambiarSizeFuente = (event) => {
    setSizeFuente(event.target.value);
  };
  const cambiarTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const conseguirImagenLocalSotre = () => {
    return conseguirFotos();
  };

  const resetearLargoAlto = () => {
    setAlto(0);
    setLargo(0);
  };

  const cambiarLargo = (event) => {
    setLargo(event.target.value);
  };

  const cambiarAlto = (event) => {
    setAlto(event.target.value);
  };

  const blurMedida = (event) => {
    setBlur(event.target.value);
  };

  const router = useRouter();

  const cambiarImagenModificada = (url) => {
    setImageModificada(url);
  };

  const cambiarProcesoDeImagen = (valor) => {
    setProcessingImage(valor);
  };

  // useEffect(()=>{

  //     if(imageOriginal === null || imageModificada === null){
  //         const { imagenOriginal, imagenModificada, datosImagen } = conseguirFotos()
  //         const { ultimaEdicion } = conseguirUltimaEdicion()
  //         if(ultimaEdicion){
  //             cambiarImagenModificada(ultimaEdicion)
  //             setDatosDeImagen(datosImagen)
  //             setImageOriginal(imagenOriginal)
  //             setMultipleEdicion(ultimaEdicion)
  //             return () => {}
  //         }
  //         if(!imagenOriginal || !imagenModificada){
  //             return () => {}
  //         }
  //         if(!imageModificada){
  //             cambiarImagenModificada(imagenOriginal)
  //         }
  //         setMultipleEdicion(ultimaEdicion)
  //         setDatosDeImagen(datosImagen)
  //         cambiarImagenModificada(imagenModificada)
  //         setImageOriginal(imagenOriginal)
  //     }

  //     return () => {}
  //     },[])

  // useEffect(()=>{
  //     if(imageModificada !== imageOriginal){
  //         const { ultimaEdicion } = conseguirUltimaEdicion()
  //         if(!ultimaEdicion || imageModificada !== null){
  //             const ima = crearUltimaEdicion(imageModificada)
  //             setMultipleEdicion(ima)
  //             console.log(ima)
  //             almacenarFotos(imageOriginal, imageModificada, datosDeImagen, ima)
  //         }else if(ultimaEdicion !== imageModificada && imageModificada !== null){
  //             const ima = crearUrlConEfectos(imageModificada, ultimaEdicion)
  //             console.log(ima)
  //             setMultipleEdicion(ima)
  //             almacenarFotos(imageOriginal, imageModificada, datosDeImagen, ima)
  //         }
  //     }

  //     if(imageModificada !== null){}
  //     return () => {}
  // },[imageModificada, imageOriginal, datosDeImagen])

  useEffect(() => {
    cambiarImagenModificada(multipleEdicion);

    if (multipleEdicion !== null) {
    }
    return () => {};
  }, [multipleEdicion]);

  return (
    <EditorContext.Provider
      value={{
        imageStatus,
        setImageStatus,
        imageModificada,
        cambiarProcesoDeImagen,
        processingImage,
        cambiarTitulo,
        titulo,
        setImageModificada,
        setImageOriginal,
        imageOriginal,
        conseguirImagenLocalSotre,
        blurId,
        cambiarLargo,
        cambiarAlto,
        resetearLargoAlto,
        cambiarSizeFuente,
        largo,
        alto,
        blurMedida,
        router,
        sizeFuente,
        cambiarImagenModificada,
        almacenarFotos,
        setDatosDeImagen,
        setMultipleEdicion,
        multipleEdicion,
        cambiarLetras,
        letras,
        sizeLetra,
        cambiarSizeLetras,
        datosDeImagen,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export { EditorProvider };
export default EditorContext;
