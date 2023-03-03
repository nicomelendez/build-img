import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});

export default async function celebrityDetection(req, res) {
    const { publicId } = req.body;
     console.log(publicId)
    try {
      const result = await cloudinary.uploader.upload(publicId, {
        detection: "aws_rek_face",
      });
      console.log(result)
      res.status(200).json(result);
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "Error en la detección de celebridades" });
    }
  }