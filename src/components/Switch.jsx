import useEditor from "@/hooks/useEditor";
import React, { useState } from "react";

function Switch() {

  const { setIsGlobalStateTrue, isGlobalStateTrue } = useEditor()
  const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

  return (
    <div className="scale-75 sm:scale-100">
      <button onClick={()=>setIsGlobalStateTrue(!isGlobalStateTrue)}>{isGlobalStateTrue ? <p className="font-medium text-white flex items-center  gap-1 text-xl bg-gradient-to-r from-yellow-500 to-red-500 py-2 px-4 rounded-lg">Español {icon}</p> : <p className="font-medium text-white text-xl bg-gradient-to-r flex gap-1 items-center from-blue-500 to-red-500 py-2 px-4 rounded-lg">English {icon}</p>}</button>
    </div>
  );
}

export default Switch;
