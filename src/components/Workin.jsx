

function Workin() {
  return (
    <div className=" relative bg-cover bg-center py-12 bg-working-img">
      <div className=" absolute inset-0 bg-heroBg bg-opacity-80"></div>
      <div className=" relative container mx-auto px-20">
        <div fddfdf="text-white text-center mb-20">
            <h2 className="text-4xl font-bold font-secondary mb-4">How is works</h2>
            <p className="text-lg md:w1/2 w-full mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, suscipit. Soluta repellendus qui recusandae vero.</p>
        </div> 




        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
            <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                <div className=" absolute top-0 left-1/2 transform -translate-x-1/2
                bg-primary text-white size-14 rounded-full flex items-center justify-center -translate-y-1/2">1</div>
                <div className="text-lg font-medium mt-8">Fill a Form</div>
                <p  className=""> dolor1 sit amet consectetur adipisicing elit. Officia, dolores.</p>
                
            </div>
            <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                <div className=" absolute top-0 left-1/2 transform -translate-x-1/2
                bg-primary text-white size-14 rounded-full flex items-center justify-center -translate-y-1/2">2</div>
                <div className="text-lg font-medium mt-8">Get Matched</div>
                <p  className=""> dolor2 sit amet consectetur adipisicing elit. Officia, dolores.</p>
                
            </div>
            <div className="relative bg-white text-center rounded-lg p-6 flex-1">
                <div className=" absolute top-0 left-1/2 transform -translate-x-1/2
                bg-primary text-white size-14 rounded-full flex items-center justify-center -translate-y-1/2">3</div>
                <div className="text-lg font-medium mt-8">Schedule</div>
                <p  className=""> dolor3 sit amet consectetur adipisicing elit. Officia, dolores.</p>
                
            </div>


        </div>
      </div>
      
    </div>
  )
}

export default Workin
