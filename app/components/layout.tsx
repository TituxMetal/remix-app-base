export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen-lg flex h-screen flex-col items-center justify-evenly border-2 border-lime-400 text-2xl'>
      {children}
    </div>
  )
}
