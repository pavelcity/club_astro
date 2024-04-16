import React from 'react'
import './promostyle.css'
  
const Promo = ({vdnhPromos}) => {
  return (
    <>
        <div className="container mx-auto mb-0">
            <div className="mt-0 p-4 sm:p-10  glassEffectPromoClub">

                <h3 className="text-gray-200 font-extrabold text-center text-4xl mb-5">Акции клуба</h3>
                    
                    <div className=" overflow-hidden shadow  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:md:grid-cols-4 gap-1">
                        

                        {
                            vdnhPromos && vdnhPromos.map(promo => (
                                <div key={promo.id} className="rounded  relative group bg-sky-600 transition  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                    <div className="mt-8">

                                   
                                    
                                    <img src={promo.pic.url} className="rounded-md mt-2 mb-3 lg:h-48 md:h-36 w-full object-cover object-center" alt={promo.title} />

                                    
                                    <h3 className="titlePromo text-gray-50">
                                        <div className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            {promo.title}
                                        </div>
                                    </h3>
                                    <p className="mt-2 subTitlePromo text-gray-200">
                                        {promo.descr}
                                    </p>
                                    </div>
                                    <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-violet-300 rotate-180" aria-hidden="true">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                                    </svg>
                                    </span>
                                </div>
                            ))
                        }

                        
                        
                    </div>

                
                </div>  

            </div>
    </>
  )
}

export default Promo