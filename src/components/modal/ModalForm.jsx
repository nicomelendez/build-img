import { useDropzone } from "react-dropzone";
import useEditor from "@/hooks/useEditor";
import { ImageStatus } from "@/context/types.d";
import useCloudinary from "@/hooks/useCloudinary";
import Cargando from "../Cargando";

export default function ModalForm() {
  const { imageStatus, isGlobalStateTrue, setModal } = useEditor();
  const { uploadImageOverlay } = useCloudinary();

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
      acceptedFiles.map(async (file) => await uploadImageOverlay(file))
    );
  };

  return (
    <div className="bg-[#07182E] w-[280px] h-[280px] sm:w-[400px] h-sm:[300px] rounded-xl grid grid-cols-1 place-content-around px-5">
      <div className="flex items-center justify-between gap-5 text-white">
        <h2 className="text-xl font-bold">
          {isGlobalStateTrue ? "Nuevo overlay" : "New overlay"}
        </h2>

        <button
          onClick={() => {
            setModal(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div {...getRootProps({ className: "dropzone" })} className="">
        {imageStatus === ImageStatus.UPLOADING ? (
          <div className="flex justify-center items-center py-10">
            <Cargando />
          </div>
        ) : (
          <div>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-4 text-white">
            {isGlobalStateTrue ? (<p>Recuerda que la imagen debe ser PNG</p>) : (<p>Remember that the image must be PNG</p>)}
              <button
                type="button"
                onClick={open}
                className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-bold px-6 py-4"
              >
                {isGlobalStateTrue ? "Subir imagen" : "Upload image"}
              </button>
              <strong>
                {isGlobalStateTrue
                  ? "O arrastra una imagen."
                  : "Or drag a image."}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
