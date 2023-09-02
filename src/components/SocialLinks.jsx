import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {


const links = [
  {
  id:1,
  child: (
    <>
    LinkedIn<  FaLinkedin  size={35}/>
    </>
  ),
  href: 'https://www.linkedin.com/in/wiktoria-pejs',
},
{
  id:2,
  child: (
    <>
    GitHub<  FaGithub  size={35}/>
    </>
  ),
  href: 'https://github.com/wiktoriapejs',
  style: 'mt-3',

},
{
  id:3,
  child: (
    <>
    Mail<  HiOutlineMail  size={35}/>
    </>
  ),
  href: 'mailto:pejswiktoria.contact@gmail.com',
  style: 'mt-3',


},
{
  id:4,
  child: (
    <>
    Resume<  BsFillPersonLinesFill  size={35}/>
    </>
  ),
  href: 'wiktoriapejscv.pdf', 
  style: 'mt-3',
  download:true,
},



]




  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
         <ul>


          {links.map(({id, child, href, style, download}) => (

<li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-full duration-300 border-4 rounded-full	 border-gray-400	'  + style}>
<a 
href={href} 
download={download} 
target='_blank'
rel="noreferrer"
className='flex justify-between items-center w-full text-black  '> 

 {child}

 </a>
</li>

          ))}
           
         </ul>
    </div>
  )
}

export default SocialLinks
