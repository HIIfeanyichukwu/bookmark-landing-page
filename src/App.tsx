import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {

  return (
    <div className="App">
     <div className="AppContainer">
        <header>
          <Navbar/>
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
     </div>
    </div>
  )
}

export default App
