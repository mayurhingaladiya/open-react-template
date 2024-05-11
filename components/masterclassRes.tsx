import Link from 'next/link'
import React from 'react'

function masterclassRes() {
    return (
        <section className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-b border-gray-800">
                    <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16">
                        <h2 className="text-3xl font-bold mb-4 text-pink-500">3-Hour Masterclass: Boost Your Coding Skills</h2>
                        <p className="text-xl text-blue-700">Join our online <span className='font-bold'>exclusive</span> masterclass to excel in coding questions for OCR GCSE Computer Science!</p>
                        <p className="text-xl text-black">Next session: Saturday, 18th May 2024</p>
                        <p className="text-xl text-black">Time: 3pm to 6pm</p>
                        <p className="text-xl text-black">Price: £25</p>
                        <div className="mt-8">
                            <a href="https://buymeacoffee.com/gcsecomputersciencetutor/e/253356" className="btn rounded-full text-white bg-blue-700 hover:bg-blue-600 px-8 py-3">Pay Now</a>
                        </div>
                    </div>

                    {/* Question Section */}
                    <div className="max-w-3xl mx-auto pb-8 md:pb-16">
                        <h3 className="text-2xl text-center font-semibold mb-4">What's it About?</h3>
                        <p className="text-lg text-center text-gray-700">If you're preparing for OCR GCSE Computer Science and need help or guidance with coding / pseudocode questions in Paper 2, this masterclass is perfect for you! In this 3-hour session, we'll dive deep into how to tackle pseudocode/Python questions effectively. You'll also get access to quizzes with exciting prizes and receive predicted coding questions for your exam. Don't miss out on this opportunity to boost your skills and ace your exam!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default masterclassRes