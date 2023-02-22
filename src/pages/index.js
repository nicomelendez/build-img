import FormImage from '@/components/FormImage'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout pagina='Inicio' >
      <div className='h-full flex flex-col items-center justify-center'>
        <h2 className='text-center text-xl font-semibold text-white pb-5'>
          ¡Sube una imagen y comienza a personalizarla!
        </h2>
        <FormImage />
      </div>
    </Layout>
  )
}
