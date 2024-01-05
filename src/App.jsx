import './index.css';
import { createBrowserRouter, RouterProvider, Outlet, Link, useNavigate } from 'react-router-dom';
// import Footer from './components/Footer/Footer';
import { Navbar, NavbarDown } from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
// import Services from './pages/Services/Services';
import { AppContext } from './assets/Contexts/AppContext'
import './App.scss'
import { useState } from 'react';
import { Profile } from './pages/Profile/Profile';
import { useEffect } from 'react';
import { Login } from './Components/Auth/Login';
import { SignUp } from './Components/Auth/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { alertFunc, toggleNavbar } from './State/state';
import { CreatePage } from './Pages/CreatePage/CreatePage';
import { SearchTheApp } from './Components/Search/SearchTheApp';
import { Alert } from './Components/Alerts/Alert';
import { EachProject } from './Pages/EachProject/EachProject';

const Layout = () =>{
  const [ currentNav, setCurrentNav ] = useState(0)

  const isLoggedIn = useSelector((state) => state.user.value.isLoggedIn)
  const hideNav = useSelector((state) => state.app.value.hideNav)
  const showAlert = useSelector((state) => state.alert.value.showAlert)

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  useEffect(() => {
    if(!isLoggedIn){
        Navigate('/Login')
    }
  }, [])

  const url = document.baseURI
  useEffect(() => {
    if(url.includes('profile')){
      dispatch(toggleNavbar({hideNav: true}))
    }
  //   dispatch(alertFunc({
  //     showAlert: true,
  //     alertMessage: 'Hello alumnis how you doing fam',
  //     alertFormatIndex: 2
  // }))
  //  ShowAlert('Hello Comrades', 0)
  }, [])
  
  document.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () =>{
      document.documentElement.scrollTop = 0
    })
  })

  return(
    <div className='app'>
      <AppContext.Provider value={{currentNav, setCurrentNav }}>
        {
          isLoggedIn ?
          <>
          {
            showAlert ?  
            <Alert /> : ''
          }
        {
          !hideNav ?
          !url.includes('profile') ?
          <>
          <Navbar /> 
          <NavbarDown />
          </> : ''
          : ''
        }
          </> :  ''
        }
        
        <Outlet />
        
        {/* <Footer /> */}
      </AppContext.Provider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/Create',
        element: <CreatePage /> 
      },
      {
        path: '/Search',
        element: <SearchTheApp  /> 
      },
      {
        path: '/project/:id',
        element: <EachProject />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/Login',
        element: <Login />
        
      },
      {
        path: '/Signup',
        element: <SignUp />
        
      },
      
      {
        path: '/*',
        element: <div className='pt-9 m-9 '>Page not found <Link className='mt-9 text-black' to='/'>go to home page</Link></div>
      }
    ]
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} /> 
    </div>
  );

}


export default App;
