import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { ImageStatus } from "./types.d";
import { conseguirFotos } from "@/helpers/conseguirFotos";
import { almacenarFotos } from "@/helpers/almacenarFotos";
import { conseguirUltimaEdicion } from "@/helpers/conseguirUltimaEdicion.js";
import { crearUrlConEfectos } from "@/helpers/crearUrlConEfectos";
import { almacenarUltimaEdicion } from "@/helpers/almacenarUltimaEdicion";
import Swal from "sweetalert2";

const EditorContext = createContext();

const EditorProvider = ({ children }) => {
  const [imageStatus, setImageStatus] = useState(ImageStatus.READY);
  const [imageOriginal, setImageOriginal] = useState(null);
  const [imageModificada, setImageModificada] = useState(null);
  const [datosDeImagen, setDatosDeImagen] = useState(null);
  const [processingImage, setProcessingImage] = useState(false);
  const [blurId, setBlur] = useState(0);
  const [largo, setLargo] = useState(0);
  const [alto, setAlto] = useState(0);
  const [letras, setLetras] = useState(null);
  const [sizeLetra, setSizeLetras] = useState(null);
  const [multipleEdicion, setMultipleEdicion] = useState(null);
  const [titulo, setTitulo] = useState('')
  const [sizeFuente, setSizeFuente] = useState(null);
  const [listaDeEfectos, setListaDeEfectos] = useState([])
  const [herramienta, setHerramienta] = useState(null)
  const [accion, setAccion] = useState('')
  const [tamAvatar, setTamAvatar] = useState('')

  const cambiarLetras = (event) => {
    setLetras(event.target.value);
  };

  const cambiarTamAvatar = (event) => {
    setTamAvatar(event.target.value);
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

  const handlerVolverOriginal = async () => {
    if(listaDeEfectos.length <= 0){
      return
    }
    const result = await Swal.fire({
      title: '¿Deseas sacar todos los efectos?',
      showDenyButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`
    });

    if (result.isConfirmed) {
      cambiarImagenModificada(imageOriginal);
      almacenarFotos(imageOriginal, imageOriginal, datosDeImagen);
      setListaDeEfectos([]);
      setHerramienta(null)
      localStorage.removeItem("ultimaEdicion");
    } else if (result.isDenied) {
      return;
    }
  };

  const handlerDeshacer = () =>{
    const lastIndex = listaDeEfectos.length - 1;
    if (lastIndex > 0) { 
      const penultimateLink = listaDeEfectos[lastIndex - 1];
      setListaDeEfectos(prevLinks => prevLinks.slice(0, lastIndex));
      almacenarUltimaEdicion(penultimateLink)
      setMultipleEdicion(penultimateLink)
      return
    }
    cambiarImagenModificada(imageOriginal);
    almacenarFotos(imageOriginal, imageOriginal, datosDeImagen);
    setListaDeEfectos([]);
    localStorage.removeItem("ultimaEdicion");
  }

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
  useEffect(() => {
    
    const { imagenOriginal, imagenModificada, datosImagen } = conseguirFotos()
  
    const { ultimaEdicion } = conseguirUltimaEdicion()
    
    if (!imagenOriginal || !imagenModificada) {
      return () => {}
    }
  
    if (ultimaEdicion !== null) {
      cambiarImagenModificada(ultimaEdicion)
      setMultipleEdicion(ultimaEdicion)
      setDatosDeImagen(datosImagen)
      setImageOriginal(imagenOriginal)
      return () => {}
    }

    setDatosDeImagen(datosImagen)
    setImageOriginal(imagenOriginal)
    cambiarImagenModificada(imagenModificada)
  
    return () => {}
  }, [])
  
  useEffect(()=>{
      if(imageModificada !== imageOriginal){
          const { ultimaEdicion } = conseguirUltimaEdicion()
          if(!ultimaEdicion){
              setMultipleEdicion(imageModificada)
              setListaDeEfectos([...listaDeEfectos, imageModificada])
              almacenarUltimaEdicion(imageModificada)
              almacenarFotos(imageOriginal, imageModificada, datosDeImagen)
              return () => {}
          }else if(ultimaEdicion !== imageModificada){
              const ima = crearUrlConEfectos(imageModificada, ultimaEdicion)
              almacenarUltimaEdicion(ima)
              setListaDeEfectos([...listaDeEfectos, ima])
              setMultipleEdicion(ima)
              almacenarFotos(imageOriginal, imageModificada, datosDeImagen)
              return () => {}
          }
      }
      return () => {}
  },[imageModificada, imageOriginal, datosDeImagen])


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
        handlerVolverOriginal,
        listaDeEfectos,
        handlerDeshacer,
        cambiarLargo,
        cambiarAlto,
        resetearLargoAlto,
        cambiarSizeFuente,
        accion,
        setAccion,
        setListaDeEfectos,
        largo,
        alto,
        blurMedida,
        router,
        sizeFuente,
        cambiarImagenModificada,
        almacenarFotos,
        cambiarTamAvatar,
        tamAvatar,
        setDatosDeImagen,
        setMultipleEdicion,
        multipleEdicion,
        setHerramienta,
        herramienta,
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
