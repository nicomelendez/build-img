import Footer from "@/components/Footer";
import ModalForm from "@/components/modal/ModalForm";
import Nav from "@/components/Nav";
import useEditor from "@/hooks/useEditor";
import Head from "next/head";
import Modal from 'react-modal'

const customStyles = {
  content: {
    background: 'trasparent',
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

export default function Layout({ children, pagina }) {
  let clase = "";
  const { modal } = useEditor()
  if (pagina === "Inicio") {
    clase = "max-w-[1000px] grid place-content sm:grid-cols-2 mx-auto p-5";
  }
  if (pagina === "Editar imagen") {
    clase = "max-w-[1000px] grid place-content mx-auto p-5 aver";
  }
  if (pagina === "Resultados") {
    clase = "max-w-[1000px] grid place-content mx-auto sm:p-5";
  }

  return (
    <>
      <Head>
        <title>BuildIMG - {pagina}</title>
        <meta
          name="description"
          content="Aplicación para editar tus imagenes"
        />
      </Head>
      <div className="max-w-6xl m-auto grid grid-cols-1 place-content-between w-full h-screen ">
        <Nav />
        <main className={clase}>{children}</main>
        <Footer />
      </div>

      {modal && (<Modal isOpen={modal} style={customStyles}>
         <ModalForm />
      </Modal>)}
    </>
  );
}
