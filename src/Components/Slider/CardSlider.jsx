import { useState } from "react"
import { Link } from "react-router-dom"
import { Card } from "../Card/Card"
import './CardSlider.scss'
import '../Card/Card.scss'

export const CardSlider = ({type, specs, list}) => {
    const [ pos, setPos ]  = useState(0)
    return(
        <div className="cardSlider overflow-hidden">
           
            <div className="flex overflow-auto gap-3 px-3 my-1" style={{
                transition: 'all 0.3s ease-in-out',
            }}>
                <Link to={'/Create'} className="flex bg-gray-900 text-white flex-col h-full items-center text-center justify-center rounded-lg" style={{
                    width: 120+'px',
                    height: 180+'px'
                }}>
                    <i className="bi bi-plus-circle text-5xl"></i>
                    <p className="text-lg text-2xl" style={{
                        width: 120+'px'
                    }}>Add</p>
                    <p className="text-gray-400 small">Project / Idea</p>
                </Link>

                {
                    list.map((item, key) => (
                        <div key={key}>
                            <Card item={item} type={type}/>
                        </div>
                    ))
                }
            
                {/* <Link className="p-3 pb-2 text-black flex justify-between items-center " style={{
                    minWidth: 120+'px'
                }}>
                    <p className=" p-0 m-0">SEE ALL</p>
                    <i className="bi bi-arrow-right"></i>
                </Link> */}
            </div>
            {/* <div className='flex w-100 sliderControl px-3 justify-between'>
                <button className="bg-fade p-1 rounded-5 border-0 text-light" onClick={() => {
                    setPos(pos + 20)
                }}>
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button className="bg-fade p-1 rounded-5 border-0 text-light" onClick={() => {
                    setPos(pos - 20)
                }}>
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div> */}
            
        </div>
    )
}