import { EditorProvider } from "@/context/EditorProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <EditorProvider>
      <Component {...pageProps} />
    </EditorProvider>
  );
}
