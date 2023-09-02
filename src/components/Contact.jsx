import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-white to-gray-300 w-full text-black pb-20 pt-[50rem] sm:pt-[48rem] md:pt-[30rem] lg:pt-[5rem] '>
      
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:pt-[0rem]  md:pt-[30rem]  pt-[20rem]">
            <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below to get touch with me</p>
            </div> 

            <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/3dd6d130-04a7-4666-a07c-06df46d220f8' method='POST' className='flex flex-col w-full md:w-1/2'>

                <input 
                type='text' 
                name='name' 
                placeholder='Enter your name' 
                className='p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'
                />

                <input 
                type='text' 
                name='e-mail' 
                placeholder='Enter your e-mail' 
                className='p-2 my-4 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'
                />

                <textarea
                name='message'
                rows="10"
                placeholder='Enter your message'
                className='p-2 bg-transparent border-2 border-black rounded-md text-black focus:outline-none'>
                </textarea>

                <button className='text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                    Let's talk
                </button>
            </form>
        </div>
        </div>



    </div>
  )
}

export default Contact
