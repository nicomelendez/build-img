import { useDropzone } from "react-dropzone";
import useEditor from "@/hooks/useEditor";
import { ImageStatus } from "@/context/types.d";
import Cargando from "./Cargando";
import useCloudinary from "@/hooks/useCloudinary";

export default function FormImage() {
  const { imageStatus, isGlobalStateTrue } = useEditor();
  const { uploadImage } = useCloudinary();

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles);
    },
  });

  const handleDrop = async (acceptedFiles) => {
    await Promise.all(
      acceptedFiles.map(async (file) => await uploadImage(file))
    );
  };

  return (
    <section
      {...getRootProps({ className: "dropzone" })}
      className="card mx-auto flex flex-col w-11/12 lg:min-h-[400px] lg:min-w-[400px] sm:max-h-[400px] sombra"
    >
      <div>
        <h2
          className="text-center px-2 text-xl lg:text-2xl font-black text-white uppercase pb-5 sombra"
          style={{ lineHeight: "1.2", wordWrap: "break-word" }}
        >
          <span className="block px-4">
            {isGlobalStateTrue ? (
              <>
                <span className="block">
                  ¡Sube una{" "}
                  <span className="bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text">
                    imagen
                  </span>
                </span>{" "}
                y comienza a{" "}
                <span className="bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text">
                  personalizarla
                </span>
                !
              </>
            ) : (
              <>
                <span className="block">
                  UPLOAD AN{" "}
                  <span className="bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text">
                    IMAGE
                  </span>
                </span>{" "}
                AND START{" "}
                <span className="bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text">
                  CUSTOMIZING IT
                </span>
                !
              </>
            )}
          </span>{" "}
        </h2>

      </div>
      {imageStatus === ImageStatus.UPLOADING ? (
        <Cargando />
      ) : (
        <div>
          <input {...getInputProps()} />
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={open}
              className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-bold px-6 py-4"
            >
              {isGlobalStateTrue ? 'Subir archivo' : 'Upload file'}
            </button>
            <strong>{isGlobalStateTrue ? 'O arrastra un archivo.' : 'Or drag a file.'}</strong>
          </div>
        </div>
      )}
    </section>
  );
}
