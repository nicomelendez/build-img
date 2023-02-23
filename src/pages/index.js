import FormImage from '@/components/FormImage'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout pagina='Inicio' >
      <div className='h-full flex flex-col items-center justify-center'>
      <h2 className='text-center px-2 text-2xl lg:text-4xl font-black text-white uppercase pb-5 sombra' style={{ lineHeight: '1.2', wordWrap: 'break-word' }}>
        <span className='block'>¡Sube una <span className='bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text'>imagen</span></span> y comienza a <span className='bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text'>personalizarla</span>!
      </h2>
        <FormImage />
      </div>
    </Layout>
  )
}
