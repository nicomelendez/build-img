export async function descargarImagen(image) {
  await fetch(image)
    .then((response) => {
      const contentType = response.headers.get('content-type')
      const extension = contentType.split('/')[1]
      return response.blob()
        .then((blob) => {
          const urlBlob = window.URL.createObjectURL(blob)
          const downloadLink = document.createElement('a')
          downloadLink.download = `${'newImage'}.${extension}`
          downloadLink.href = urlBlob
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
          window.URL.revokeObjectURL(urlBlob)
        })
    })
}





