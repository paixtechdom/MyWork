import { Link } from "react-router-dom"
import { CardTwo } from "../Card/Card"


export const Categories = ({type, specs, list}) =>{
    return(
        <div className=" my-5 overflow-hidden">
        <Link className="p-3 py-2 bg-black text-light mb-3 flex justify-between items-center">
            <h3 className="p-0 m-0">{type.toUpperCase()}</h3>
            <p className="text-light  p-0 m-0">SEE ALL</p>
        </Link>
        <div className="flex flex-wrap gap-1 px-3 justify-center">
            {
                list.map((item, key) => (
                    <div key={key}>
                        <CardTwo item={item}/>
                    </div>
                ))
            }
        </div>
    </div>
    )
}