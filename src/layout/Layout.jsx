import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Layout({ children, pagina }) {

  let clase = ''

  if(pagina === 'Inicio'){
    clase = 'max-w-[1000px] grid place-content sm:grid-cols-2 mx-auto p-5'
  }
  if(pagina === 'Editar imagen'){
    clase = 'max-w-[1000px] grid place-content mx-auto p-5 aver'
  }
  if(pagina === 'Resultados'){
    clase = 'max-w-[1000px] grid place-content mx-auto p-5'
  }

  return (
    <>
        <Head>
            <title>BuildIMG - { pagina }</title>
            <meta name='description' content='Aplicación para editar tus imagenes'/>
        </Head>
        <div className="max-w-6xl m-auto grid grid-cols-1 place-content-between w-full h-screen ">
            <Nav />
            <main className={clase}>
                { children }
            </main>
            <Footer />
        </div>
    </>
  )
}
