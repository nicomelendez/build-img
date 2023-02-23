import { max } from "@cloudinary/url-gen/actions/roundCorners"
import { grayscale, blur, backgroundRemoval } from "@cloudinary/url-gen/actions/effect"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import useEditor from "./useEditor";

export default function useCloudinary() {

    const {setDatosDeImagen} = useEditor()

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
      console.log(imagenGris)
      return imagenGris.toURL()
    }

    const filtroSacarFondo = (public_id) => {
    const imageWithoutBackground = cloudinary
    .image(public_id)
    .effect(backgroundRemoval())
    setDatosDeImagen(imageWithoutBackground.publicID)
    return imageWithoutBackground.toURL()
    }
    
    const filtroSize = (public_id, largo, alto) =>{
     const imageConTexto = cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto));
     setDatosDeImagen(imageConTexto.publicID)
     return imageConTexto.toURL()
    }

    const filtroBlur = (public_id, gradoBlur) => {
    const imagenGris = cloudinary.image(public_id).effect(blur().strength(gradoBlur));
    setDatosDeImagen(imagenGris.publicID)
    return imagenGris.toURL()
    }

    const filtroAvatar = (public_id, largo, alto) => {
    const imagenGris = cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto).gravity(focusOn(face()))).roundCorners(max())
    setDatosDeImagen(imagenGris.publicID)
    return imagenGris.toURL()
    }

  return {
    filtroBlur,
    filtroGris,
    filtroSacarFondo,
    filtroSize,
    filtroAvatar
  }
}
