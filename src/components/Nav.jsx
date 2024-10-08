import useEditor from "@/hooks/useEditor";
import Switch from "./Switch";

export default function Nav() {
  const { router } = useEditor();

  return (
    <nav className="bg-[#07182E] px-2 sm:px-5 w-full border-gray-200 ">
      <div className="flex items-center sm:flex-row justify-between mx-auto">
        <div className="flex items-center justify-center py-5 hover:cursor-default">
          <button
            onClick={() => {
              router.push("/");
            }}
            className=""
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-none tracking-tight text-white  tituloresplogo">
              Build{" "}
              <mark className="px-2 text-white rounded bg-gradient-to-r from-blue-500 to-violet-600">
                IMG
              </mark>
            </h2>
          </button>
        </div>
        <Switch />
      </div>
    </nav>
  );
}
