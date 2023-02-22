import Layout from '@/layout/Layout'
import React, { useEffect, useState } from 'react'

export default function Resultado() {
  const { imageOriginal, imageModificada } = useEditor()
  const [showTwoUp, setShowTwoUp] = useState(false);

  useEffect(() => {
    setShowTwoUp(true);
  }, [])

  return (
    <Layout pagina='Resultados'>
      <div className='w-full flex flex-col pt-5 space-y-5 items-center justify-center mx-auto'>
        <h2 className='text-xl text-white'>¡Resultado final!</h2>
        {showTwoUp && (
          <div className="two-up">
            <img className="lg:max-h-[500px]" src={imageOriginal} alt="Imagen original subida por el usuario" />
            <img className="lg:max-h-[500px]" src={imageModificada} alt="Imagen sin fondo subida por el usuario" />
          </div>
        )}
        <div className='text-center pt-5'>
         <a download href={imageModificada} className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 mt-10 text-bold px-6 py-4 text-center mx-auto">Descargar imagen</a>
        </div>
      </div>
    </Layout>
  )
}