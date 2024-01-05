import { Link } from "react-router-dom";
import './Navbar.scss'
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from '../../assets/Contexts/AppContext';
import profileImg from '../../assets/img/Leaders/program-img6.jpg'
import App from "../../App";
import { toggleNavbar } from "../../State/state";
import { useDispatch, useSelector } from "react-redux";




const Navbar = () => {


    const profile = {
      id: 200,
      
    }
    // const userName = useSelector((state) => state.user.value.profileDetails.firstName)

      
    // set show cart    
    const dispatch = useDispatch()


    // Set navbar cackground color and height
    

    return ( 

        <nav className="navbar fixed top-0 bg-gray-100 border-bottom px-5 py-2 w-full shadow-lg" aria-label="Fourth navbar example ">
        <div className="container-fluid w-100 flex justify-between items-center">
          <Link to={`/profile/${profile.id}`} className="navProfilePics flex items-end justify-center h-full bg relative w-full" onClick={() =>    dispatch(toggleNavbar({hideNav: true}))}>
              <img src={profileImg} alt="Profile Pics" className="w-full rounded-full border-dark" />
          </Link>
            <div className="flex gap-3">
              <Link to='/Search'>
                <i className={`bi bi-search text-2xl`}></i>
              </Link>
              <i className='bi bi-bookmarks text-2xl'></i>
                
            </div>
    
         
        </div>
      </nav>
     )
}

const navs = [
  // home, message, add, ideas, people
  // 
  {
    icon: 'house',
    link: ''
  },
  {
    icon: 'chat-dots',
    link: ''
  },
  {
    icon: 'plus-circle',
    link: '/Create'
  },
  {
    icon: 'bell'
  },
  { 
    icon: 'person-plus',
    link: ''
  },
]

const NavbarDown = () => {
  const { currentNav, setCurrentNav } = useContext(AppContext)
  return(
        <nav className="navbar fixed bottom-0 w-full bg-gray-900  bordertop flex justify-between w-100 px-7 p-4" style={{
          zIndex: 201
      }}>
        {
          navs.map((nav, key) => (
            <Link to={nav.link} key={key} className='flex text-white flex-col items-center' 
            onClick={() => {
              setCurrentNav(key)
            }}>
              <i className={`bi bi-${nav.icon}${currentNav == key ? '-fill' : ''}  text-2xl`} style={{
                transform: key == 2 ? 'scale(1.8)': ''
              }}></i>
            </Link>
          ))
        }
       
  
    </nav>
  )
}
export { Navbar, NavbarDown };