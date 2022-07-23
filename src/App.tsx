import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

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
     </div>
    </div>
  )
}

export default App
