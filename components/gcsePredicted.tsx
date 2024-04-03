import Link from 'next/link'
import React from 'react'

function gcsePredicted() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
            <h2 className="h2 mb-4">Predicted Papers</h2>
            <p className="text-xl text-gray-500">Let's get the tiktok page to 10k followers and youtube to 1k to help as many people out as possible!</p>
          </div>
          <div className='flex flex-col text-blue-700'>
            <a href="/PredictedPapers/OCR Predicted Paper 1 2024.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Predicted Paper 1 - OCR SPEC</a>
            <a href="/PredictedPapers/OCR Predicted Paper 1 2024Markscheme.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Predicted Paper 1 Answers - OCR SPEC</a>
            <a href="/PredictedPapers/OCR Predicted Paper 2 2024.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Predicted Paper 2 - OCR SPEC</a>
            <a href="/PredictedPapers/OCR Predicted Paper 2 2024Markscheme.pdf" target="_blank" className='w-fit mx-auto' rel="noopener noreferrer">Predicted Paper 2 Answers - OCR SPEC</a>

          </div>

          <div className=''> 
          <iframe className='mx-auto mt-10 h-96 w-[350px] md:w-[550px]' src="https://www.youtube.com/embed/9lH-cz4yhkA" title="2024 OCR GCSE Computer Science Predicted Paper 1 Walkthrough" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe className='mx-auto mt-10 h-96 w-[350px] md:w-[550px]' src="https://www.youtube.com/embed/gN0yZe7qdsU" title="2024 OCR GCSE Computer Science Predicted Paper 2 Walkthrough" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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

export default gcsePredicted