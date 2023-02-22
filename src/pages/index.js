import FormImage from '@/components/FormImage'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout pagina='Inicio' >
      <div>
        <h2 className='text-center text-xl font-semibold text-white pb-5'>
          Sube una imagen para comenzar.
        </h2>
      </div>
      <FormImage />
    </Layout>
  )
}
