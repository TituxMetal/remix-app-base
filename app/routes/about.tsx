import { Link } from '@remix-run/react'

import { Button, Layout } from '~/components'

const AboutRoute = () => {
  return (
    <Layout>
      <h1 className='text-5xl font-bold text-blue-500'>About Page</h1>
      <p className='text-2xl text-red-400'>This is the abouts page</p>
      <Button>
        Go to{' '}
        <Link to='/' className='font-bold'>
          Index Page
        </Link>
      </Button>
      <Button>
        Go to{' '}
        <a href='/api/hello' className='font-bold'>
          Api Route
        </a>
      </Button>
    </Layout>
  )
}

export default AboutRoute
