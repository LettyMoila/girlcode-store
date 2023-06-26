import HeroSection from '../components/HeroSection'
import Navbar from '../components/Nav-Bar'
import TopBar from '../components/TopBar'
import Categories from '../components/CategorySection'
import DealsSection from '../components/DealsSection'

const Home = () => {
return(
    <>
        <TopBar/>
      <Navbar/>
      <HeroSection/>
      <Categories />
      <DealsSection/>
    </>
)
}

export default Home
