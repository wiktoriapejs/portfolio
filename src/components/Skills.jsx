import React from 'react'
import bootstrap from "../assets/icons/bootstrap.svg"
import css from "../assets/icons/css.svg"
import express from "../assets/icons/express.svg"
import figma from "../assets/icons/figma.svg"
import git from "../assets/icons/git.svg"
import github from "../assets/icons/github-original-wordmark.svg"
import html5 from "../assets/icons/html5-original-wordmark.svg"
import lightroom from "../assets/icons/adobe-lightroom-icon.webp"
import java from "../assets/icons/java.svg"
import javascript from "../assets/icons/javascript-original.svg"
import linkedIn from  "../assets/icons/linkedin.svg"
import mongodb from "../assets/icons/mongodb.svg"
import mysql from "../assets/icons/mysql.svg"
import nodejs from "../assets/icons/nodejs-plain-wordmark.svg"
import npm from "../assets/icons/npm-original-wordmark.svg"
import photoshop from "../assets/icons/photoshop-line.svg"
import rapidApi from "../assets/icons/rapidapi_logo_icon_168880.png"
import react from "../assets/icons/react-original.svg"
import tailwindCss from "../assets/icons/tailwind-css.svg"
import wordpress from "../assets/icons/wordpress.svg"
import adobeXd from "../assets/icons/xd-line.svg"




const Skills = () => {

const technologies = [
    {
        id:1,
        src: html5,
        title: "HTML",
        style: "shadow-orange-500",

    },
    {
        id:2,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-500",

    },
    {
        id:3,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",

    },
    {
        id:4,
        src: express,
        title: "Express",
        style: "shadow-black pt-10",

    },
    {
        id:5,
        src: figma,
        title: "Figma",
        style: "shadow-green-500",

    },
    {
        id:6,
        src: git,
        title: "Git",
        style: "shadow-orange-500 pt-10",

    },
    {
        id:7,
        src: github,
        title: "GitHub",
        style: "shadow-gray-500",

    },
    
    {
        id:8,
        src: lightroom,
        title: "Lightroom",
        style: "shadow-blue-700",

    },
    {
        id:9,
        src: java,
        title: "Java",
        style: "shadow-red-500",

    },
    {
        id:10,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",

    },
    {
        id:11,
        src: linkedIn,
        title: "LinkedIn",
        style: "shadow-blue-500",

    },
    {
        id:12,
        src: mongodb,
        title: "MongoDb",
        style: "shadow-green-500",

    },
    {
        id:13,
        src: mysql,
        title: "MySql",
        style: "shadow-orange-500",

    },
    {
        id:14,
        src: nodejs,
        title: "NodeJs",
        style: "shadow-green-500",

    },
    {
        id:15,
        src: npm,
        title: "Npm",
        style: "shadow-red-500",

    },
    {
        id:16,
        src: photoshop,
        title: "Photoshop",
        style: "shadow-blue-500",

    },
    {
        id:17,
        src: rapidApi,
        title: "RapidApi",
        style: "shadow-blue-800 pt-8",

    },
    {
        id:18,
        src: react,
        title: "React",
        style: "shadow-blue-500",

    },
    {
        id:19,
        src: tailwindCss,
        title: "TailwindCss",
        style: "shadow-blue-500",

    },
    {
        id:20,
        src: wordpress,
        title: "Wordpress",
        style: "shadow-blue-500",

    },
    {
        id:21,
        src: adobeXd,
        title: "AdobeXd",
        style: "shadow-pink-500",

    },
    
   

]

  return (
    <div name="skills" className='bg-gradient-to-b from-gray-300 to-white w-full text-black h-screen pt-[55rem] sm:pt-[35rem] md:pt-[60rem] lg:pt-[5rem]'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-centermw-full h-full text-black'>

      <div className=''>
          <p className="text-4xl text-end  font-bold border-b-4 border-gray-500 p-2 ">
            Skills
          </p>
          <p className="py-6 text-end">These are the technologies I've worked with</p>
        </div>


        <div className=' w-full grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 text-center py-8 md:px-12 sm:px-0'>
            {technologies.map(({id,src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-125 duration-500 py-2 mx-3 my-3 rounded-lg ${style}`}>
                      <img src={src} alt='' className='w-12 mx-auto' />
                      <p className='mt-3 text-xs'>{title}</p>
                </div>

            ))}
          


        </div>


      </div>
    </div>
  )
}

export default Skills
