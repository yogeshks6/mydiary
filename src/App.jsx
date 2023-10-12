import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {
  return (
 
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
 </Routes>
 </BrowserRouter>
 
  )
}

export default App
