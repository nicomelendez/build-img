import useEditor from '@/hooks/useEditor';
import Layout from '@/layout/Layout'
import dynamic from 'next/dynamic';
const TwoUp = dynamic(() => import('two-up-element').then(module => module.TwoUp), { ssr: false });
import React, { useLayoutEffect } from 'react'

export default function Resultado() {
  const { imageOriginal, imageModificada } = useEditor()

  useLayoutEffect(() => {
    if (!window.customElements.get('two-up')) {
      window.customElements.define('two-up', TwoUp);
    }
  }, []);

  return (
    <Layout pagina='Resultados'>
      <div className='w-full flex flex-col pt-5 space-y-5 items-center justify-center mx-auto'>
        <h2 className='text-xl text-white'>¡Resultado final!</h2>

          <two-up orientation="horizontal">
            <img className="lg:max-h-[500px]" src={imageOriginal} alt="Imagen original subida por el usuario" />
            <img className="lg:max-h-[500px]" src={imageModificada} alt="Imagen sin fondo subida por el usuario" />
          </two-up>
 
        <div className='text-center pt-5'>
         <a download href={imageModificada} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-10 text-bold px-6 py-4 text-center mx-auto">Descargar imagen</a>
        </div>
      </div>
    </Layout>
  )
}