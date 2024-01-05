import logo from '../../assets/img/logoBlue.png'
import { AppConstants } from '../../assets/Constants/AppConstants'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Google from '../../assets/img/google.png'

export const SignUp =() =>{
    const isLoggedIn = useSelector((state) => state.user.value.isLoggedIn)
    const Navigate = useNavigate()
    useEffect(() =>{
        if(isLoggedIn){
            Navigate('/')
        }
    }, [])

     if(!isLoggedIn){
         return(
             <div className="flex items-center justify-cente h-screen w-full ">
                 <div className="flex flex-col items-cente justify-center h-2/3 gap-6 w-full mx-4 text-lg">
                     <h3 className='font-bold text-3xl mb-6'>Sign up to {AppConstants.name} 
                     </h3>
     
                         <button className=" rounded-full py-2 flex gap-2 justify-center items-center w-full bg-black text-white">
                             <img src={Google} alt="google" className='w-6'/>

                             <p>Sign up with Google</p>
                         </button>
     
     
                     
                     <div className='flex items-center justify-between'>
                         <p className="line bg-gray-400 h-0.5 w-5/12"></p>
                         <small className='text-gray-900 text-center small-lg'>or </small>
                         <p className="line bg-gray-400 h-0.5 w-5/12 "></p>
                     </div>

                         <button className=" rounded-full py-2 flex gap-2 justify-center items-center w-full bg-white border border-black">
                             <p>Continue with email</p>
                         </button>
                    <div className='flex justify-center gap-2 small-lg'>Already have an account? 
                    <Link to='/Login' className='underline'>Sign in</Link></div>
                 </div>
             </div>
         )

     }
}