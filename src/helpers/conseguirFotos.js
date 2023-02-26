export function conseguirFotos(){
    const imagenOriginal = localStorage.getItem('imagenOriginal')
    const imagenModificada = localStorage.getItem('imagenModificada')
    const datosImagen = localStorage.getItem('datosImagen')
 
    return {
        imagenOriginal: imagenOriginal && imagenOriginal !== 'undefined' ? imagenOriginal : null,
        imagenModificada: imagenModificada && imagenModificada !== 'undefined' ? imagenModificada : null,
        datosImagen: datosImagen && datosImagen !== 'undefined' ? datosImagen : null,
    }
}