import { useState } from "react";
import { Link } from "react-router-dom";
import { EditListProfile, EditProfile } from "./EditProfile";

const ProfileComponent = ({Item}) => {
    const [ showEdit, setShowEdit ] = useState(false)
    const [ showListEdit, setShowListEdit ] = useState(false)

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ link, setLink ] = useState('')
    return(
        <>
        <div className='mt-4 flex flex-col gap-1 px-3'>
                {
                    Item.map((info, key) => (
                        info.type == 'list' ? 
                       
                        <div className="flex flex gap-3 " key={key}>

                                    <p><i className={`text-xl bi bi-${info.icon}`}></i></p>
                                    <div className="flex flex-col w-full gap-">
                                    <div className="flex items-center justify-between w-full gap-2">

                                        <h3 className='font-bold text-xl'>{info.head}</h3>
                                        <p onClick={() =>{
                                            setShowListEdit(true)
                                            setTitle(info.head)
                                            setContent(info.content)
                                        }}><i className="bi bi-pencil-fill text-xl"></i></p>
                                    </div>
                                    <div className='flex gap-3 flex-wrap'>
                                        {
                                            info.content.map((i, key) => (

                                                <p key={key} className='bg-gray-50 p-2 w-fit rounded-sm '>{i}</p>
                                            ))
                                        }
                                    </div>   
                                </div>

                           
                        </div>
                        
                         :
                        <div className="flex flex gap-3 " key={key}>

                                    <p><i className={`text-xl bi bi-${info.icon}`}></i></p>
                                    <div className="flex flex-col w-full gap-">
                                    <div className="flex items-center justify-between w-full gap-2">

                                        <h3 className='font-bold text-xl'>{info.head}</h3>
                                        <p onClick={() =>{
                                            setShowEdit(true)
                                            setTitle(info.head)
                                            setContent(info.content)
                                        }}><i className="bi bi-pencil-fill text-xl"></i></p>
                                    </div>
                                    <p className='bg-gray-50 p-2 w-full rounded-sm'>{info.content}</p>
                                </div>

                           
                        </div>
                    ))
                }
            </div>
            {
                showEdit &&
                <EditProfile title={title} content={content} link={link} setShowEdit={setShowEdit}/>
            }
            
            {
                showListEdit &&
                <EditListProfile title={title} content={content} link={link} setShowListEdit={setShowListEdit}/>
            }
        </>
    )
}

const ProjectIdeaProfile = ({Item, Type }) => {

    return(
        <div className='flex flex-col'>
            {/* <div className='flex w-full flex-wrap m-3'> */}
            <div className='grid grid-cols-2 my-3 gap-1' >
            {/* <div className='w-full shadow-lg rounded-xl overflow-hidden cursor-pointer' style={{
                            height: 160+'px',
                            // width: 150+'px'
                        }} onClick={() => setCurrentProfileNav(Type == 1 ? 5 : Type == 5 ? 1 : '' )}>
                            <div className='bg-center bg-no-repeat h-full relative flex items-center text-center justify-center '
                             style={{
                                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0))',
                                // backgroundSize: 'cover',
                               
                            }} >
                                <p className="absolute small bg-white rounded-br-lg p-1 top-0 left-0">{Type == 1 ? 'Ideas' : 'Projects'}</p>
                                <p className='text-white flex flex-col'>
                                    <span>View all {Type == 1 ? 'Ideas' : 'Projects'}
                                        <i className="bi bi-arrow-right"></i>   
                                    </span>
                                <small className='smaller'>4 total {Type == 1 ? 'Ideas' : 'Projects'}</small>  
                                </p>

                             
                            </div>
                        </div> */}
                {
                    Item.map((Item, key) => (
                        <div key={key} className='w-full shadow-lg rounded overflow-hidden cursor-pointer' style={{
                            height: 150+'px',
                            // width: 150+'px'
                        }}>
                            <div className='bg-center bg-no-repeat h-full relative'
                             style={{
                                backgroundImage: `url(${Item.img})`,
                                backgroundSize: 'cover',
                               
                            }} >
                                <p className="absolute small bg-white rounded-br-lg p-1 truncate text-wrap-hidden shadow">{Item.name}</p>

                                <div className="flex h-full items-end ">
                                    <div className="flex items-end justify-between bg-dark-fade w-full px-2 text-white">
                                        <p className="flex flex-col items-center">
                                            <i className="bi bi-heart"></i>
                                            <span className="smaller">23</span>
                                        </p>
                                        <p className="flex flex-col items-center">
                                            <i className="bi bi-chat"></i>
                                            <span className="smaller">23</span>
                                        </p>
                                        <p className="flex flex-col items-center">
                                            <i className="bi bi-bookmark"></i>
                                            <span className="smaller">3</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))  
                }
            </div>
                    <Link className='flex flex-col shadow-lg text-center items-center w-full my-8 bg-gray-100 p-5 cursor-pointer gap-3'>
                        <p className='text-5xl'><i className="bi bi-plus-circle"></i></p> 
                        <p>Create a new {Type == 1 ? 'Project' : 'Idea'}</p>
                    </Link> 
            
           
           
        </div>
    )
}

export { ProfileComponent, ProjectIdeaProfile }