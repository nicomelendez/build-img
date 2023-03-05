import TwoUp from "@/components/TwoUpComponent";
import useEditor from "@/hooks/useEditor";
import Layout from "@/layout/Layout";

export default function Resultado() {
  const { imageOriginal, imageModificada, router, isGlobalStateTrue } = useEditor();

  return (
    <Layout pagina="Resultados">
      <div className="w-full flex flex-col py-5 space-y-5 items-center justify-center mx-auto">
        <h2 className="text-2xl sm:text-4xl text-center font-extrabold text-white">
         {isGlobalStateTrue ? '¡Resultado final!' : 'Final result!'}
        </h2>

        <TwoUp
          imagenModificada={imageModificada}
          imageOriginal={imageOriginal}
        />

        <div className="text-center flex flex-col gap-y-4">
          <a
            download
            href={imageModificada}
            className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-5 sm:mt-10 text-bold px-6 py-4 text-center mx-auto sombra"
          >
            {isGlobalStateTrue ? 'Descargar imagen' : 'Download image'}
          </a>

          <button
            className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-bold px-6 py-4 text-center mx-auto sombra"
            onClick={() => {
              router.push("/");
            }}
          >
            {isGlobalStateTrue ? 'Editar otra imagen' : 'Edit another image'}
          </button>
        </div>
      </div>
    </Layout>
  );
}
