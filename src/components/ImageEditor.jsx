import useEditor from "@/hooks/useEditor";
import { useEffect } from "react";
import Cargando from "./Cargando";
import RevertirCambios from "./RevertirCambios";
import SinImagen from "./SinImagen";

export default function ImageEditor() {
  const {
    imageOriginal,
    multipleEdicion,
    processingImage,
    cambiarProcesoDeImagen,
    router,
    imageModificada,
    isGlobalStateTrue
  } = useEditor();

  useEffect(() => {
    let intervalId;
    let tries = 0;

    const loadImage = () => {
      const img = new Image();
      img.src = multipleEdicion;
      img.onload = () => {
        setTimeout(() => {
          cambiarProcesoDeImagen(false);
        }, 1500);
        clearInterval(intervalId);
      };
      img.onerror = () => {
        cambiarProcesoDeImagen(true);
      };
    };

    if (processingImage) {
      loadImage();
      intervalId = setInterval(() => {
        tries++;
        if (tries < 20) {
          loadImage();
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [multipleEdicion, processingImage, cambiarProcesoDeImagen]);

  return (
    <>
      {imageOriginal !== null ? (
        <div className="w-full flex flex-col flex-wrap">
          <RevertirCambios />
          <div className="w-full flex flex-col lg:flex-row  items-center justify-center gap-4">
            <div className="mx-auto lg:px-12">
              {processingImage ? (
                <div className="flex w-[290px] lg:w-[500px] flex-col justify-center h-52 items-center">
                  <Cargando />
                </div>
              ) : (
                <img
                  id="image"
                  className="w-full min-w-[100px] max-h-[500px] sombra"
                  src={
                    imageOriginal === imageModificada
                      ? imageOriginal
                      : multipleEdicion
                  }
                  alt="Imagen para editar"
                />
              )}
            </div>
          </div>
          <button
            onClick={() => {
              router.push("/resultado");
            }}
            className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 font-bold mt-10 text-bold px-6 py-4 text-center mx-auto"
          >
            {isGlobalStateTrue ? 'Terminar' : 'Finish'}
          </button>
        </div>
      ) : (
        <SinImagen />
      )}
    </>
  );
}
