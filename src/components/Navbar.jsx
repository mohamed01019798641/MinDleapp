import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion"

function Navbar() {
    const[isopen,setisopen]=useState(false);
    const [active,setactine]=useState('home')
    const handelToggle =()=>{
        setisopen(!isopen)
    }
    const handelcolosMenu = ()=>{
        setisopen(false)
    }

    const handleScroll = ()=>{
        const sections =['home','services','about','pricing','testimonial'];
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section)=>{
            const element = document.getElementById(section);
            if(element){
                const offset = element.offsetTop;
                const height = element.offsetHeight;
                if(scrollPosition >= offset && scrollPosition < + height){
                    setactine(section)
                }
            }
        })
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    },[]);

    

    const handlScrollTo =(targetId)=>{
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            })
        }
    }


    const navLinks = (

    
        <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
            <li>
                < motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="#home"
                    onClick={(e)=>{
                    e.preventDefault();
                    handelcolosMenu();
                    handlScrollTo('home');}}
                 className={`text-white ${active==='home'? 'isactive' :""}`}>Home</motion.a>
            </li>

            <li>

                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}}  href="#Services"  
                 onClick={(e)=>{
                    e.preventDefault();
                    handelcolosMenu();
                    handlScrollTo('Services');}}
                className='hover:text-green-500'>Services</motion.a>
                
            </li>
            <li>
                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="#about"
                 onClick={(e)=>{
                    e.preventDefault();
                    handelcolosMenu();
                    handlScrollTo('about');}}
                className='hover:text-green-500'>About us</motion.a>
            </li>
            <li>
               <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="#pricing"
                onClick={(e)=>{
                    e.preventDefault();
                    handelcolosMenu();
                    handlScrollTo('pricing');}}
               className='hover:text-green-500'>pricing</motion.a>

            </li> 
            <li> 
                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="#testimonial" 
                 onClick={(e)=>{
                    e.preventDefault();
                    handelcolosMenu();
                    handlScrollTo('testimonial');}}
                className='hover:text-green-500'>Testimonial</motion.a>

            </li>
        </ul>
    )
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">

        <div className="container mx-auto flex justify-between items-center h-full">

            {/* logo */}

           <div >
             <a href="/"><img src="/logo.svg" alt="logo" /></a>

            </div> 
            
            {/* item */}
           <div className="hidden md:flex flex-grow justify-center ">
            <nav >
                {navLinks}
            </nav>

           </div>
           

            {/* buttom */}
            <div className="hidden md:block">
                <a onClick={e =>{
                    e.preventDefault();
                    handlScrollTo('contact');
                }} href="#contact" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded">Contact us</a>
            </div>
            
            {/* icones */}
            <div className="block md:hidden">
                <button onClick={handelToggle} className={`text-white focus:outline-none ${isopen ? 'border border-white':''}`}>
                <HiOutlineMenuAlt3 className="size-6"/>
                </button>
            </div>
        </div>

             {/* mobile nav items*/ }   
             {
                isopen &&(
                    <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
                        <ul className="flex flex-col p-4 space-y-3 ">
                            {navLinks.props.children}
                            <li className="py-2 "><a className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                         onClick={(e)=>{
                            e.preventDefault();
                            handelcolosMenu();
                            handlScrollTo('contact')
                         }
                         } href="#contact">Contact us</a></li>
                        </ul>
                       
                    </nav>
                )
             }


   </header>
  )
}

export default Navbar 
