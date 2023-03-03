export const conseguirListaDeEfectos = () => {
    const listaDeEfectosG = JSON.parse(localStorage.getItem("listaDeEfectos") || "[]");
    return {
        listaDeEfectosG: listaDeEfectosG && listaDeEfectosG !== 'undefined' ? listaDeEfectosG : null
    }
}