import { useDropzone } from 'react-dropzone';
import useEditor from '@/hooks/useEditor';
import { ImageStatus } from '@/context/types.d';
import Cargando from './Cargando';
import useCloudinary from '@/hooks/useCloudinary';

export default function FormImage() {

  const {imageStatus} = useEditor()
  const {uploadImage} = useCloudinary()

  const {getRootProps, getInputProps, open} = useDropzone({
    noClick: true,
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      handleDrop(acceptedFiles)
    }
  });
  
  const handleDrop = async (acceptedFiles) => {
    await Promise.all(
      acceptedFiles.map(async (file) => await uploadImage(file))
    );
  };
  

  return (
    <section className="card mx-auto w-11/12 lg:min-w-[400px] lg:max-h-[400px] aspect-video lg:aspect-square">
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
