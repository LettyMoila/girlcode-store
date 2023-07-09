import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'

function App(){

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Category/:catSlug' element={<Category />}/>
      <Route path='/Product/:prodSlug' element={<Product />}/>
    </Routes>
    </>
  )
}

export default App
