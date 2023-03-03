export const almacenarListaDeEfectos = (listaDeEfectos) =>{
    localStorage.setItem('listaDeEfectos', JSON.stringify(listaDeEfectos))
}