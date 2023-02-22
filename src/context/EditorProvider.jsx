import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { ImageStatus } from './types.d'
const EditorContext = createContext();

const EditorProvider = ({ children }) => {

    const [imageStatus, setImageStatus] = useState(ImageStatus.READY)
    const [imageOriginal, setImageOriginal] = useState(null)
    const [imageModificada, setImageModificada] = useState(null)
    const router = useRouter()
    return(
        <EditorContext.Provider value={{
            imageStatus,
            setImageStatus,
            imageModificada,
            setImageModificada,
            setImageOriginal,
            imageOriginal,
            router
        }}>
            { children }
        </EditorContext.Provider>
    )
}

export {
    EditorProvider
}
export default EditorContext;