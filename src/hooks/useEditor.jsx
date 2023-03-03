import { useContext } from "react";
import EditorContext from "@/context/EditorProvider";

const useEditor = () => {
  return useContext(EditorContext);
};

export default useEditor;
