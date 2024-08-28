import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

import { Button, Layout } from '~/components'

export const meta: MetaFunction = () => [
  { title: 'New Remix App' },
  { name: 'description', content: 'Welcome to Remix App!' }
]

const Index = () => {
  return (
    <Layout>
      <h1 className='text-5xl font-bold text-orange-500'>Welcome to Remix App</h1>
      <p className='text-pink-400'>Hello World!</p>
      <Button>
        Go to{' '}
        <Link to='about' className='font-bold'>
          About
        </Link>
      </Button>
    </Layout>
  )
}

export default Index
