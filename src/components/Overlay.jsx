import useCloudinary from '@/hooks/useCloudinary'
import useEditor from '@/hooks/useEditor'
import React from 'react'

export default function Overlay() {

    const { conseguirImagen, filtroOverlayFace, filtroOverlayCabeza, filtroOverlayLentes } = useCloudinary()
    const { datosDeImagen } = useEditor()
    const overalys = [
        {
            id:1,
            name:'Lentes',
            img:'u18uydlbgfqxlkjk5rz4',
            action: filtroOverlayLentes,
            scale: '1.5'
        },
        {
            id:2,
            name:'Anonymous',
            img:'kyxpaggqqmosta91i0xa',
            action: filtroOverlayFace,
            scale:'1.04'
        },
        {
            id:3,
            name:'Mascara Casa de papel',
            img:'ohmkt1sthbnfxhdtxphm',
            action: filtroOverlayFace,
            scale:'1.3'
        },
        {
            id:4,
            name:'S.A.W',
            img:'ha3tvn6qzmulfdrxjlxr',
            action: filtroOverlayFace,
            scale:'1.4'
        },
        {
            id:5,
            name:'Mascara de gas',
            img:'veeplc4er1oyt54k9ypk',
            action: filtroOverlayFace,
            scale: '1.4'
        },
        {
            id:6,
            name:'Midu',
            img:'lbducroers3f7dkp0e5i',
            action: filtroOverlayFace,
            scale: '1'
        }
        
    ]
    
  return (
    <ul className='w-full grid grid-cols-2 place-content-center gap-3'>
        {overalys.map(over => {
            return(
                <li onClick={()=>{over.action(datosDeImagen, over.img, over?.scale)}} className='flex flex-col justify-center items-center cursor-pointer hover:scale-105' key={over.id}>
                    <img className='max-w-[40px]' src={conseguirImagen(over.img)} alt={`Imagen del overlay ${over.name}`} />
                </li>
            )
        })}
    </ul>
  )
}
