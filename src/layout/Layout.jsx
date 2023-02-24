import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Layout({ children, pagina, editor }) {
  return (
    <>
        <Head>
            <title>BuildIMG - { pagina }</title>
            <meta name='description' content='Aplicación para editar tus imagenes'/>
        </Head>
        <div className="max-w-6xl m-auto grid grid-cols-1 place-content-between w-full h-screen ">
            <Nav />
            <main className={editor ? 'max-w-[1000px] grid place-content mx-auto sm:p-5 aver' : 'max-w-[1000px] grid place-content sm:grid-cols-2 mx-auto sm:p-5'}>
                { children }
            </main>
            <Footer />
        </div>
    </>
  )
}
