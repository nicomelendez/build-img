import useEditor from "@/hooks/useEditor";
import { useEffect } from "react";

export default function RangoDeEfectos({ accion }) {

    const { blurMedida, blurId, cambiarLargo, cambiarAlto } = useEditor()


    if(accion === 'Blur'){
        return (
            <div className="w-[167px]">
                <p>Añadir blur</p>
                <div className="flex flex-col items-center justify-start mx-auto space-y-2 my-5">
                    <label htmlFor="" className="text-black text-sm">Grado de blur <strong>{blurId}</strong></label>
                    <input className="" type='range' min='0' max='1000' onChange={blurMedida}/>
                </div>
            </div>
        )
    }
    if(accion === 'Avatar'){
        return (
            <div className="flex w-[167px] flex-col space-y-5">
                <p>Modificar tamaño</p>
                <div>
                    <label className="text-black font-bold">Largo</label>
                    <input className="w-[150px]" onChange={cambiarLargo} type='number' />
                </div>
                <div>
                    <label className="text-black font-bold">Alto</label>
                    <input className="w-[150px]" onChange={cambiarAlto} type='number' />
                </div>
            </div>
        )
    }
    if(accion === 'Ajustar'){
        return (
            <div className="flex w-[167px] flex-col space-y-5">
                <p>Modificar tamaño</p>
                <div>
                    <label className="text-black font-bold">Largo</label>
                    <input className="w-[150px]" onChange={cambiarLargo} type='number' />
                </div>
                <div>
                    <label className="text-black font-bold">Alto</label>
                    <input className="w-[150px]" onChange={cambiarAlto} type='number' />
                </div>
            </div>
        )
    }
    if(accion === 'Recorte'){
        return (
            <div>RangoDeEfectos</div>
        )
    }
    if(accion === 'Gris'){
        return (
            <div className="w-[167px]">
                <p>Aplicar efectos</p>
                <div>
                    <ul>
                        <li>Gris</li>
                        <li>Primavera</li>
                        <li>Otoño</li>
                        <li>Invierno</li>
                    </ul>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="w-full">
                <p className="text-center ">Eliga un efecto para comenzar a modificar su imagen</p>
            </div>
        )
    }
}
