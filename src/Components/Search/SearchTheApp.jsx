import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { SearchResult, SearchResultAccount } from "./SearchResult"
import { Products } from '../../assets/Constants/Products'



export const SearchTheApp = () => {
    const searchRef = useRef()
    const [ searchResultIndex, setSearchResultIndex ] = useState(6)
    const [ searchParameter, setSearchParameter ] = useState('')
    useEffect(() => {
        searchRef.current.focus()
    }, [])

    // const searchTypes = ['Projects', 'Ideas', 'Accounts', 'Hire']
    const searchTypes = [ 
        {
            title: 'Projects',
            parameter: 'projects'
        },
        {
            title: 'Ideas',
            parameter: 'ideas'
        },
        {
            title: 'Accounts',
            parameter: 'users'
        },
        {
            title: 'Hire',
            parameter: 'users?availableforhire'
        },
    ]
    return(
        <div className='relative w-full f top-0 bg-white flex flex-col' style={{
            zIndex: 200,
            minHeight: 100+'vh'
        }}>
            <div className="fixed w-full bg-white top-0">

                <div className="flex gap-2 items-center  p-3">
                    <Link to='/' className="bg-fade p-1 rounded-full px-2">
                        <i className="bi bi-arrow-left text-2xl" ></i>
                    </Link>
                        

                    <div className="border border-gray-400 w-full p-1 rounded-full flex items-center">
                        <i className="bi bi-search text-gray-400 mx-3"></i>
                        <input type="text" placeholder="Search" className="outline-none" ref={searchRef}/>
                    </div>
                </div>

                <div className="flex w-full border-b border-gray-400 justify-between px-3" style={{
                    zIndex: 200
                }}>
                    {
                        searchTypes.map((type, key) => (
                            <div key={key} className={`cursor-pointer ${searchResultIndex == key ? 'border-b  border-gray-900 text-black font-bold' : 'text-gray-900'}`} onClick={() =>{
                                setSearchResultIndex(key)
                                setSearchParameter(type.parameter.toLowerCase())
                            }}>
                                {type.title}
                            </div>
                        ))
                    }

                </div>
            </div>
            {/* 
                The search for post and ideas will be divided into two, one without image and one with image, then see more for both
            */}

            <div className="py-3 flex gap-2 my-9 py-9 w-full" style={{
                zIndex: -1
            }}>
                <div className="my-6 w-full">
                {
                    searchParameter == searchTypes[0].parameter || searchParameter ==  searchTypes[1].parameter ?
                    <SearchResult searchParameter={searchParameter} Products={Products}/> 
                    : searchParameter == searchTypes[2].parameter || searchParameter ==  searchTypes[3].parameter ?
                    <SearchResultAccount searchParameter={searchParameter} Products={Products}/> : ''
                }
                </div>
            </div>
        </div>
    )
}