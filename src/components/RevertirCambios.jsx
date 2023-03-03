import useEditor from "@/hooks/useEditor";
import React from "react";
import { IconAtras, IconRecargar } from "./Icons";

export default function RevertirCambios() {
  const {
    herramienta,
    setHerramienta,
    handlerVolverOriginal,
    handlerDeshacer,
  } = useEditor();
  const herramientas = [
    {
      id: 6,
      icons: <IconRecargar />,
      name: "Limpiar",
    },
    {
      id: 7,
      icons: <IconAtras />,
      name: "Deshacer",
    },
  ];

  const handlerEfecto = (her) => {
    setHerramienta(her.name);
  };

  const handlerDeshacerOption = (her) => {
    handlerEfecto(her);
    if (her.name === "Limpiar") {
      return handlerVolverOriginal();
    } else if (her.name === "Deshacer") {
      return handlerDeshacer();
    }
  };

  return (
    <div className="mx-auto w-full flex pb-5">
      {herramientas.map((her) => {
        return (
          <div
            className={`${
              herramienta === her.name
                ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white"
                : "bg-slate-100"
            } mx-auto text-gray-900 w-12 h-12 text-[7px] lg:w-14 lg:h-14 lg:text-[10px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full`}
            onClick={() => {
              handlerDeshacerOption(her);
            }}
            key={her.id}
          >
            <div className="">
              <span>{her.icons}</span>
            </div>
            <div>
              <strong>{her.name}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}
