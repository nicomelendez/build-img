import React from 'react';

const TwoUp = ({imageOriginal, imagenModificada}) => {
    
  React.useEffect(() =>{
    import('two-up-element')
  } 
  , [])

  return (
    <div>
      <two-up>
        <img src={imageOriginal} alt="Before" />
        <img src={imagenModificada} alt="After" />
      </two-up>
    </div>
  );
};

export default TwoUp;