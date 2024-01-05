import { useState } from "react";
import { Link } from "react-router-dom";
import './Card.scss' 

const Card = ({item, type}) => {
    return ( 
        <div className="card shadow mb-3  rounded-lg overflow-hidden border-0">
                <div className="image" style={{
                        backgroundImage:  `url(${ item.img})`
                    }}
                   >
                    
                <p className="smaller m-0 p-1 bg-gray-100 w-fit rounded-br-lg"> {item.store}  </p>
                   
                </div>

                <Link className="flex justify-between bg-light  text-black px-2 py-1 gap-1 mb-4" to={`/product/${item.id}`}>
                    <div className="flex flex-col w-full">

                    <div className='flex justify-between items-center w-full overflow-hidden '>

                        <p className="m-0 text-wrap-hidden truncate small"> {item.name}  </p>
                        <p className="bg-blac text-black flex gap-1 smaller"> <i className="bi bi-eye-fill"></i> 22</p>

                    </div>
                        <div className="flex justify-between w-full small-lg">
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-collection"></i>
                            {/* <i className="bi bi-bookmark"></i> */}
                        </div>
                    </div>
                   
                </Link>
            </div>
                   
     );
}

const CardTwo = ({item}) => {
    return (
        <Link className="cardTwo flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.img})`
        }}>
            
            <h5 className="text-light btn bg-fade ">
                {item.name}
            </h5>
        </Link>
    )
}


export { Card, CardTwo }
