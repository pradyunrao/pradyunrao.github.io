
import { About } from './components/about/About'
import { Navbar } from './components/navbar/Navbar'
import appStyle from './App.module.css'
import { Projects } from './components/projects/Projects'

function App() {

  return (
    <div className={appStyle.main_div}>
      <Navbar />
      <About/>
      <Projects/>
    </div>
  )
}

export default App
