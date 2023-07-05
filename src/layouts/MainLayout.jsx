import TopBar from './components/TopBar'
import NavBar from './components/Nav-Bar'

export default function({children}) {
    return(
        <>
        <TopBar/>
        <NavBar/>              
        (children)
        </>
    )
}
