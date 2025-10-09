
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login'
import Signup from './pages/Signup'
import URLShortener from './pages/URLShortener';

function App() {

  const router = createBrowserRouter([
    {path: '/login',element: <Login/> },
    {path: '/signup',element: <Signup/> },
    {path: '/',element: <URLShortener/> },
  ])
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
