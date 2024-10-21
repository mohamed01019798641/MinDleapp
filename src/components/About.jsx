import { useState } from "react"
import thumaiimg from '../assets/video-thumbnail.webp'
import { ImPlay } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
import { FaCircleArrowRight } from 'react-icons/fa6'
const About = () => {
  const [isvideo,setisvideo]=useState(false);
  const handelvideo =()=>{
    setisvideo(true);
  }

  const  handleColsevideo =()=>{
    setisvideo(false);
  }

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 bt-20 ">
      <div className="container mx-auto">
        <div className=" py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {
              !isvideo ? (
                <div className="relative">
                  <img src={thumaiimg} alt="video" className="w-full md:h-[440px] h-auto rounded-lg object-cover"/>
                  <button onClick={handelvideo} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3
                   bg-primary rounded-full shadow-lg cursor-pointer"><ImPlay className="size-12 text-white"/></button>
                </div>
              ):(null)
                
               
            }
          
          </div>

          {/* right sid */}
          <div className="md:w-1/2 w-full"> 
             <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>individual consult and therapy</h1>
              <p className='text-lg mb-12 md:pr-8 capitalize '>We lower our stress levels, we get to know our pain</p>
              <button className='bg-primary text-white py-3.5 px-8 font-medium rounded hover:bg-primary/90'>
                <a href="#contact" className='flex gap-1 items-center'><span>Get Started</span><FaCircleArrowRight /></a>
              </button>
          </div>
        
        </div> 


        {
          isvideo && (
           <div className=" fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center "> 
            <div className="relative w-full h-full flex items-center justify-center z-50 "> 
              <iframe width="560" height="315" src="https://www.youtube.com/embed/I2XCDPV7yZs?si=Yrt14hqUJrLhXnsg"  
              title="YouTube video player" frameborder="0" allow="accelerome ter; autoplay;
               clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

               </iframe>
               <button onClick={handleColsevideo} className="absolute top-100 right-5 z-200 text-white text-2xl cursor-pointer"> <MdOutlineClose /></button>
             
            </div>
           </div> 
          )
        }

      </div>
      
    </div>
  )
}

export default About
