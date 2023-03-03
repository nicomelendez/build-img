import { useEffect, useRef, useState } from 'react';
import Cargando from './Cargando';

const TwoUp = ({ imageOriginal, imagenModificada }) => {
  const [twoUpLoaded, setTwoUpLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const loadTwoUp = async () => {
      const modules = await import('two-up-element/dist/two-up.js');
      const TwoUp = modules.TwoUp;

      if (!window.customElements.get('two-up')) {
        window.customElements.define('two-up', TwoUp);
      }

      if (ref.current) {
        ref.current.orientation = 'horizontal';
      }

      setTwoUpLoaded(true);
    };

    if (typeof window !== 'undefined') {
      loadTwoUp();
    }
  }, []);

  if (!twoUpLoaded) {
    return <Cargando />
  }

  return (
    <div className='sombra'>
      <two-up ref={ref}>
        <img className='max-w-[500px]' slot="before" src={imageOriginal} alt="Before" />
        <img className='max-w-[500px]' slot="after" src={imagenModificada} alt="After" />
      </two-up>
    </div>
  );
};

export default TwoUp;