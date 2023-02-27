import useEditor from "@/hooks/useEditor";
import { useEffect } from "react";
import Cargando from "./Cargando";

export default function ImageEditor() {
  const {
    imageOriginal,
    multipleEdicion,
    processingImage,
    cambiarProcesoDeImagen,
    router,
    imageModificada,
  } = useEditor();

  useEffect(() => {
    let intervalId;
    let tries = 0;

    const loadImage = () => {
      console.log("Loading image...");
      const img = new Image();
      img.src = multipleEdicion;
      img.onload = () => {
        console.log("Image loaded.");
        cambiarProcesoDeImagen(false);
        clearInterval(intervalId);
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
          <div className="w-full flex flex-col lg:flex-row  items-center justify-center gap-4">
            {imageOriginal === imageModificada ? (
              <div className="mx-auto lg:px-12">
                <img
                  className="w-full"
                  src={imageOriginal}
                  alt="Imagen para editar"
                />
              </div>
            ) : (
              <>
                <div className="mx-auto lg:px-12">
                  {processingImage ? (
                    <div className="flex w-[290px] lg:w-[500px] flex-col justify-center h-52 items-center">
                      <Cargando />
                    </div>
                  ) : (
                    <img
                      className="w-full"
                      src={multipleEdicion}
                      alt="Imagen para editar"
                    />
                  )}
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => {
              router.push("/resultado");
            }}
            className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 font-bold mt-10 text-bold px-6 py-4 text-center mx-auto"
          >
            Terminar edición
          </button>
        </div>
      ) : (
        <>Debe elegir una imagen</>
      )}
    </>
  );
}
