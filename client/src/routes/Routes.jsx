import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../page/Home/Home'
import Login from '../page/Login/Login'
import SignUp from '../page/SignUp/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
])
