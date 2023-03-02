import useEditor from '@/hooks/useEditor'
import React from 'react'

export default function SinImagen() {

    const {router} = useEditor()

  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='text-center text-2xl font-bold text-white'>No has subido una imagen.</h2>
        <p className='text-center font-bold text-white'>Para poder comenzar a editar debes primero subir una imagen.</p>
        <button className="hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 font-bold mt-10 text-bold px-6 py-4 text-center mx-auto" onClick={()=>{router.push('/')}}>Volver al inicio</button>
    </div>
  )
}
