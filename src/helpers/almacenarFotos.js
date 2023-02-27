export function almacenarFotos(fotoOriginal, fotoModificada, datosImagen){
    localStorage.setItem('fotoOriginal', fotoOriginal)
    localStorage.setItem('fotoModificada', fotoModificada)
    localStorage.setItem('datosImagen', datosImagen)
}