import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_API_SECRET,
});

export default async function detect(req, res) {
    const { public_id } = req.body;

    try {
        const result = await cloudinary.uploader.upload(public_id, {
          detection: 'coco_v1',
          auto_tagging: 0.6,
        });
        res.status(200).json({
            respuesta: 'success',
            data: result
        });
      } catch (error) {
        res.status(500).json({
            respuesta: 'error',
            data: null
        });
      }
  }
