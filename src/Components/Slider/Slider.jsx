import './Slider.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { BlogwithPics } from '../News/BlogContent';

function Slider() {
    const [ currentSlide, setCurrentSlide ] = useState(0)

    
        useEffect(() => {
            const interval = setInterval(() => {
            nextSlide('interval')
        
        }, 6000); 
            // Change slide every 3 seconds
            return () => clearInterval(interval);
        }, [currentSlide]);

        const nextSlide = (curr) =>{
            if(curr == 'interval'){
              setCurrentSlide(currentSlide == 3 ? 0 : currentSlide + 1)
            }else{
              setCurrentSlide(curr) 
            }
          }

    const sliderContents = [
        {
            img:'/img/images/features.png',
            header: 'Bu',
            text: 'Buy varieties of products from different trusted individuals and companies'
        },
        {
            img:'/img/images/features-2.png',
            header: 'View ideas',
            text: 'Get any type of service done for you by reliable service providers'
        },
        {
            img:'/img/images/features-3.png',
            header: 'Hire',
            text: 'Make your products visible to all who wanna buy'
        },
        {
            img:'/img/images/hero-img.png',
            header: 'Hire',
            text: 'Render service and get paid'
        }
    ]

    return ( 
        <div id="myCarousel" className="carousel slide py-5 " data-bs-ride="carousel">
    
        <div className='eachBlogGrandParent rounded  flex gap-3'>
            <div className='overflow-hiddem eachBlogParent' style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }} draggable={true} onDrag={() =>{
             }}>
              
              {
                sliderContents.map((sliderContent, key) =>(

                    <div className={`bannerParent flex items-center justify-center`} key={key} style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${sliderContent.img})`
                    }}>
                        <div className=" flex position-relative ">
                                
                            <div className="banner flex m-5 gap-5 ">
                                <div className="left w-100 text-center text-light">
                                <h1>{sliderContent.header}</h1>
                                    <p>{sliderContent.text}</p>
                                    <button className='btn bg-light '><Link className="text-decoration-none text-dark bg-light" href="#">Get Started</Link></button>
                                </div>
                                {/* <div className="bannerImg right w-100">
                                <img src={sliderContent.img} alt="" className='w-75'/>
                                </div> */}
                            </div>

                        </div>
                    </div>
                ))
            }
            </div>
            <div className='blogControl'>
                {
                    sliderContents.map((item, key) => (
                        <p className={`${currentSlide == key ? 'bg-dark' : 'bg-fade'}`} onClick={() => nextSlide(key)} 
                        style={{
                          width: 10 +'px',
                          height: 10+'px'
                        }} key={key}></p>

                    ))
                }
              {/* <p onClick={() => nextSlide(1)} style={{
                backgroundColor: currentSlide== 1 && 'rgba(184, 10, 10)'              
              }}></p>
              <p onClick={() => nextSlide(2)} style={{
                backgroundColor: currentSlide== 2 && 'rgba(184, 10, 10)'              
              }}></p>
              <p onClick={() => nextSlide(3)} style={{
                backgroundColor: currentSlide== 3 && 'rgba(184, 10, 10)'              
              }}></p> */}
              {/* <p>{currentSlide}</p> */}
              
            </div>
          </div>
      </div>
   
     );
}

export default Slider;