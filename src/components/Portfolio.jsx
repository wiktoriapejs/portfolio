import React from 'react'
import hypeFriends from "../assets/portfolio/hypefriends.png"
import recipeBuddy from "../assets/portfolio/RecipeBuddy.png"
import easySpain from "../assets/portfolio/easyspain.png"




const Portfolio = () => {


const portfolios=[
  {
    id:1,
    src: hypeFriends,
    code: 'https://github.com/wiktoriapejs/hype-friends.git',
    demo: 'https://hype-friends.vercel.app/'
  },
  {
    id:2,
    src: recipeBuddy,
    demo: 'https://recipie-buddy-production.up.railway.app/',
    code: 'https://github.com/wiktoriapejs/Recipie-Buddy.git'
  },

  

]


  return (

    <div name="portfolio" className=' h-screen pt-[4rem] sm:pt-10  w-full  bg-gradient-to-b from-white to-gray-300  text-black pb-20 '> 
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:pt-[0rem]  md:pt-[75rem]  pt-[68rem]'>
          <div className='pb-8 '>
              <p className=' text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
              <p className='py-3'>Check out some of my work right here</p>
          </div>

          <div  className=' grid grid-cols-1 lg:grid-cols-3 gap-8 px-12 sm:px-0 '>

          {
            portfolios.map(({id, src, demo, code}) => (

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-110' />
              <div className='flex items-center text-center justify-center'>
                <a href={demo} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6  m-4 duration-200 hover:scale-125'>
                  Demo
                </a>
                <a href={code} target='_blank' rel='noopener noreferrer' className='w-1/2 px-6 m-4 duration-200 hover:scale-125 '>
                  Code
                </a>
              </div>
            </div>
  

            ))
          }

            <div  className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={easySpain} alt='' className='rounded-md duration-200 hover:scale-110' />
              <div className='flex items-center text-center justify-center'>
                <a  target='_blank' rel='noopener noreferrer' className='w-1/2 px-6  m-4 '>
                  Wordpress
                </a>
            
                <a
  href="https://easyspain.pl/"
  target='_blank'
  rel='noopener noreferrer'
  className='w-1/2 px-6 m-4 duration-200 hover:scale-125'
>
  Link
</a>

              </div>
            </div>
     </div>


       

      </div>



    </div>
  )
}

export default Portfolio
