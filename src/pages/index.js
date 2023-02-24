import FormImage from '@/components/FormImage'
import { IconPhotoHome } from '@/components/Icons'
import Layout from '@/layout/Layout'



export default function Home() {
  
  return (
    <Layout pagina='Inicio' >
      <div>
        <IconPhotoHome />
      </div>
      <div className='h-full flex flex-col items-center justify-center'>
        <FormImage />
      </div>
    </Layout>
  )
}
