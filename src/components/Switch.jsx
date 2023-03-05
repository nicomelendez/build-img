import useEditor from "@/hooks/useEditor";
import React, { useState } from "react";

function Switch() {

  const { setIsGlobalStateTrue, isGlobalStateTrue } = useEditor()
  
  return (
    <div className="scale-75 sm:scale-100">
      <button onClick={()=>setIsGlobalStateTrue(!isGlobalStateTrue)}>{isGlobalStateTrue ? <p className="font-medium text-white text-xl bg-gradient-to-r from-yellow-500 to-red-500 py-2 px-4 rounded-lg">Español</p> : <p className="font-medium text-white text-xl bg-gradient-to-r from-blue-500 to-red-500 py-2 px-4 rounded-lg">English</p>}</button>
    </div>
  );
}

export default Switch;
