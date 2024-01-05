import { useState } from "react"

const SearchResult = ({searchParameter, Products}) => {

    const [ resultWithImagesNo, setResultWithImagesNo ] = useState(6)
    const [ resultWithoutImagesNo, setResultWithoutImagesNo ] = useState(12)

    return(
        <div className="w-full">   
           {/* {
            searchParameter
           } */}
           <div className="flex flex-col items-center">

            <div className="grid grid-cols-3 w-full gap-1 my-2">
                {
                    Products.map((item, key) => (
                            key < resultWithImagesNo &&
                            <div key={key} className='w-full shadow-lg rounded overflow-hidden cursor-pointer' style={{
                                height: 120+'px'
                            }}>
                                <div className='bg-center bg-no-repeat h-full relative'
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundSize: 'cover',
                                
                                }} >
                                    <p className="absolute small bg-white rounded-br-lg p-1 truncate text-wrap-hidden shadow">{item.name}</p>

                                    <div className="flex h-full items-end ">
                                        <div className="flex items-end justify-between bg-dark-fade w-full p-2 text-white">
                                            <p className="flex flex-col items-center small">
                                                {item.store}
                                            </p>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))  
                    }
                </div>
                <div className="flex gap-4 px-3 justify-between w-full">
                    {
                        resultWithImagesNo >= Products.length ? '' :
                        <div className="flex items-end justify-center gap-2 my-2 w-full bg-gray-900 rounded-full p-2 text-white" onClick={() => {
                            setResultWithImagesNo(resultWithImagesNo + 6)
                        }}>
                            <p>Show More</p>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    }
                    {
                        resultWithImagesNo > 6 ? 
                        <div className="flex items-end justify-center gap-2 my-2 w-full bg-white border border-gray-900 rounded-full p-2 text-black" onClick={() => {
                            setResultWithImagesNo(resultWithImagesNo - 6)
                        }}>
                            <p>Show Less</p>
                            <i className="bi bi-chevron-up"></i>
                        </div> : ''
                    }
                </div>
            </div>
        </div>
    )
}

const SearchResultAccount = ({searchParameter, Products}) => {
    const [ resultsNo, setResultNo ] = useState(8)
    return(
        <div className="flex flex-col ">
            {
                Products.map((product, key) => (
                    key < resultsNo &&
                    <div key={key} className='flex gap-2 my-2 border-b border-gray-300 px-3 p-2'>
                        <div className="overflow-hidden rounded-full border" style={{
                            height: 40+'px',
                            width: 40+'px',
                        }}>
                            <img src={product.img} alt="" />

                        </div>

                        <div className="flex flex-col ">
                            <p className="font-bold">{product.store}</p>
                            <p className="small">{product.name}</p>

                        </div>
                    </div>
                ))
            }
             <div className="flex gap-4 px-3 justify-between w-full">
                    {
                        resultsNo >= Products.length ? '' :
                        <div className="flex items-end justify-center gap-2 my-2 w-full bg-gray-900 rounded-full p-2 text-white" onClick={() => {
                            setResultNo(resultsNo + 4)
                        }}>
                            <p>Show More</p>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    }
                    {
                        resultsNo > 6 ? 
                        <div className="flex items-end justify-center gap-2 my-2 w-full bg-white border border-gray-900 rounded-full p-2 text-black" onClick={() => {
                            setResultNo(resultsNo - 4)
                        }}>
                            <p>Show Less</p>
                            <i className="bi bi-chevron-up"></i>
                        </div> : ''
                    }
                </div>
        </div>
    )
}

export { SearchResult, SearchResultAccount }