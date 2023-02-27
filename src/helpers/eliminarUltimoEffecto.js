export const eliminarUltimoEffecto = (url) => {
    const partes = url.split("/");
    partes.splice(-2, 1);
    return partes.join("/");
}