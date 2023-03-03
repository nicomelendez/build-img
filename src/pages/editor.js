import Herramientas from "@/components/Herramientas";
import ImageEditor from "@/components/ImageEditor";
import Layout from "@/layout/Layout";

export default function Editor() {
  return (
    <Layout pagina="Editar imagen">
      <Herramientas />
      <ImageEditor />
    </Layout>
  );
}
