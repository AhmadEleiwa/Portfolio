
import './App.css'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import MyProjects from './component/MyProjects'
import Info from './component/Profile'

function App() {
 
  return (
    <div className='container'>
     <Header />
     <HeroSection />
     <Info />
     <MyProjects />
    </div>
  )
}

export default App
