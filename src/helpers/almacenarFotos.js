export function almacenarFotos(fotoOriginal, fotoModificada, datosImagen, ultimaEdicion){
    localStorage.setItem('imagenOriginal', fotoOriginal)
    localStorage.setItem('imagenModificada', fotoModificada)
    localStorage.setItem('datosImagen', datosImagen)
    localStorage.setItem('ultimaEdicion', ultimaEdicion)
}