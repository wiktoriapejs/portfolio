import React from 'react'
import {MdKeyboardArrowRight} from "react-icons/md"
import MyImage from "../assets/mee.png"
import { Link } from "react-scroll";


const About = () => {
 
  return (
    <div  name="about" className=" h-screen pt-[5rem] md:pt-10 w-full bg-gradient-to-b from-gray-200 via-gray to-white ">

<div className='lg:mx-20 lg:ml-[12rem] lg:mr-[9rem]'>
          <p className="text-4xl text-end  font-bold border-b-4 border-gray-500 p-2 ">
            About me
          </p>
          <p className='text-l text-center font-semibold pt-6 lg:mx-8'>        Welcome to my digital corner! I'm thrilled to have you here. My name is Wiktoria Pejs, and I'm a passionate full-stack developer with an open mind full of creativity and enthusiasm for learning.</p>

        </div>
     
      <div  className=' lg:ml-[10rem] lg:mr-20 mx-2 flex flex-col gap-y-5  lg:flex-row lg:items-center'>

      <img
            src={MyImage}
            alt="my profile"
            className="flex-1 bg-about bg-contain bg-no-repeat  mx-8 lg:h-[450px] h-[500px] bg-top"
          /> 
     
        <div className='text-center md:pr-12'  >
           
        <div className='text-base mt-[3rem] lg:mx-4 text-justify'>
        <p>
       Holding a degree in Computing Science from the Goldsmiths University of London, I've honed my skills and expertise in creating websites and databases.
       With a strong foundation in React, Tailwind, MongoDB, MySql, and JavaScript. I have embraced the knowledge of the constantly evolving world of technology and always try to stay up to date with the latest trends.   </p>
      <p className='py-3'>I'm not just a tech enthusiast – I love to travel, and I'm a person who thrives on experiencing diverse cultures and exploring new horizons. I've also worked as a certified Personal Trainer. That journey not only sculpted my body but moreover taught me discipline, perseverance, and the art of motivating others.</p>
      <p>In my life, I have tried many things beyond technology. As a part of my summer job, I was also a children's animator and tutor, which gave me patience, responsibility, creativity, and the ability to simplify complex concepts. </p>
      <p className='font-semibold pt-4 text-center'>I invite you to explore my portfolio, a little collection of my projects. If you're looking for a developer who brings a holistic perspective to the table – you're in the right place. Let's do this together!</p>
      </div>

          <div className='flex items-center justify-center mt-5'> 
            <Link
              to="portfolio"
              duration={500}
              className="group justify-center text-white w-fit px-6 py-3 my-2 flex text-center items-center rounded-md bg-gradient-to-r from-[#8890A4] via-gray to-black cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

  
</div>
    

     </div>

   
  
    </div>
  )
}

export default About
