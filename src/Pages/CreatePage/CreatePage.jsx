import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleNavbar } from "../../State/state"
import img1 from '../../assets/img/house/1.jpg'
import img2 from '../../assets/img/house/27.jpg'
import img3 from '../../assets/img/house/29.jpg'
import img4 from '../../assets/img/house/30.jpg'
import img5 from '../../assets/img/house/31.jpg'
import img6 from '../../assets/img/house/34.jpg'
import axios from "axios"
import { useForm } from "react-hook-form"
// import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const CreatePage = () => {
    const dispatch = useDispatch()
    const [ type, setType ] = useState('')
    const [ currentCreateSlide, setCurrentCreateSlide ] = useState(2)
    const dbLocation = useSelector((state) => state.app.value.dbLocation)


    const createSlide = [
        'Showcase your work', 'Get collaborations and suppport'
    ]
    useEffect(() => {
        dispatch(toggleNavbar({hideNav: true}))
    }, [])

    const possibleFileType = [
        {
            name: 'Image',
            icon: 'image'
        },
        {
            name: 'Video',
            icon: 'youtube'
        },
        {
            name: 'Document',
            icon: 'file-earmark-text'
        },
    ]
    const filesToBeAdded = [
        {
            file: img1,
            type: 'Image'
        },
        {
            file: img2,
            type: 'Image'
        },
        {
            file: img3,
            type: 'Image'
        },
        {
            file: img4,
            type: 'Image'
        },
        {
            file: img5,
            type: 'Image'
        },
        {
            file: img6,
            type: 'Video'
        },
    ]
    const handleCreate = async () => {
        await axios.post(`${dbLocation}/projects/${profileId}`).then(function(response) {

        })
    }

    return(
        <div className="flex flex-col pt-9 px-3 w-full items-center relative">
                <p className="text-2xl text-center bg-white top-0  shadow border p-3 w-full font-bold fixed">Add {type}</p> 
                <p className="text-lg text-gray-600 mt-5">{createSlide[currentCreateSlide]}</p>
          
           <Link to='/' className="fixed text-white text-2xl px-3 top-0 w-fit z-50 bg-gray-900 left-0" onClick={() =>  dispatch(toggleNavbar({hideNav: false}))}>
                    <i className="bi bi-arrow-left"></i>
                </Link>
            <form action="" className="flex flex-col w-full my-9 gap-8" 
            onSubmit={handleCreate}>
                <div>
                    <p className="font-bold mb-2">Do you want to add a project or an idea?</p>
                    <div className="flex gap-3">
                        <input type="radio" name="type" id="" required value={'project'} onClick={() => {
                            setType('Project')
                        setCurrentCreateSlide(0)
                        }}/>
                        <label htmlFor="">Project</label>
                    </div>
                    <div className="flex gap-3">
                        <input type="radio" name="type" id="" required value={'Idea'}  onClick={() => {
                            setType('Idea')
                            setCurrentCreateSlide(1)
                        }}/>
                        <label htmlFor="">Idea</label>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor=""  className="font-bold mb-2">{type} Title
                    {/* {
                        type.length > 0 ?
                        <span className="small font-light"> (Give a suitable and attractive title to your {type})</span> : ''
                    } */}
                    </label>
                    <input type="text" placeholder={`${type} Title`} className='outline-none border border-gray-400 rounded-lg p-2 px-3'/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor=""  className="font-bold mb-2">{type} Category </label>
                    <select name="category" id="" className="outline-none border border-gray-400 rounded-lg p-2 px-3">
                        <option value="#" className="text-gray-700" disabled>Select a {`${type} category`}</option>
                        <option value="">IT / Tech</option>
                        <option value="">Art</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="" className="font-bold mb-2">{type} Description 
                    {/* {
                        type.length > 0 ?
                        <span className="small font-light"> (Give a well detailed description of your {type})</span> : ''
                    } */}
                    </label>
                    <textarea type="text"  rows={7} placeholder={`${type} Description`} className='outline-none border border-gray-500 rounded-lg p-2 px-3 ' style={{}}/>
                </div>
                {
                    type == 'Idea' ?
                    <div>
                        <p className="font-bold">Is the idea open for collaborations</p>
                        <div className="flex gap-3">
                            <input type="radio" name="openForCollaborations" id="" required value={'Yes'} onClick={() => {
                                //     setType('Project')
                                // setCurrentCreateSlide(0)
                            }}/>
                            <label htmlFor="">Yes</label>
                        </div>
                        <div className="flex gap-3">
                            <input type="radio" name="openForCollaborations" id="" required value={'No'} onClick={() => {
                                //     setType('Project')
                                // setCurrentCreateSlide(0)
                            }}/>
                            <label htmlFor="">No</label>
                        </div>
                    </div> : ''
                }
                <div className="flex flex-col">

                    <p className="font-bold">Add a file <span className="small font-light">(Select file type)</span></p>
                    
                    <div className="flex justify-between">
                        {
                            possibleFileType.map((fileType, key)=>(
                                <div key={key} className="flex gap-2 p-3 my-3 shadow-lg  border items-center p-auto w-fit rounded-lg">
                                    <i className={`bi bi-${fileType.icon}`}></i>
                                    <p>{fileType.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-3 ">
                    {
                        filesToBeAdded.map((file, key) => (
                            <div key={key} className="flex relative flex-col w-4/12 shadow text-center rounded-sm overflow-hidden">
                                <img src={file.file} alt="" />
                                <div className="flex justify-between">

                                <p className="small m-1 mx-2">{file.type}</p>
                                <p className="text-lg right-0 bg-black text-white"><i className="bi bi-x "></i></p>
                                </div>
                            </div>
                        ))
                    }
                </div>


                 <input type='submit' value={`Create ${type}`}  className=" rounded-full py-2  justify-center items-center text-xl w-full bg-gray-900 text-white" />
 
            </form>
        </div>
    )
}