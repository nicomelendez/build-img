import { useLayoutEffect } from 'react';
import dynamic from 'next/dynamic';

const TwoUp = dynamic(() => import('two-up-element').then(module => module.TwoUp), { ssr: false });

const TwoUpComponent = ({imageOriginal, imagenModificada}) => {
  useLayoutEffect(() => {
    if (!window.customElements.get('two-up')) {
      window.customElements.define('two-up', TwoUp);
    }
  }, []);

  return (
    <div>
      <two-up orientation="horizontal">
        <img slot="before" src={imageOriginal} alt="Before" />
        <img slot="after" src={imagenModificada} alt="After" />
      </two-up>
    </div>
  );
};

export default TwoUpComponent;