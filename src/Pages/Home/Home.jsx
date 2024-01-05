import Slider from "../../components/Slider/Slider";
import './Home.scss'
import { CardSlider } from "../../components/Slider/CardSlider";
// import { Categories as CategoriesComponent } from "../../components/Categories/Categories";
import { ProductCategories, Products } from "../../assets/Constants/Products";
import { Services } from "../../assets/Constants/Services";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, redirect, useNavigate } from 'react-router-dom'


const Home = () =>  {
  const isLoggedIn = useSelector((state) => state.user.value.isLoggedIn)
  
  if(isLoggedIn) {
      return ( 
          <div className="my-9 py-9">
  
          <CardSlider list={Services} type={'ideas'}/>
  
  
            < div className="flex flex-col gap-3 ">
              {
                Products.map((product, key) => (
                  <div key={key} className="flex w-full eachPost border-top shadow-xl flex-col">
                    <Link to={`/project/${product.productId}`} className="flex top bg-gray-100 text-black items-center justify-between p-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="postProfileImg rounded-100 flex justify-center items-center" style={{
                            backgroundImage: `url(${product.img2})`
                          }}>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center smaller" style={{
                              marginBottom: -7+'px'
                            }}>
                              <p className="m-0 ">{product.store}</p>
                              <div>
                              <i className={` bi bi-star${product.rating > 0 ? '-fill' : ''}`} style={{
                                color: 'orange'
                              }}></i>
                              <span className=''>
                                  {product.rating}
                              </span>
                              </div>
  
                            </div>
                            <h5 className="m-0 font-bold"> {product.name} </h5>
  
                          </div>
  
                        </div>
                        <p className="smaller">2hr</p>
                     
  
                    </Link>
  
                    <Link to={`/project/${product.productId}`} className="middle bg-gray-100 border flex" style={{
                      backgroundImage: `url(${product.img})`
                    }}>
                        {/* <img src={product.img} alt="" className=""/> */}
  
                    </Link>
  
                    <div className="flex bottom bg-gray-100 text-black justify-between items-center p-3 px-4 text-2xl">
                      <div className="flex flex-col justify-center items-center relative">
                        <i className="bi bi-heart-fill p-0 m-0 text-red"></i>
                        <span className="small p-0 m-0 absolute translate-y-5">20</span>
                      </div>
                      <div className="flex flex-col justify-center align-center relative">
                        <i className="bi bi-chat"></i>
                        <span className="small p-0 m-0 absolute translate-y-5 translate-x-1">22</span>
                      </div>
                      {/* <i className="bi bi-hand-thumbs-up"></i> */}
                      {/* <i className="bi bi-bookmark"></i> */}
                      <i className="bi bi-bookmark"></i>
                      
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
       );
    }                       
}

export default Home;