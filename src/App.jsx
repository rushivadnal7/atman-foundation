import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/about',
      element: <About/>,
    },
    {
      path: '/contact',
      element: <Contact/>,
    }
  ])

  return (
    <>
        <RouterProvider router={Router}/>
          
    </>
  )
}

export default App
