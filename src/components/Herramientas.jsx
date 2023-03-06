import useEditor from "@/hooks/useEditor";
import {
  IconBlur,
  IconEfecto,
  IconRecortar,
  IconsAjustar,
  IconsAvatar,
  IconsFace,
  IconsSearch,
  IconsTexto,
} from "./Icons";
import RangoDeEfectos from "./RangoDeEfectos";

export default function Herramientas() {

  const { imageOriginal, setHerramienta, herramienta, setAccion, isGlobalStateTrue } = useEditor();

  const herramientas = [
    {
      id: 1,
      icons: <IconRecortar />,
      name: isGlobalStateTrue ? 'Recortar' : 'Cut',
    },
    {
      id: 2,
      icons: <IconBlur />,
      name: "Blur",
    },
    {
      id: 3,
      icons: <IconEfecto />,
      name: isGlobalStateTrue ? 'Efectos' : 'Effects',
    },
    {
      id: 4,
      icons: <IconsAjustar />,
      name: isGlobalStateTrue ? 'Ajustar' : 'Adjust',
    },
    {
      id: 5,
      icons: <IconsAvatar />,
      name: "Avatar",
    },
    {
      id: 8,
      icons: <IconsTexto />,
      name: isGlobalStateTrue ? 'Texto' : 'Text',
    },
    {
      id: 9,
      icons: <IconsFace />,
      name: "Overlay",
    },
    {
      id: 10,
      icons: <IconsSearch />,
      name: isGlobalStateTrue ? 'Detectar' : 'Detect',
    },
  ];

  const handlerEfecto = (her) => {
    setHerramienta(her.name);
    setAccion(her.name);
  };

  if (imageOriginal !== null) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-around">
        <div className="mx-auto w-full grid grid-cols-4 gap-4 lg:grid-cols-2 place-content-center">
          {herramientas.map((her) => {
            return (
              <div
                className={`${
                  herramienta === her.name
                    ? "bg-gradient-to-r from-blue-500 to-violet-600"
                    : "bg-slate-100"
                } mx-auto text-gray-900 w-12 h-12 text-[7px] lg:w-14 lg:h-14 lg:text-[10px] flex flex-col items-center justify-center hover:cursor-pointer rounded-full`}
                onClick={() => {
                  handlerEfecto(her);
                }}
                key={her.id}
              >
                <div className="">
                  <span>{her.icons}</span>
                </div>
                <div
                  className={
                    herramienta === her.name ? "text-white" : "text-black"
                  }
                >
                  <strong>{her.name}</strong>
                </div>
              </div>
            );
          })}
        </div>

        <RangoDeEfectos />
      </div>
    );
  }
}
