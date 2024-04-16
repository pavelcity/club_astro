import React, {useState} from 'react'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import SliderNew from './SliderNew'

import './newslider2.css'




const slides = [
    { src: "/img/homepageslider/1.jpg", width: 800, height: 530 },
    { src: "/img/homepageslider/2.jpg", width: 1080, height: 1920 },
    { src: "/img/homepageslider/3.jpg", width: 1280, height: 853 },
    { src: "/img/homepageslider/4.jpg", width: 1920, height: 1080 },
    { src: "/img/homepageslider/5.jpg", width: 1920, height: 1920 },
    { src: "/img/homepageslider/6.jpg", width: 1080, height: 1920 },
    { src: "/img/homepageslider/7.jpg", width: 1920, height: 1080 },
    { src: "/img/homepageslider/8.jpg", width: 1000, height: 1280 },
    { src: "/img/homepageslider/9.jpg", width: 1920, height: 1080 },
    
];




const SliderNews2 = () => {

    const[index, setIndex] = useState(-1);

  return (
    <>

          <div className="wrapNewSlider container mx-auto mt-20">
           
                <PhotoAlbum
                    layout="rows"
                    photos={slides}
                    targetRowHeight={350}
                    onClick={({ index: current }) => setIndex(current)}
                />
           

              <SliderNew />

            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
          </div>
    </>
  )
}

export default SliderNews2