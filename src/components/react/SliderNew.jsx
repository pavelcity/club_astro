import React, {useState} from 'react'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import './newslider.css'

const SliderNew = () => {

    const [open, setOpen] = useState(false);

  
  return (
    <>
        {/* <button type="button" className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={() => setOpen(true)}>
            Open Lightbox
        </button> */}
  
        <div className="container mx-auto mt-20 hidden">

            <div className="wrapcontainer">

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className=" rounded-xl" src="/img/newpic/vdnh/2207/800/1.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/v10.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/newpic/luberci/1.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/v13.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className=" rounded-xl" src="/img/v4.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/v8.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/v11.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/v6.jpg" alt="club" />
                    </button>
                </figure>

                <figure>
                    <button type="button" className='text-white bg-indigo-100 p-0 border-0 focus:outline-none rounded-xl' onClick={() => setOpen(true)}>
                            <img className="rounded-xl" src="/img/v0.jpg" alt="club" />
                    </button>
                </figure>


            </div>

                

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                    { src: "/img/homepageslider/1.jpg" },
                    { src: "/img/homepageslider/2.jpg" },
                    { src: "/img/homepageslider/3.jpg" },
                    { src: "/img/homepageslider/4.jpg" },
                    { src: "/img/homepageslider/5.jpg" },
                    { src: "/img/homepageslider/6.jpg" },
                    { src: "/img/homepageslider/7.jpg" },
                    { src: "/img/homepageslider/8.jpg" },
                    { src: "/img/homepageslider/9.jpg" },
                    ]}
                />

        </div>
    </>
  )
}

export default SliderNew