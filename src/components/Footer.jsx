import { IconCloudBinary } from "./Icons";

export default function Footer() {
  return (
    <footer className="p-5 flex flex-col text-xs gap-4 lg:flex-row lg:gap-0 justify-around items-center text-white lg:text-xl w-full mx-auto bg-[#07182E]">
      <p className="">Diseñado por Nicolás Meléndez</p>
      <a className="text-center" href="https://cloudinary.com" target="_blank" rel="noreferrer"
      > Hecho con <IconCloudBinary /></a>       
    </footer>
  )
}
