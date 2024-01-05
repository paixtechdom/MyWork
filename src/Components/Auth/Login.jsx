import logo from '../../assets/img/logoBlue.png'
import { AppConstants } from '../../assets/Constants/AppConstants'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../State/state'
import { toggleNavbar } from '../../State/state'
import { useDispatch, useSelector } from 'react-redux'
import Google from '../../assets/img/google.png'
import axios from 'axios'
import { useRef } from 'react'


export const Login =() =>{
    const isLoggedIn = useSelector((state) => state.user.value.isLoggedIn)

    const Navigate = useNavigate()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    useEffect(() =>{
        if(isLoggedIn){
            Navigate('/')
        }
    }, [])


    const [ isTypingPassword, setIsTypingPassword ] = useState(false)
    const [ isTypingEmail, setIsTypingEmail ] = useState(false)
    const [ inputEmail, setInputEmail ] = useState('')
    const [ inputPassword, setInputPassword ] = useState('')

    const [isPasswordInputTypePassword, setIsPasswordInputTypePassword ] = useState(true)

    const profileId = 'oluwaferanmijohnpeace'
    const dbLocation = useSelector((state) => state.app.value.dbLocation)
    useEffect(() => {
        setIsTypingPassword(inputPassword.length < 1 ? false : true)
        setIsTypingEmail(inputEmail.length < 1 ? false : true)
        
     }, [inputEmail, inputPassword])

     const dispatch = useDispatch()
  

     const handleLogin = (e) => {
        e.preventDefault()
        // if(inputEmail == 'a' && inputPassword == 'a'){
            getUserDetails(inputEmail, inputPassword, dbLocation)
        // }
        
    }
    
    const getUserDetails = async (email, password, dbLocation) => {
        try {
            await axios.get(`${dbLocation}/Auth.php/${email}/${password}`).then(function(response){
                Navigate('/')
                console.log(response.data)
                dispatch(toggleNavbar({hideNav: false}))
                dispatch(login({
                        isLoggedIn: true,                    
                        profileDetails: response.data
                    }))
            })
            
        } catch (error) {
            console.log(error)
        }
    }

     if(!isLoggedIn){
         return(
             <div className="flex items-center justify-cente h-screen w-full ">
                 <div className="flex flex-col items-cente justify-center h-2/3 gap-6 w-full mx-4 text-lg">
                     <h3 className='font-bold text-3xl mb-6'>Sign in to {AppConstants.name}
                     </h3>
     
                         <button className=" rounded-full py-2 flex gap-2 justify-center items-center w-full bg-white border border-black">
                         <img src={Google} alt="google" className='w-6'/>
                             <p>Sign in with Google</p>
                         </button>
     
     
                     
                     <div className='flex items-center justify-between'>
                         <p className="line bg-gray-400 h-0.5 w-3/12"></p>
                         <small className='text-gray-900 text-center small-lg'>or sign in with email</small>
                         <p className="line bg-gray-400 h-0.5 w-3/12 "></p>
                     </div>
                     <form onSubmit={handleLogin} className='my-4 flex flex-col gap-7'>
                         <div className='relative mb-1'>
                             <label className={`absolute left-3  ${isTypingEmail ? 'top-0  -translate-y-6 font-bold text-sm' : 'small-lg top-3 text-gray-600' }  transition-all duration-200`} onClick={() => {
                                emailInputRef.current.focus()
                             }}> 
                            Email</label>
     
                             <input type="text" className='w-full border-solid border border-gray-400 p-3 rounded-xl outline-none h-full' value={inputEmail}
                             onChange={(e) => setInputEmail(e.target.value)}
                             required 
                             ref={emailInputRef}/>
                         </div>
     
                         <div className='w-full flex flex-col '>
     
                         <div className='relative'>
                             <label className={`absolute left-3  ${isTypingPassword ? 'top-0  -translate-y-6 font-bold text-sm' : 'small-lg top-3 text-gray-600' }  transition-all duration-200`} onClick={() => {
                                passwordInputRef.current.focus()
                             }}> Password</label>
     
                             <input type={isPasswordInputTypePassword ? 'password' : 'text'} className='w-full border-solid border border-gray-400 p-3 rounded-xl outline-none h-full' value={inputPassword}
                             onChange={(e) => setInputPassword(e.target.value)}
                             required
                             ref={passwordInputRef} />
     
                             <p onClick={() => setIsPasswordInputTypePassword(!isPasswordInputTypePassword)}><i className={`bi ${isPasswordInputTypePassword ? 'bi-eye' : 'bi-eye-slash'}-fill absolute top-0 translate-y-2 text-gray-800 text-2xl mx-3 right-0`}></i></p>
                         </div>
     
                         <Link className='p-2 m-0 underline text-center w-full small-lg'>Forgot Password?</Link>
     
                         </div>
                         <input type='submit' value='Sign in'  className=" rounded-full py-2  justify-center items-center text-xl w-full bg-black text-white" />
     
                         <div className='flex justify-center gap-2 small-lg'>Don't have an account? 
                         <Link to='/Signup' className='underline'>Sign up</Link></div>
                     </form>
                 </div>
             </div>
         )

     }
}