import { grayscale, blur, backgroundRemoval } from "@cloudinary/url-gen/actions/effect"
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

export default function useCloudinary() {

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
      return imagenGris.toURL()
    }

    const filtroSacarFondo = (public_id) => {
    const imageWithoutBackground = cloudinary
    .image(public_id)
    .effect(backgroundRemoval())
    return imageWithoutBackground.toURL()
    }
    
    const filtroSize = (public_id, largo, alto) =>{
     const imageConTexto = cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto));
     return imageConTexto.toURL()
    }

    const filtroBlur = (public_id, gradoBlur) => {
    const imagenGris = cloudinary.image(public_id).effect(blur().strength(gradoBlur));
    return imagenGris.toURL()
    }

  return {
    filtroBlur,
    filtroGris,
    filtroSacarFondo,
    filtroSize
  }
}
