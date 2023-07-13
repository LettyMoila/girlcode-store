import HeroSection from '../components/HeroSection'
import MainLayout from '../layouts/MainLayout'
import Categories from '../components/CategorySection'
import DealsSection from '../components/DealsSection'

const Home = () => {
return(
    <MainLayout>
      <HeroSection/>
      <Categories />
      <DealsSection/>
    </MainLayout>
)
}

export default Home
