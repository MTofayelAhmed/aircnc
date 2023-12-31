import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../page/Home/Home'
import Login from '../page/Login/Login'
import SignUp from '../page/SignUp/SignUp'
import RoomDetails from '../page/RoomDetail/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
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
