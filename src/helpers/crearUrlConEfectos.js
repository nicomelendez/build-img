export const crearUrlConEfectos = (imageModificada, ultimaEdicion) => {
    const path = imageModificada.substring("https://res.cloudinary.com/djslvlh8h/image/upload".length);
    let segments = ultimaEdicion.split('/');
    let lastSegment = segments[segments.length - 1];
    let url = ultimaEdicion.replace(`/${lastSegment}`, "");
    const ima = `${url}${path}`
    return ima
}