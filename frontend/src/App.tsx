
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  const router = createBrowserRouter([
    {path: '/login',element: <Login/> },
    {path: '/signup',element: <Signup/> },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
