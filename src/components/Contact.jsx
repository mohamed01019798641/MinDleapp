import { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhone, FaUser } from "react-icons/fa"


function Contact() {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [phon,setphon]=useState('');
    const [country,setcountry]=useState('');
    const [message,setMessage]=useState('');
    const [showModal,setshowModal]=useState(false)
    const handelsubmint =(e)=>{
        e.preventDefault();
        const data ={
            name,
            email,
            phon,
            country,
            message

        }

        if (!data){
            alert('please fill all fields')
        }
        setshowModal(true)

    }
      const close =()=>{
        setshowModal(false)
        
      }
  return (
    <div className="bg-heroBg flex items-center justify-center py-28 px-8" id="contact">
        <div className=" container mx-auto ">
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
              {/* left side */}
              <div className=" space-y-8 ">

                <h2 className="text-4xl font-bold font-secondary mb-4 text-white">Make And Appointment</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                    <div className=" flex items-start gap-5">
                        <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                            <FaUser className="text-primary"/>
                        </div>
                        <div className=" space-y-1">
                            <h3 className="text-lg font-medium ">24 Hours Services</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className=" flex items-start gap-5">
                        <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                            <FaEnvelope className="text-primary"/>
                        </div>
                        <div className=" space-y-1">
                            <h3 className="text-lg font-medium ">Expert Therapist</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className=" flex items-start gap-5">
                        <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                            <FaPhone className="text-primary"/>
                        </div>
                        <div className=" space-y-1">
                            <h3 className="text-lg font-medium ">High Quality Care</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className=" flex items-start gap-5">
                        <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                            <FaGlobe className="text-primary"/>
                        </div>
                        <div className=" space-y-1">
                            <h3 className="text-lg font-medium ">Trusted Clinic</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        </div>
                    </div>
                  </div>

              </div>

              {/* right */}
              <div className="space-y-8 p-8 bg-white shadow-xl rounded-md">
                <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>
                <form onSubmit={handelsubmint} className=" space-y-8">
                    <div className="flex sm:flex-row flex-col gap-4">
                        <input onChange={e =>setname(e.target.value)} type="text" placeholder="Name" required className="w-full p-4 rounded-md focus:outline-none  focus: ring-2 focus:ring-primary shadow " />
                        
                         <input onChange={e =>setemail(e.target.value)} type="email" placeholder="Email"required  className="w-full p-4 rounded-md focus:outline-none focus: ring-2 focus:ring-primary shadow " />
                        
                    </div>
                    <div className="flex sm:flex-row flex-col gap-4">
                        <input onChange={e =>setphon(e.target.value)} type="tel" placeholder="Contact Number" required className="w-full p-4 rounded-md focus:outline-none  focus: ring-2 focus:ring-primary shadow " />
                        
                         <input onChange={e =>setcountry(e.target.value)} type="text" placeholder="country" required className="w-full p-4 rounded-md focus:outline-none focus: ring-2  focus:ring-primary shadow " />
                       
                    </div>
                    <textarea onChange={e =>setMessage(e.target.value)} rows='5'  placeholder="Write Your Message... " className="w-full p-4 rounded-md focus:outline-none focus: ring-2  focus:ring-primary shadow" >
                    </textarea>

                      <button type="submit" className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90">Send Message</button>

                </form>

              </div>

            </div>
        </div>
        {
            showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="bg-white p-8 rounded-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                   
                    <p>Thank you, {name}, for Subiting your query. </p>
                    <button onClick={close} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Close</button>
                    </div>
                </div>
            )
        }
      
    </div>
  )
}

export default Contact
