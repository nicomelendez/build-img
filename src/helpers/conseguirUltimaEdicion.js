export const conseguirUltimaEdicion = () => {
    const ultimaEdicion = localStorage.getItem('ultimaEdicion')
    return {
        ultimaEdicion: ultimaEdicion && ultimaEdicion !== 'undefined' ? ultimaEdicion : null
    }
}