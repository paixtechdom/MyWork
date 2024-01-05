import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { Products } from "../../assets/Constants/Products"
import '../Home/Home.scss'


export const EachProject = () => {
    const id = useParams()
    const [ project, setProject ] = useState(null)
    const [ commentNo, setCommentNo ] = useState(4)
    // const [ descHeight, setDescHeight ] = useState('fit-content')

    useEffect(() => {
        Products.forEach((product) => {
            if(product.productId == id.id){
                setProject(product)
            }
        })
    }, [])

    return(
        <div className='relative w-full f top-0 bg-white flex flex-col' style={{
            zIndex: 210,
            minHeight: 100+'vh'
        }}>
         
            <div className="flex flex-col mt- eachPost bg-white">
                    <div className="flex top bg-gray-100 text-black items-center justify-between fixed w-full z-50 shadow-lg">
                        <div className="flex items-center gap-2">
                          <Link to='/' className="text-white text-2xl px-2 h-full w-fit z-50 bg-gray-900" >
                              <i className="bi bi-arrow-left"></i>
                          </Link>
                          <div className="postProfileImg rounded-100 flex justify-center items-center" style={{
                            backgroundImage: `url(${project?.img2})`
                          }}>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex gap-1 items-center small" style={{
                              marginBottom: -7+'px'
                            }}>
                              <p className="m-0 ">{project?.store}</p>
                              <div>
                              <i className={` bi bi-star${project?.rating > 0 ? '-fill' : ''}`} style={{
                                color: 'orange'
                              }}></i>
                              <span className=''>
                                  {project?.rating}
                              </span>
                              </div>
  
                            </div>
                            <h5 className="m-0 text-xl font-bold"> {project?.name} </h5>
  
                          </div>
  
                        </div>
                        <p className="smaller mx-3">2hr</p>
                     
  
                    </div>
                    <div className="bg-white mt-9 pt-9">
                        <p className="px-3 mt-5" style={{
                            // minHeight: 
                        }}> 
                            {project?.description}
                            {project?.description}
                        </p>
                    </div>
                    <div className="flex bottom bg-gray-100 text-black justify-between items-center p-3 px-4 text-2xl mt-2 mb-4">
                      <div className="flex flex-col justify-center items-center relative">
                        <i className="bi bi-heart-fill p-0 m-0 text-red"></i>
                        <span className="small p-0 m-0 absolute translate-y-5">20</span>
                      </div>
                      <div className="flex flex-col justify-center align-center relative">
                        <i className="bi bi-chat"></i>
                        <span className="small p-0 m-0 absolute translate-y-5 translate-x-1">22</span>
                      </div>
                       <i className="bi bi-bookmark"></i>
                      
                    </div>
                    <div className="flex flex-col bg-white gap-1">
                        <img src={project?.img2} alt="" />
                        <img src={project?.img} alt="" />
                        <img src={project?.img2} alt="" />
                        <img src={project?.img} alt="" />
                    </div>
                    <div className="flex flex-col bg-white p-3 mt-9 ">

                        <p className="font-bold text-2xl"><i className="bi bi-chat"></i> Comments</p>

                        <div className="my-4 flex flex-col gap-4">
                           {
                            Products.map((comment, key) => (
                              key < commentNo &&
                              <div key={key} className="eachComment flex flex-col">
                                <div className="top flex bg-gray-100 items-center gap-2">
                                  <div className="postProfileImg rounded-100 flex justify-center items-center " 
                                  style={{
                                    backgroundImage: `url(${comment?.img2})`
                                  }}>
                                  </div>  
                                  <div className="flex flex-col">
                                    <p className="font-bold">{comment.name}</p>                        
                                    <div className="smaller">
                                    <i className={` bi bi-star${comment.rating > 0 ? '-fill' : ''}`} style={{
                                      color: 'orange'
                                    }}></i>
                                    <span className=''>
                                        {comment.rating}
                                    </span>
                                    </div>
                                  </div> 
                                  </div>

                                  <p className="small-lg">{comment.description}</p>
                                </div>
                            ))
                           }
                        </div>
                        <div className="flex gap-4 px-3 justify-between w-full">
                        {
                            commentNo >= Products.length ? '' :
                            <div className="flex items-end justify-center gap-2 my-2 w-full bg-gray-900 rounded-full p-2 text-white" onClick={() => {
                                setCommentNo(commentNo + 4)
                            }}>
                                <p>Show More</p>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        }
                        {
                            commentNo > 4 ? 
                            <div className="flex items-end justify-center gap-2 my-2 w-full bg-white border border-gray-900 rounded-full p-2 text-black" onClick={() => {
                                setCommentNo(commentNo - 4)
                            }}>
                                <p>Show Less</p>
                                <i className="bi bi-chevron-up"></i>
                            </div> : ''
                        }
                    </div>
                        <form action="" className="flex flex-col gap-5 w-full items-center mt-5">
                            <textarea type="text" rows={3} placeholder="Write Commment..." className="w-full border border-gray-400 p-3 rounded-xl"/>
                            <input type="submit" value={'Send'} className='p-3 text-white bg-gray-900 w-3/5 rounded-full'/>
                        </form>
                    </div>
            </div>

            {/* {project?.name} */}
        </div>
    )
}