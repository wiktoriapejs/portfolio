import React from 'react'
import MyImage from "../assets/CVphoto1.jpeg"
import {MdKeyboardArrowRight} from "react-icons/md"
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen  w-full bg-gradient-to-b from-white via-white to-gray-200"
    >
      <div className=" max-w-screen-lg  mx-auto  md:pt-[5rem] flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mb-[-100px] md:mb-0 flex flex-col justify-center h-full">
          <h2 className="pt-[9rem] sm:pt-0 text-4xl sm:text-7xl font-bold text-black">
           Hello, I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md " >
            I love to work on web application using technologies like
            React, Tailwind, MongoDb, or MySql. I'm excited to create safe and user-friendly web applications that leave a lasting impression.
          </p>

          <div>
            <Link
              to="portfolio"
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#8890A4] via-gray to-black cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className='md:pl-[4rem] pb-14 pt-[7rem] sm:pt-[3rem] md:pt-0'>
          <img
            src={MyImage} 
            alt="my profile"
            className="rounded-full mx-auto my-auto pl-5 md:w-[80%]  " 
          />
        </div>
      </div>
    </div>
  
  )
}

export default Home
