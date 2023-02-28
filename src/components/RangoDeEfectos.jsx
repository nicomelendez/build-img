import { almacenarFotos } from "@/helpers/almacenarFotos";
import { almacenarUltimaEdicion } from "@/helpers/almacenarUltimaEdicion";
import { eliminarUltimoEffecto } from "@/helpers/eliminarUltimoEffecto";
import useCloudinary from "@/hooks/useCloudinary";
import useEditor from "@/hooks/useEditor";
import { useState } from "react";
import Swal from "sweetalert2";

export default function RangoDeEfectos() {
  const {
    datosDeImagen,
    cambiarProcesoDeImagen,
    cambiarImagenModificada,
    largo,
    alto,
    blurMedida,
    blurId,
    cambiarLargo,
    cambiarAlto,
    cambiarLetras,
    cambiarSizeLetras,
    letras,
    sizeLetra,
    imageOriginal,
    titulo,
    cambiarTitulo,
    cambiarSizeFuente,
    sizeFuente,
    setMultipleEdicion,
    listaDeEfectos,
    setListaDeEfectos,
    accion,
    cambiarTamAvatar,
    tamAvatar
  } = useEditor();
  const {
    filtroGris,
    filtroBlur,
    filtroSacarFondo,
    filtroSize,
    filtroAvatar,
    filtroPrimavera,
    filtroInvierno,
    filtroOtnio,
    filtroGif,
    filtroTitulo
  } = useCloudinary();

  const handlerGris = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroGris(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
  };
  
  const handlerGif = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroGif(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
  };

  const handlerPrimavera = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroPrimavera(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
  };

  const handlerOtnio = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroOtnio(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
  };

  const handlerInvierno = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroInvierno(datosDeImagen);
    cambiarImagenModificada(imagenEditada);
  };

  const handlerSacarFondo = () => {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Deshabilitado hasta el día de la entrega, me quedan pocos usos para recortar!',
    })
    // cambiarProcesoDeImagen(true);
    // const imagenEditada = filtroSacarFondo(datosDeImagen);
    // cambiarImagenModificada(imagenEditada);
  };

  const handlerAvatar = () => {
    if (tamAvatar === '' || tamAvatar === 'Elige el tamaño') {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes elegir un tamaño!',
      })
    }
    if (letras && !sizeLetra) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes elegir un tamaño para el texto!',
      })
    }
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroAvatar(
      datosDeImagen,
      tamAvatar,
      letras,
      sizeLetra
    );
    cambiarImagenModificada(imagenEditada);
  };

  

  const handlerSize = () => {
    if (largo === 0 || alto === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes elegir un tamaño!',
      })
    }
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroSize(datosDeImagen, largo, alto);
    cambiarImagenModificada(imagenEditada);
  };

  const handlerBlur = () => {
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroBlur(datosDeImagen, blurId);
    cambiarImagenModificada(imagenEditada);
  };
  const handlerCrearTitulo = () =>{
    if(!sizeFuente){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes elegir un tamaño!',
      })
    }
    if(!titulo){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes escribir un texto!',
      })
    }
    cambiarProcesoDeImagen(true);
    const imagenEditada = filtroTitulo(datosDeImagen, titulo, sizeFuente);
    cambiarImagenModificada(imagenEditada);
  }

  const estilosButton =
    "mx-auto w-4/5 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-600 font-semibold rounded-lg text-white ";
  const estilosContent =
    "min-w-[200px] max-h-[470px] bg-slate-100 mx-auto px-6 p-2 sm:p-4 w-4/5 rounded-xl shadow flex flex-col items-center space-y-2 sm:space-y-5 text-[11px] sm:text-sm sombra";
  const estiloItem = "hover:underline hover:cursor-pointer";
  const estilosTitulos = "text-center font-bold text-sm sm:text-lg";
  const estiloP = 'font-bold text-[10px] sm:text-sm text-center border-t border-black pt-2'
  const texto = 'Todos los efectos se acumulan al momento de elegir uno para revertir el cambio utilice el botón deshacer.'
  if (accion === "Blur") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Añadir blur</p>
        <div className="flex flex-col items-center justify-start space-y-2 my-5">
          <label htmlFor="" className="text-black text-sm">
            Grado de blur <strong>{blurId}</strong>
          </label>
          <input
            className=""
            type="range"
            min="0"
            max="1000"
            onChange={blurMedida}
          />
          <button className={estilosButton} onClick={handlerBlur}>
            Aplicar
          </button>
        </div>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Avatar") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Crear un avatar</p>

        <p>Define las medidas</p>

        <select onChange={cambiarTamAvatar} className="py-2 text-center">
          <option>Elige el tamaño</option>
          <option value='100'>100 x 100</option>
          <option value='200'>200 x 200</option>
          <option value='300'>300 x 300</option>
          <option value='400'>400 x 400</option>
          <option value='500'>500 x 500</option>
          <option value='600'>600 x 600</option>
          <option value='700'>700 x 700</option>
        </select>
        <div className="w-full">
          <label className="text-black">Texto - Opcional</label>
          <input className="w-full" placeholder="Ej: NM" onChange={cambiarLetras} type="text" />
        </div>
        <div className="w-full">
          <label className="text-black">Tamaño de fuente</label>
          <input
            placeholder="Ej: 60"
            className="w-full"
            onChange={cambiarSizeLetras}
            type="number"
          />
        </div>
        <button className={estilosButton} onClick={handlerAvatar}>
          Aplicar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Ajustar") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Modificar tamaño</p>
        <div>
          <label className="text-black">Largo</label>
          <input className="w-full" placeholder="Ej: 300" onChange={cambiarLargo} type="number" />
        </div>
        <div>
          <label className="text-black">Alto</label>
          <input className="w-full" placeholder="Ej: 200" onChange={cambiarAlto} type="number" />
        </div>
        <button className={estilosButton} onClick={handlerSize}>
          Aplicar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Recortar") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Recortar fondo</p>
        <button className={estilosButton} onClick={handlerSacarFondo}>
          Aplicar
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Efectos") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Elige un efecto</p>
        <ul className="flex flex-row flex-wrap gap-5 lg:gap-0 lg:items-start justify-around items-center w-full lg:flex-col lg:space-y-5 pt-4 font-semibold list-disc px-4">
          <li>
            <button className={estiloItem} onClick={handlerGris}>
              Gris
            </button>
          </li>
          <li>
            <button className={estiloItem} onClick={handlerPrimavera}>
              Primavera
            </button>
          </li>
          <li>
            <button className={estiloItem} onClick={handlerOtnio}>
              Otoño
            </button>
          </li>
          <li>
            <button className={estiloItem} onClick={handlerInvierno}>
              Invierno
            </button>
          </li>
        </ul>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  }
  if (accion === "Texto") {
    return (
      <div className={estilosContent}>
        <p className={estilosTitulos}>Crea un texto texturado</p>
        <div className="w-full">
          <label className="text-black">Texto</label>
          <input className="w-full" placeholder="Ej: MiduDev" onChange={cambiarTitulo} type="text" />
        </div>
        <div className="w-full">
          <label className="text-black">Tamaño de fuente</label>
          <input
            placeholder="Ej: 120"
            className="w-full"
            onChange={cambiarSizeFuente}
            type="number"
          />
        </div>
        <button className={estilosButton} onClick={handlerCrearTitulo}>
          Crear
        </button>
        <p className={estiloP}>{texto}</p>
      </div>
    );
  } else {
    return (
      <div className={estilosContent + " justify-start lg:pt-5"}>
        <p className="text-center">
          Eliga un efecto para comenzar a modificar su imagen.
        </p>
      </div>
    );
  }
}
