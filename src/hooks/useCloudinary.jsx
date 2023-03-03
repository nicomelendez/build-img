import { max } from "@cloudinary/url-gen/actions/roundCorners"
import { grayscale, blur, backgroundRemoval, colorize, pixelate } from "@cloudinary/url-gen/actions/effect"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { Position } from "@cloudinary/url-gen/qualifiers";
import { source } from "@cloudinary/url-gen/actions/overlay";
import {  advancedEyes } from "@cloudinary/transformation-builder-sdk/qualifiers/focusOn";
import { face, faces } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import useEditor from "./useEditor";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from '@cloudinary/transformation-builder-sdk/qualifiers/textStyle'
import { ImageStatus } from '@/context/types.d';
import { almacenarFotos } from "@/helpers/almacenarFotos";
import { cutByImage } from '@cloudinary/url-gen/actions/reshape'
import { Transformation  } from '@cloudinary/url-gen/transformation/Transformation'
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {north} from "@cloudinary/url-gen/qualifiers/compass";
import {scale} from "@cloudinary/url-gen/actions/resize";
import Swal from "sweetalert2";
import { viesusCorrect } from "@cloudinary/url-gen/actions/adjust";

export default function useCloudinary() {

    const {setDatosDeImagen, setImageOriginal, setImageModificada, setImageStatus, router, setMultipleEdicion,cambiarProcesoDeImagen, cambiarImagenModificada} = useEditor()

  
  const uploadImage = async (file) => {
    setImageStatus(ImageStatus.UPLOADING)
    localStorage.clear()
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
      almacenarFotos(url, url, publicId)
      setImageModificada(url)
      setImageOriginal(url)
      setMultipleEdicion(url)
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


    const filtroOverlayFace = (public_id, idOverlay, medida) => {

      cambiarProcesoDeImagen(true);
      const imagenMostacho = cloudinary.image(public_id).overlay(
        source(
          image(idOverlay).transformation(
            new Transformation().resize(scale().width(medida).regionRelative())
          )
        ).position(new Position().gravity(focusOn(faces())))
      );
      setDatosDeImagen(String(imagenMostacho.publicID))
            
      cambiarImagenModificada(imagenMostacho.toURL());
      return 
    }

    const filtroOverlayCabeza = (public_id, idOverlay) => {

      cambiarProcesoDeImagen(true);
      const imagenEditada = cloudinary.image(public_id).overlay(
        source(
          image(idOverlay).transformation(
            new Transformation().resize(scale().width('1.09').regionRelative())
          )
        ).position(new Position().gravity(focusOn(north())))
      );
      setDatosDeImagen(String(imagenEditada.publicID))
            
      cambiarImagenModificada(imagenEditada.toURL());

      return 
    }

    const conseguirImagen = (public_id) => {
      const imagen = cloudinary.image(public_id)
      return imagen.toURL()
    }
    const filtroGris = (public_id) => {
      const imagenGris = cloudinary.image(public_id).effect(grayscale());
     
      setDatosDeImagen(String(imagenGris.publicID))
      return imagenGris.toURL()
    }
    const filtroPrimavera = (public_id) => {
   
      const imagenPrimaver = cloudinary.image(public_id).effect(colorize().level(10).color("#A1F36F")).effect(colorize().level(10).color("#FFFFFF")).effect(colorize().level(10).color("#FA00FF"));;
      setDatosDeImagen(String(imagenPrimaver.publicID))
      return imagenPrimaver.toURL()
    }
    const filtroOtnio = (public_id) => {
      const imagenOtnio = cloudinary.image(public_id).effect(colorize().level(10).color("#FFA902")).effect(colorize().level(10).color("#FAFF07")).effect(colorize().level(10).color("#618570"));
      setDatosDeImagen(String(imagenOtnio.publicID))
      return imagenOtnio.toURL()
    }
    const filtroInvierno = (public_id) => {
      const imagenInvierno = cloudinary.image(public_id).effect(colorize().level(10).color("#02F0FF")).effect(colorize().level(10).color("#076FFF")).effect(colorize().level(10).color("#FFFFFF"));;
      setDatosDeImagen(String(imagenInvierno.publicID))
      return imagenInvierno.toURL()
    }
    
    const filtroMejorar = (public_id) => {
      const imagenMejorada = cloudinary.image(public_id).adjust(viesusCorrect()).setSignature("58dQFhjW")
      console.log(imagenMejorada.toURL())
      setDatosDeImagen(String(imagenMejorada.publicID))
      return imagenMejorada.toURL()
    }

    const filtroSacarFondo = (public_id) => {
    const imageWithoutBackground = cloudinary
    .image(public_id)
    .effect(backgroundRemoval())
    setDatosDeImagen(String(imageWithoutBackground.publicID))
    return imageWithoutBackground.toURL()
    }
    
    const filtroSize = (public_id, largo, alto) =>{
     const imageSize= cloudinary.image(public_id).effect(Resize.fill().width(largo).height(alto));
     setDatosDeImagen(String(imageSize.publicID))
     return imageSize.toURL()
    }

    const filtroBlur = (public_id, gradoBlur) => {
    const imagenBlur = cloudinary.image(public_id).effect(blur().strength(gradoBlur));
    setDatosDeImagen(String(imagenBlur.publicID))
    return imagenBlur.toURL()
    }

    const filtroTitulo = (public_id, texto, sizeFuente)=>{
      const imagenTitulo = cloudinary.image(public_id).reshape(
        cutByImage(text(String(texto), new TextStyle("Coustard", sizeFuente).fontWeight("bold")))
      );
      return imagenTitulo.toURL()
    }

    const filtroAvatar = (public_id, tamAvatar, letras, sizeLetras) => {
        
      if(letras && sizeLetras){
        const imagenAvatar = cloudinary.image(public_id).effect(Resize.fill().width(Number(tamAvatar)).height(Number(tamAvatar)).gravity(focusOn(face()))).roundCorners(max()).effect(blur().strength(200)).overlay(
          source(
            text(letras, new TextStyle("Arial", sizeLetras).fontWeight("bold")).textColor(
              "white"
            )
          )
        )
        setDatosDeImagen(String(imagenAvatar.publicID))
        return imagenAvatar.toURL()
      }

    const imagenAvatar = cloudinary.image(public_id).effect(Resize.fill().width(Number(tamAvatar)).height(Number(tamAvatar)).gravity(focusOn(face()))).roundCorners(max())
    setDatosDeImagen(String(imagenAvatar.publicID))
    return imagenAvatar.toURL()
    }

    const pixelearZona = (public_id) => {
      const imagenPixel= cloudinary.image(public_id).effect(
        pixelate()
          .squareSize(50)
          .region(faces())
      )
      setDatosDeImagen(String(imagenPixel.publicID))
      return imagenPixel.toURL()

    }
    const filtroOverlayLentes = (public_id, overlay, medidas) =>{
      return Swal.fire({
        icon: 'info',
        title: 'En construcción',
        text: 'Disponible a la brevedad!',
      })
      // cambiarProcesoDeImagen(true);
      // const imagenOverlay = cloudinary.image(public_id).overlay(
      //   source(
      //     image(overlay).transformation(
      //       new Transformation().resize(scale().width(medidas).regionRelative())
      //     )
      //   ).position(new Position().gravity(focusOn(advancedEyes())))
      // );
      // setDatosDeImagen(String(imagenOverlay.publicID))
      // cambiarImagenModificada(imagenOverlay.toURL());      
      // return 
    }
  return {
    filtroBlur,
    filtroGris,
    pixelearZona,
    filtroSacarFondo,
    filtroOverlayLentes,
    filtroSize,
    filtroOverlayFace,
    filtroAvatar,
    filtroPrimavera,
    conseguirImagen,
    filtroOtnio,
    filtroInvierno,
    pixelearZona,
    filtroMejorar,
    filtroTitulo,
    filtroOverlayCabeza,
    uploadImage
  }
}
