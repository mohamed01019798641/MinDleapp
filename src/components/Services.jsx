import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import servis1img1 from '../assets/service1.webp';
import servis1img2 from '../assets/service2.webp';
import servis1img3 from '../assets/service3.webp';
import servis1img4 from '../assets/service4.webp';
function Services() {
  return (
    <div id="Services" className="bg-[#f7f8fc]">
      <div className="text-center space-y-5">
       <div className="pt-28 px-4 container mx-auto">
        <h2 className="text-4px font-bold font-secondary text-heroBg">What Can We Do Together</h2>
        <p className="md:w-1/2 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ab nam ea.</p>
       </div>
       {/* service category */}
       <div className="py-12 md:w-4/5 mx-auto">
       <Tabs>
            <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling stuck</Tab>
              <Tab>Seif-Confidence</Tab>
            </TabList>

            <TabPanel>
              <div className='flex flex-col md:flex-row gap-8 mt-10'>
               <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary  mb-4 mt-4'>Couple Counseling</h3>
                <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, expedita.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
               </div>
                <div className='md:w-1/2'>
                  <img src={servis1img1} alt="" className='w-full h-auto rounded-2xl object-cover'/>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
            <div className='flex flex-col md:flex-row gap-8 mt-10'>
               <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary  mb-4 mt-4'>Feeling stuck</h3>
                <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, expedita.</p>
                <h1 className='text-xl font-medium text-black mb-4'>Benefits</h1>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
               </div>
                <div className='md:w-1/2'>
                  <img src={servis1img2} alt="" className='w-full h-auto md:h-[440px] rounded-2xl object-cover'/>
                </div>
                </div>
            </TabPanel>

            <TabPanel>
            <div className='flex flex-col md:flex-row gap-8 mt-10'>
               <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary  mb-4 mt-4'>Couple Counseling</h3>
                <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, expedita.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
               </div>
                <div className='md:w-1/2'>
                  <img src={servis1img3} alt="" className='w-full md:h-[440px] h-auto rounded-2xl object-cover'/>
                </div>
                </div>
            </TabPanel>
            <TabPanel>
            <div className='flex flex-col md:flex-row gap-8 mt-10'>
               <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary  mb-4 mt-4'>Seif-Confidence</h3>
                <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, expedita.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                  <li>Understanding Relatioship Dynamics</li>
                </ul>
               </div>
                <div className='md:w-1/2'>
                  <img src={servis1img4} alt="" className='w-full md:h-[440px] h-auto rounded-2xl object-cover'/>
                </div>
                </div>
            </TabPanel>

         </Tabs> 
       </div>
      </div>
    </div>
  )
}

export default Services
