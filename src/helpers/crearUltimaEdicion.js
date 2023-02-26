export const crearUltimaEdicion = (imageModificada) => {
    const lastSlashIndex = imageModificada.lastIndexOf("/");
    const lastQuestionIndex = imageModificada.lastIndexOf("?");
    const result = imageModificada.substring(0, lastSlashIndex) + imageModificada.substring(lastQuestionIndex);
    const urlWithoutParams = result.split('?')[0];
    const path = imageModificada.substring("https://res.cloudinary.com/djslvlh8h/image/upload".length);
    const ima = `${urlWithoutParams}${path}`
    return ima
}