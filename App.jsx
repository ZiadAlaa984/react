
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portofolio from './Components/Portofolio/Portofolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "portofolio", element: <Portofolio /> },
    ]
  }
]);
function App() {
  return <RouterProvider router={x}></RouterProvider>
}
// !    tasks a
// ~ section portofolio 
// ~ navbar
export default App;