import useEditor from "@/hooks/useEditor";

export default function SinImagen() {
  const { router,isGlobalStateTrue } = useEditor();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-bold text-white">
       {isGlobalStateTrue ? 'No has subido una imagen.' : 'You have not uploaded an image.'}
      </h2>
      <p className="text-center font-bold text-white">
      {isGlobalStateTrue ? 'Para poder comenzar a editar debes primero subir una imagen.' : 'In order to start editing you must first upload an image.'}
      </p>
      <button
        className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 font-bold mt-10 text-bold px-6 py-4 text-center mx-auto"
        onClick={() => {
          router.push("/");
        }}
      >
        {isGlobalStateTrue ? 'Volver al inicio' : 'Back to home'}
      </button>
    </div>
  );
}
