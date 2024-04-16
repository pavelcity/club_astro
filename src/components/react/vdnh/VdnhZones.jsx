import React from 'react'
import Imgix from "react-imgix";

 
import './vdnhzondes.css' 

const VdnhZones = ({vdhnZones}) => {
  return (
    <>

<section className="text-gray-300 body-font overflow-hidden mb-20">
    <div className="container py-2 mx-auto space-y-12">
  
 

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 wrapInsideZonesInfo">
  
  
  
  
        {
          vdhnZones && vdhnZones.map(zone => (
          <div 
          key={zone.id}
          className="p-1 glassEffectInnerClub ">
          <div className="h-full p-2 rounded-lg  flex flex-col relative overflow-hidden">
            <div className="text-xs tracking-widest title-font mb-4 font-medium">комната</div>
            <h2 className="text-4xl text-gray-200 pb-4 mb-4 border-b border-gray-200 leading-none">
             {zone.title ? zone.title : 'no-title'}  
            </h2>
   
            <div className="mt-4 mb-8 container mx-auto">
  

       
            <Imgix
              src={zone.pic.url}
              sizes="(min-width: 360px) 375px, 480px, 414px, 768px, 900px"
              className='rounded-xl'
              htmlAttributes={{ 
                width: 590,
                height: 300,
              }}
              width={590} 
              height={300}
            />
    
            </div>
               

            {zone.oneTitle ? 
              <>

                <p className="flex items-center text-gray-300 title">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {zone.oneTitle ? zone.oneTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0"></span>
                  {zone.oneText ? zone.oneText : 'no-data'}
                </p>
              </>
            : 
            null 
            }

          

            {zone.twoTitle ?
              <>
                <p className="flex items-center text-gray-300 title">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {zone.twoTitle ? zone.twoTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0 "></span>
                  {zone.twoText ? zone.twoText : 'no-processor'}
                </p>
              </>
            :
            null
            }
 


            {zone.triTitle ? 
              <>
                <p className="flex items-center text-gray-300 title">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {zone.triTitle ? zone.triTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0 "></span>
                  {zone.triText ? zone.triText : 'no-processor'}
                </p>
              </>
              :
              null 
            }





            {zone.fourTitle ? 
              <>
                <p className="flex items-center text-gray-300 title">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {zone.fourTitle ? zone.fourTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0 "></span>
                  {zone.fourText ? zone.fourText : 'no-processor'}
                </p>
              </>
              :
              null
            }



            {zone.fiveTitle ?
              <>
                <p className="flex items-center text-gray-300 title">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {zone.fiveTitle ? zone.fiveTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0 "></span>
                  {zone.fiveText ? zone.fiveText : 'no-processor'}
                </p>
              </>
              :
              null
            }





            { zone.sixTitle ?
              <>
                <p className="flex items-center text-gray-300 title">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                { zone.sixTitle ? zone.sixTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0 "></span>
                  {zone.sixText ? zone.sixText : 'no-processor'}
                </p>
              </>
              :
              null
            }





            { 
            zone.sevenTitle ?

              <>
                <p className="flex items-center text-gray-300 title">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-400 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                {zone.sevenTitle ? zone.sevenTitle : 'no-title'}
                </p>
                <p className="flex items-center text-gray-200 mb-2 infoTitle">
                  <span className="w-4 h-4 mr-2 flex-shrink-0 "></span>
                  {zone.sevenText ? zone.sevenText : 'no-processor'}
                </p>
              </>

              :
              null
            }


   
  

            {/* pn-cht */}
            {
                zone.pnchtTime 
                ? 

            <ul className="bg-gray-950 bg-opacity-50 mt-10 timePriceZones">
             
             <p className='font-bold mb-2 timeWeekTitle'>ПН-ЧТ (price)</p>


              {
                zone.pnchtTime 
                ? 
                <li>
                  {zone.pnchtTime ? zone.pnchtTime : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.pnchtPrice ? zone.pnchtPrice : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }

             
    

              {
                zone.pnchtTimeTwo 
                ? 
                <li>
                  {zone.pnchtTimeTwo ? zone.pnchtTimeTwo : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.pnchtPriceTwo ? zone.pnchtPriceTwo : 'no-data'} 
                  </span>
                </li> 
                : 
                null
              }
            

            
              {
                zone.pnchtTimeTri 
                ? 
                <li>
                  {zone.pnchtTimeTri ? zone.pnchtTimeTri : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.pnchtPriceTri ? zone.pnchtPriceTri : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


              {
                zone.pnchtTimeFour 
                ? 
                <li>
                  {zone.pnchtTimeFour ? zone.pnchtTimeFour : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.pnchtPriceFour ? zone.pnchtPriceFour : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


              {
                zone.pnchtTimeFive 
                ? 
                <li>
                  {zone.pnchtTimeFive ? zone.pnchtTimeFive : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.pnchtPriceFive ? zone.pnchtPriceFive : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


              {
                zone.pnchtTimeSix 
                ? 
                <li>
                  {zone.pnchtTimeSix ? zone.pnchtTimeSix : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.pnchtPriceSix ? zone.pnchtPriceSix : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


          </ul> 
            : 
            null
          }



 




          {/* pt-vs */}
          {
          zone.ptvsTime 
          ? 
 
       
          <ul className="bg-gray-800 bg-opacity-50 mt-5 border border-violet-400 timePriceZones">
             

             <p className='font-bold mb-2 timeWeekTitle'>ПТ-ВС (price)</p>
              {
                zone.ptvsTime 
                ? 
                <li>
                  {zone.ptvsTime ? zone.ptvsTime : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.ptvsPrice ? zone.ptvsPrice : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }

              
    

              {
                zone.ptvsTimeTwo 
                ? 
                <li>
                  {zone.ptvsTimeTwo ? zone.ptvsTimeTwo : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.ptvsPriceTwo ? zone.ptvsPriceTwo : 'no-data'} 
                  </span>
                </li> 
                : 
                null
              }
            

            
              {
                zone.ptvsTimeTri 
                ? 
                <li>
                  {zone.ptvsTimeTri ? zone.ptvsTimeTri : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.ptvsPriceTri ? zone.ptvsPriceTri : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


              {
                zone.ptvsTimeFour 
                ? 
                <li>
                  {zone.ptvsTimeFour ? zone.ptvsTimeFour : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.ptvsPriceFour ? zone.ptvsPriceFour : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


              {
                zone.ptvsTimeFive 
                ? 
                <li>
                  {zone.ptvsTimeFive ? zone.ptvsTimeFive : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.ptvsPriceFive ? zone.ptvsPriceFive : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }


              {
                zone.ptvsTimeSix 
                ? 
                <li>
                  {zone.ptvsTimeSix ? zone.ptvsTimeSix : 'no-data'} |
                  <span className="font-bold text-white ml-1">
                    {zone.ptvsPriceSix ? zone.ptvsPriceSix : 'no-data'} 
                  </span>
                </li>
                : 
                null
              }
 

            </ul>

            : 
            null
            }


            
            
          </div>
        </div>
          ))
        }
        
  
  
  
        
      </div>
  
  
  
  
  
  
  
  
  
  
  
    </div>
  
  
  </section>



    </>
  )
}

export default VdnhZones