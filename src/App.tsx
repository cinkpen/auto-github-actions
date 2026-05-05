import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import AnalogClock from './components/AnalogClock'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <p>Welcome to the autonomous issue-driven development platform.</p>
          <AnalogClock />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
