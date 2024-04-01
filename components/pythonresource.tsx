import Link from 'next/link'
import React from 'react'

function pythonresource() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="h2 mb-4">Python Resources</h2>
            <p className="text-xl text-gray-500">Let's get the youtube channel to 1k subscribers to help as many people out as possible! The challenges will help you get good at python wheather your in y9 or in y13 doing a levels, it is applicable to everyone. Walkthrough on these questions will be available soon but if you want any urgently use the request a topic button to let me know!</p>
          </div>
          <div className='flex flex-col text-blue-700'>
            <a href="/PythonResource/PythonChallenges.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Python Booklet - Questions ranging from easy to difficult</a>
          </div>
          <div className=''>
          <iframe className='mx-auto mt-10 h-96 w-[350px] md:w-[550px]' src="https://www.youtube.com/embed/QAB2IZro2v8" title="ALL the PYTHON you need for GCSE COMPUTER SCIENCE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

          </div>




        </div>
        <div className='w-fit mx-auto'>
          <Link href="https://www.youtube.com/@TheGCSEComputerScienceTutor" className="btn-sm rounded-full text-white bg-blue-700 mb-10 hover:bg-purple-700 ">
            Drop a follow!
          </Link>

        </div>
      </div>
    </section>
  )
}

export default pythonresource