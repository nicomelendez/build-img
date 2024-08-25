import useCloudinary from '@/hooks/useCloudinary'
import useEditor from '@/hooks/useEditor'
import { IconsPlus } from './Icons'

export default function Overlay() {
  const {
    conseguirImagen,
    filtroOverlayFace,
    filtroOverlayLentes,
    filtroOverlayFaceAdv,
  } = useCloudinary()
  const { datosDeImagen, setModal, imagenOverlay } = useEditor()
  const overalys = [
    {
      id: 1,
      name: 'Lentes',
      img: 'doc-ai/overlay/tndnfuu08lqxdn1qzocm',
      action: filtroOverlayLentes,
      scale: '1.5',
    },
    {
      id: 2,
      name: 'Anonymous',
      img: 'doc-ai/overlay/q7rgoprjodxd5zi4vnjq',
      action: filtroOverlayFaceAdv,
      scale: '1.1',
    },
    {
      id: 3,
      name: 'Mascara Casa de papel',
      img: 'doc-ai/overlay/usqipkc8vuj5lkmw0j28',
      action: filtroOverlayFaceAdv,
      scale: '1.1',
    },
    {
      id: 4,
      name: 'S.A.W',
      img: 'doc-ai/overlay/ajb2sg4osp0lt95arhet',
      action: filtroOverlayFaceAdv,
      scale: '1.1',
    },
    {
      id: 6,
      name: 'Lentes de sol',
      img: 'doc-ai/overlay/a1g7qu9gyv3geqkh1poo',
      action: filtroOverlayLentes,
      scale: '1.5',
    },
  ]

  return (
    <ul className='w-full grid grid-cols-2 place-content-center gap-3'>
      {overalys.map((over) => {
        return (
          <li
            onClick={() => {
              over.action(datosDeImagen, over.img, over?.scale)
            }}
            className='flex flex-col justify-center items-center cursor-pointer hover:scale-105'
            key={over.id}
          >
            <img
              className='max-w-[40px]'
              src={conseguirImagen(over.img)}
              alt={`Imagen del overlay ${over.name}`}
            />
          </li>
        )
      })}
      {imagenOverlay !== null ? (
        <>
          <li
            onClick={() => {
              filtroOverlayFaceAdv(datosDeImagen, imagenOverlay)
            }}
            className='flex flex-col justify-center items-center cursor-pointer hover:scale-105'
          >
            <img
              className='max-w-[40px]'
              src={conseguirImagen(imagenOverlay)}
              alt={`Nueva Imagen del overlay`}
            />
          </li>
        </>
      ) : (
        <></>
      )}
      <li className='flex flex-col justify-center items-center cursor-pointer hover:scale-105'>
        <button
          onClick={() => {
            setModal(true)
          }}
        >
          <IconsPlus />
        </button>
      </li>
    </ul>
  )
}
