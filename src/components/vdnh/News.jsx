import React from 'react'
import './newsstyle.css'
 

const News = ({vdnhNews}) => {
  return (
    <>
        
        <div className="container mx-auto mb-0">

            <div className="mt-10  p-4 sm:p-10 glassEffectNewsClub">

            <h3 className="text-gray-200 text-4xl font-extrabold text-center mb-10 sm:mb-5">Новости клуба</h3>


                <div className="eachItem gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">

                    {
                        vdnhNews.map(item => (
                            <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                <div className="flex-shrink-0">
                                    <img className="eachPic" src={item.pic.url} alt={item.title} />
                                </div>
                                <div className="flex-1 bg-indigo-500 p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <div className="category text-gray-950">
                                            {item.category}
                                        </div>
                                        <div className="block mt-2">
                                            <p className="title text-gray-200">
                                                {item.title}
                                            </p>
                                            <p className="subtitle text-gray-50">
                                                {item.descr}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

            
                </div>  
                
                

                <div className="sm:hidden mx-3 overflow-hidden p-3">
                    <swiper-container className="mySwiper overflow-hidden " navigation="true" effect="cards" grab-cursor="true" pagination="true" >
                
                    {
                        vdnhNews.map(item => (
                        <swiper-slide key={item.id}>
                            <img src={item.pic.url} alt="" className="w-full" />
                            <div className="text-center">
                                <div className=" text-gray-300 bg-gray-900 inline py-1 px-3 rounded-md text-xl mt-5">
                                {item.category}
                                </div>
                                <p className="text-3xl text-gray-200 mt-4 mb-3 px-3">
                                    {item.title}
                                </p>
                                <p className="text-2xl text-gray-50 mb-10 px-3">
                                    {item.descr}
                                </p>
                            </div>
                            
                        </swiper-slide>
                        ))
                    }
                    
                </swiper-container>
                </div>

            
            </div>

        </div>

    </>
  )
}

export default News