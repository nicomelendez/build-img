import { useDropzone } from 'react-dropzone';
import useEditor from '@/hooks/useEditor';
import { ImageStatus } from '@/context/types.d';
import Cargando from './Cargando';

export default function FormImage() {

  const {setImageOriginal, setImageModificada, setImageStatus, imageStatus, router, setDatosDeImagen} = useEditor()
  
  const {getRootProps, getInputProps, open} = useDropzone({
    noClick: true,
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      handleDrop(acceptedFiles)
    }
  });
  
  const uploadImage = async (file) => {
    setImageStatus(ImageStatus.UPLOADING)
    const formData = new FormData();
    formData.append("upload_preset", "mi0or3cn");
    formData.append("timestamp", Date.now() / 1000);
    formData.append("api_key", 456894211284456);
    formData.append("file", file);
  
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/djslvlh8h/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if(response.ok){
      const data = await response.json();
      const { public_id: publicId, secure_url: url } = data
    
      setDatosDeImagen(publicId)
      setImageModificada(url)
      setImageOriginal(url)
      setImageStatus(ImageStatus.DONE)
      router.push('/editor')
    }
    setImageStatus(ImageStatus.READY)
  };
  
  const handleDrop = async (acceptedFiles) => {
    await Promise.all(
      acceptedFiles.map(async (file) => await uploadImage(file))
    );
  };
  

  return (
    <section className="card mx-auto w-full lg:w-2/5 aspect-square">
      {imageStatus === ImageStatus.UPLOADING 
      ? (<Cargando />) 
      : (<div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <div className='flex flex-col gap-4'>
              <button type="button" onClick={open} className='hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-bold px-6 py-4'>Subir archivo</button>
              <strong>O arrastra un archivo.</strong>
            </div>
          </div>)}
    </section>
  );
}
