import TwoUp from '@/components/TwoUpComponent';
import useEditor from '@/hooks/useEditor';
import Layout from '@/layout/Layout'


export default function Resultado() {
  const { imageOriginal, imageModificada, router } = useEditor()

  return (
    <Layout pagina='Resultados'>
      <div className='w-full flex flex-col py-5 space-y-5 items-center justify-center mx-auto'>
        <h2 className='text-4xl font-extrabold text-white'>¡Resultado final!</h2>

        <TwoUp imagenModificada={imageModificada} imageOriginal={imageOriginal}/>
 
        <div className='text-center flex flex-col gap-y-4'>
         <a download href={imageModificada} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-5 sm:mt-10 text-bold px-6 py-4 text-center mx-auto sombra">Descargar imagen</a>

         <button className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-bold px-6 py-4 text-center mx-auto sombra" onClick={()=>{router.push('/')}}>Editar otra imagen</button>
        </div>
      </div>
    </Layout>
  )
}