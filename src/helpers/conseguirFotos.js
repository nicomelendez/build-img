export function conseguirFotos(){
    const imagenOriginal = localStorage.getItem('fotoOriginal')
    const imagenModificada = localStorage.getItem('fotoModificada')
    const datosImagen = localStorage.getItem('datosImagen')
 
    return {
        imagenOriginal: imagenOriginal && imagenOriginal !== 'undefined' ? imagenOriginal : null,
        imagenModificada: imagenModificada && imagenModificada !== 'undefined' ? imagenModificada : null,
        datosImagen: datosImagen && datosImagen !== 'undefined' ? datosImagen : null,
    }
}