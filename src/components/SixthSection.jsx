import React from 'react'

const SixthSection = () => {
  return (
    <div className='bg-[--banner-color]'>
        <div className="relative isolate px-6 py-14 lg:px-8">
          <div className="text-center w-full">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Win more business with less work.
            </h1>
            <p className="lg:mt-10 mt-5 text-xl max-w-3xl mx-auto text-gray-200 ">
              Routing Forms help you screen and qualify website visitors, automate scheduling, and offers a seamless user experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm bg-[--primary-color] text-white hover:bg-[#004EBA] hover:duration-300"
              >
                Start for free
              </a>
              <a
                href="#"
                className="rounded-full px-6 py-3 text-sm font-semibold outline outline-white text-white outline-2"
              >
                Talk with sales
              </a>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default SixthSection