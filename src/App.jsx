import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Nav-Bar'
import TopBar from './components/TopBar'
import Categories from './components/CategorySection'
import DealsSection from './components/DealsSection'

function App(){

  return (
    <div>
      <TopBar/>
      <Navbar/>
      <HeroSection/>
      <Categories />
      <DealsSection/>
    </div>
  )
}

export default App
