import TwoUp from '@/components/TwoUpComponent';
import useEditor from '@/hooks/useEditor';
import Layout from '@/layout/Layout'


export default function Resultado() {
  const { imageOriginal, imageModificada } = useEditor()

  return (
    <Layout pagina='Resultados'>
      <div className='w-full flex flex-col py-5 space-y-5 items-center justify-center mx-auto'>
        <h2 className='text-4xl font-extrabold text-white'>¡Resultado final!</h2>

        <TwoUp imagenModificada={imageModificada} imageOriginal={imageOriginal}/>
 
        <div className='text-center pt-5'>
         <a download href={imageModificada} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-10 text-bold px-6 py-4 text-center mx-auto sombra">Descargar imagen</a>
        </div>
      </div>
    </Layout>
  )
}