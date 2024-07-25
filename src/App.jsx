
import { Suspense } from 'react';
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from './pages/Landing';
import Authentficate from './pages/Authentficate';
import Register from './components/logincomponent/Register';
import Login from './components/logincomponent/Login';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: (
        <div className="flex items-center  sm justify-center text-7xl p-12">
          404 Not Found
        </div>
      ),
    },
    {
      path: "/login",
      element: <Authentficate >
        <Login />
      </Authentficate>,
      errorElement: (
        <div className="flex items-center  sm justify-center text-7xl p-12">
          404 Not Found
        </div>
      ),
    },
    {
      path: "/register",
      element: <Authentficate  >
        <Register />
      </Authentficate>,
      errorElement: (
        <div className="flex items-center  sm justify-center text-7xl p-12">
          404 Not Found
        </div>
      ),
    }
  ]);

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
       <RouterProvider router={router} />
    </Suspense>
    </>
  )
}

export default App
