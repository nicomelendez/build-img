import useEditor from "@/hooks/useEditor"

export default function Nav() {

  const { router } = useEditor()



  return (
    <nav className="bg-[#07182E] w-full border-gray-200">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center justify-center py-5 hover:cursor-default responsivelogoti">
                <button onClick={()=>{router.push('/')}} className="">
                    <h2 className="text-4xl sm:ml-10 font-extrabold leading-none tracking-tight text-white  tituloresplogo">Build <mark className="px-2 text-white rounded bg-gradient-to-r from-blue-500 to-violet-600">IMG</mark></h2>
                </button>
            </div>
        </div>
    </nav>
  )
}
