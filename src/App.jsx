import React from 'react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import FormValidation from './components/FormValidation'

const App = () => {
  return (
  <div>
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* logo */}
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center text-xl'>F</div>
              <div className='ml-3'>
                <h1 className='text-xl font-bold text-yellow-800'>FormApp</h1>
                <p className='text-xs text-gray-500'>Simple FormValidation</p>
              </div>
            
          </div>

        {/* right icon */}
<div className='flex items-center space-x-4'>
  <span className='text-xl cursor-pointer'>🔔</span>
  <div className='flex items-center space-x-2'>
    <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
    <span className='hidden sm:block font-medium'>John Doe</span>
  </div>
</div>
        </div>
      </div>
    </header>

    {/* body */}
<div className='flex flex-1'>
  <Sidebar/>
  {/* main content */}
  <main className='flex-1 p-4 lg:p-8'>
    <div className='max-w-4xl mx-auto'>
      <FormValidation/>
    </div>
  </main>
</div>
    <Footer/>
  </div>
</div>
  )
}

export default App
