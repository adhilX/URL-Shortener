
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login'
import Signup from './pages/Signup'
import URLShortener from './pages/URLShortener';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProtectedRoute from './routes/ProctectedRoute';

function App() {

  const router = createBrowserRouter([
    {path: '/login',element: <Login/> },
    {path: '/signup',element: <Signup/> },
    {path: '/',element:<><ProtectedRoute><URLShortener/></ProtectedRoute></> },
  ])
  return (
    <>
        <Provider store={store}>

      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
