import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Cargando from "./Cargando";

const TwoUp = ({ imageOriginal, imagenModificada }) => {
  const [twoUpLoaded, setTwoUpLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const loadTwoUp = async () => {
      const modules = await import("two-up-element/dist/two-up.js");
      const TwoUp = modules.TwoUp;

      if (!window.customElements.get("two-up")) {
        window.customElements.define("two-up", TwoUp);
      }

      if (ref.current) {
        ref.current.orientation = "horizontal";
      }

      setTwoUpLoaded(true);
    };

    if (typeof window !== "undefined") {
      loadTwoUp();
    }
  }, []);

  if (!twoUpLoaded) {
    return <Cargando />;
  }

  return (
    <div className="sombra">
      <two-up ref={ref}>
        <Image
          width={1200}
          height={1000}
          className="max-w-[280px] lg:max-w-[500px] xl:max-w-[800px]"
          slot="before"
          src={imageOriginal}
          alt="Before"
        />
        <Image
          width={1200}
          height={1000}
          className="max-w-[280px] lg:max-w-[500px] xl:max-w-[800px]"
          slot="after"
          src={imagenModificada}
          alt="After"
        />
      </two-up>
    </div>
  );
};

export default TwoUp;
