import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../assets/Contexts/AppContext'
import profileImg from '../../assets/img/Leaders/program-img6.jpg'
import coverImg from '../../assets/img/Leaders/program-img9.jpg'
import { AboutProfile } from './AboutProfile'
import { ProjectProfile } from './ProjectsProfile'
import { SettingsProfile } from './SettingsProfile'
import { ProfileIdeas } from './ProfileIdeas'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleNavbar } from '../../State/state'
import { Dashboard } from './Dashboard/DashboardProfile'
import './Profile.scss'
import axios from 'axios'

export const Profile = () => {
    // const dbLocation = useSelector((state) => state.app.value.dbLocation)
    const isLoggedIn = useSelector((state) => state.user.value.isLoggedIn)
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const profileDetails = useSelector((state) => state.user.value.profileDetails)
    useEffect(() => {
        if(!isLoggedIn){
            Navigate('/Login')
        }
    }, [])

  
    const [ currentProfileNav, setCurrentProfileNav ] = useState(2)

    const ProfileNav = [
        {
            title: 'Dashboard',
            icon: 'grid',
        },
        {
            title: 'Projects',
            icon: 'file-earmark'
        },
        {
            title: 'About',
            icon: 'person',
        },
        {
            title: 'Ideas',
            icon: 'pen',
        },
      
        {
            title: 'Settings',
            icon: 'gear',
        },
    ]
    

    if(isLoggedIn){
        
        return(
                <div className="profile relative">
                <Link to='/' className="fixed text-white text-2xl px-3 top-0 w-fit z-50 bg-gray-900 " onClick={() =>  dispatch(toggleNavbar({hideNav: false}))}>
                    <i className="bi bi-arrow-left"></i>
                </Link>
    
                
                <div className="flex flex-col items-center w-full justify-center relative">
                    <Link to='/' className="absolute text-white bg-fade text-xl px-2 bottom-0 right-0 w-fit z-50 " onClick={() =>  dispatch(toggleNavbar({hideNav: true}))}>
                        <i className="bi bi-pencil-fill"></i>
                    </Link>
                    <div className="coverPhoto w-full z- bg-no-repeat bg-center bg-cover" style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(${coverImg})`,
                        height: 20+'vh',
    
                    }}>
    
                    </div>
                    <div className='absolute' style={{
                        top: 50+'%'
    
                    }}>
    
                    <img src={profileImg} alt="" className="" style={{
                        width: 130+'px',
                        height: 130+'px',
                        borderRadius: 100+'%',
                    }}/>
                   
                    </div>
                </div>
                <h3 className='mt-9 pt-9 font-bold text-center text-xl'>{profileDetails?.firstName + ' ' + profileDetails?.lastName} </h3>
                <p className='text-center text-lg mb-3'>{profileDetails.role}</p>
                <div className='flex items-center justify-center  text-xl  font-bold gap-2 shadow-lg sticky top-0 rounded-x my-2 p-2 z-30 bg-white'>
                    <i className={`text-2xl bi bi-${ProfileNav[currentProfileNav].icon}`}></i>
                    <h3 className=''>{ProfileNav[currentProfileNav].title}</h3>
                </div>
    
                <div className="flex w-full justify-between fixed bottom-0 translate-y-5 text-white z-30 shadow-sm my-4  px-3 bg-gray-900">
                    {
                        ProfileNav.map((nav, key) => (
                            <div key={key} className={`cursor-pointer flex flex-col w-full py-3 justify-center items-center `} 
                            onClick={()=> setCurrentProfileNav(key)}>
                                <i className={`text-xl bi bi-${nav.icon}${key == currentProfileNav ? '-fill text-3xl' : '' }`}></i>
                                
                            </div>
                        ))
                    }
                </div>
                {
                    currentProfileNav == 0 &&
                    <Dashboard />
                }
                {
                    currentProfileNav == 1 &&
                    <ProjectProfile />
                }
                {
                    currentProfileNav == 2 &&
                    <AboutProfile profileDetails={profileDetails}/>
                }
                {
                    currentProfileNav == 3 &&
                    <ProfileIdeas />
                }
                {
                    currentProfileNav == 4 &&
                    <SettingsProfile />
                }
                
            </div> 
        )

    }
}