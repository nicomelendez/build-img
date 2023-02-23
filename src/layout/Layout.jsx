import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Layout({ children, pagina }) {
  return (
    <>
        <Head>
            <title>BuildIMG - { pagina }</title>
            <meta name='description' content='Aplicación para editar tus imagenes'/>
        </Head>
        <div className="flex flex-col justify-start items-center h-screen w-full">
            <Nav />
            <main className='max-w-[1000px] mx-auto mb-10 sm:p-5'>
                { children }
            </main>
            <Footer />
        </div>
    </>
  )
}
