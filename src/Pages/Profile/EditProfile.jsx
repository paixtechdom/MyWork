import { useEffect } from "react"
import { useState } from "react"

const EditProfile = ({title, content, setShowEdit}) =>{
    const [ newContent, setNewContent ] = useState('')
    const [ height, setHeight ] = useState(0)
    useEffect(() => {
        setNewContent(content)
        setTimeout(() => {
            setHeight(100)
        }, 10);
    }, [])
    return(
        <div className="flex fixed duration-300 transition-all ease-in-out z-50 bg-white bottom-0 w-full p-3 pt-9 text-black" style={{
            boxShadow: '0px 0px 5px 0.3px rgba(0,0,0,0.4)',
            minHeight: height+'vh'
        }}>
                <p  className="fixed text-white bg-black text-2xl px-3 top-0 w-fit z-50 left-0" onClick={() => {
                    setHeight(0)
                    setTimeout(() => {
                        setShowEdit(false)
                    }, 200);

                }}>

                        <i className="bi bi-x-lg"></i>
                </p>
            <div className="flex flex-col w-full gap-4">
                <h3 className="text-xl font-bold text-center">Edit {title}</h3>
                <textarea type="text" className="p-3 border border-gray-800 rounded-3xl outline-none h-2/5 editTextArea" onChange={(e) => setNewContent(e.target.value)} value={newContent}></textarea>

                <div className="flex justify-between my-3 gap-9">
                    <button className=" text-black border-black border rounded-lg px-5 py-1.5 text-lg w-4/5" onClick={() => {
                        setHeight(0)
                        setTimeout(() => {
                            setShowEdit(false)
                        }, 200);

                    }}>Cancel</button>
                    <button className="bg-green-600 text-white rounded-lg px-5 py-1.5 text-lg w-4/5">Save</button>
                </div>
            </div>
        </div>
    )
}



const EditListProfile = ({title, content, setShowListEdit}) =>{
    const [ searchContent, setSearchContent ] = useState([])
    const [ height, setHeight ] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setHeight(100)
        }, 10);
    }, [])
    return(
        <div className="flex fixed duration-200 z-50 bg-white bottom-0 w-full p-3 pt-9 text-black" style={{
            boxShadow: '0px 0px 5px 0.3px rgba(0,0,0,0.4)',
            minHeight: height+'vh'
        }}>
                <p  className="fixed text-white bg-gray-900  text-2xl px-3 top-0 w-fit z-50 left-0" onClick={() => {
                setHeight(0)
                setTimeout(() => {
                    setShowListEdit(false)
                }, 200);

            }}>

                    <i className="bi bi-x-lg"></i>
            </p>

            <div className="flex flex-col w-full gap-4">
                <h3 className="text-xl font-bold text-center">Edit {title}</h3>
                <input type="text" placeholder={`Search to add ${title}`} className="p-2 px-3 border border-gray-800 rounded-3xl outline-none" onChange={(e) => setSearchContent(e.target.value)} value={searchContent} />
                <div className="flex flex-wrap gap-4">
                    {
                        content.map((content, key) => (
                            <div key={key} className='flex shadow-lg items-center justify-center gap-3 rounded-xl overflow-hidden'>
                                <p className="p-2 px-3 flex items-center">{content}</p>
                                <p className="bg-gray-300 p-1 text-2xl">
                                    <i className="bi bi-x h-full"></i>
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-between my-3 gap-9">
                    <button className=" text-black border-black border rounded-lg px-5 py-1.5 text-lg w-4/5" onClick={() => {
                        setHeight(0)
                        setTimeout(() => {
                            setShowListEdit(false)
                        }, 200);

                    }}>Cancel</button>
                    <button className="bg-green-800 text-white rounded-lg px-5 py-1.5 text-lg w-4/5">Save</button>
                </div>
            </div>
        </div>
    )
}


export { EditProfile, EditListProfile }