import { max } from "@cloudinary/url-gen/actions/roundCorners"
import { grayscale, blur, backgroundRemoval, colorize } from "@cloudinary/url-gen/actions/effect"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import useEditor from "./useEditor";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from '@cloudinary/transformation-builder-sdk/qualifiers/textStyle'
import { ImageStatus } from '@/context/types.d';

export default function useCloudinary() {

    const {setDatosDeImagen, setImageOriginal, setImageModificada, setImageStatus, router} = useEditor()

  
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

    const cloudinary = new Cloudinary({
      cloud: {
        cloudName: "djslvlh8h",
      },
      url: {
        secure: true,
      },
    });

    const filtroGris = (public_id) => {
      const imagenGris = cloudinary.image(public_id).effect(grayscale());
      setDatosDeImagen(imagenGris.publicID)
      return imagenGris.toURL()
    }
    const filtroPrimavera = (public_id) => {
      const imagenPrimaver = cloudinary.image(public_id).effect(colorize().level(10).color("#A1F36F")).effect(colorize().level(10).color("#0E8B42")).effect(colorize().level(10).color("#FFFFFF"));;
      setDatosDeImagen(imagenPrimaver.publicID)
      return imagenPrimaver.toURL()
    }
    const filtroOtnio = (public_id) => {
      const imagenOtnio = cloudinary.image(public_id).effect(colorize().level(10).color("#FFA902")).effect(colorize().level(10).color("#FAFF07")).effect(colorize().level(10).color("#FFFFFF"));
      setDatosDeImagen(imagenOtnio.publicID)
      return imagenOtnio.toURL()
    }
    const filtroInvierno = (public_id) => {
      const imagenInvierno = cloudinary.image(public_id).effect(colorize().level(10).color("#02F0FF")).effect(colorize().level(10).color("#076FFF")).effect(colorize().level(10).color("#FFFFFF"));;
      setDatosDeImagen(imagenInvierno.publicID)
      return imagenInvierno.toURL()
    }
    
    const filtroGif = async(image_url) => {
     

    }

    const filtroSacarFondo = (public_id) => {
    const imageWithoutBackground = cloudinary
    .image(public_id)
    .effect(backgroundRemoval())
    setDatosDeImagen(imageWithoutBackground.publicID)
    return imageWithoutBackground.toURL()
    }
    
    const filtroSize = (public_id, largo, alto) =>{
     const imageSize= cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto));
     setDatosDeImagen(imageSize.publicID)
     return imageSize.toURL()
    }

    const filtroBlur = (public_id, gradoBlur) => {
    const imagenBlur = cloudinary.image(public_id).effect(blur().strength(gradoBlur));
    setDatosDeImagen(imagenBlur.publicID)
    return imagenBlur.toURL()
    }

    const filtroAvatar = (public_id, largo, alto, letras, sizeLetras) => {

      console.log(letras, sizeLetras)
      if(letras && sizeLetras){
        const imagenAvatar = cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto).gravity(focusOn(face()))).roundCorners(max()).effect(blur().strength(200)).overlay(
          source(
            text(letras, new TextStyle("Arial", sizeLetras).fontWeight("bold")).textColor(
              "white"
            )
          )
        )
        setDatosDeImagen(imagenAvatar.publicID)
        return imagenAvatar.toURL()
      }

    const imagenAvatar = cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto).gravity(focusOn(face()))).roundCorners(max())
    setDatosDeImagen(imagenAvatar.publicID)
    return imagenAvatar.toURL()
    }

  return {
    filtroBlur,
    filtroGris,
    filtroSacarFondo,
    filtroSize,
    filtroAvatar,
    filtroPrimavera,
    filtroOtnio,
    filtroInvierno,
    filtroGif,
    uploadImage
  }
}
