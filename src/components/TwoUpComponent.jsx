import { useEffect, useRef } from 'react';

const TwoUp = ({imageOriginal, imagenModificada}) => {
    
  const ref = useRef();

  useEffect(() => {
    import('two-up-element').then(module => {
      const TwoUp = module.TwoUp;
      if (!window.customElements.get('two-up')) {
        window.customElements.define('two-up', TwoUp);
      }

      if (ref.current) {
        ref.current.orientation = 'horizontal';
      }
    });
  }, []);

  return (
    <div>
      <two-up ref={ref}>
        <img slot="before" src={imageOriginal} alt="Before" />
        <img slot="after" src={imagenModificada} alt="After" />
      </two-up>
    </div>
  );
};

export default TwoUp;