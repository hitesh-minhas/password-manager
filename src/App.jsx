import './App.css'
import Navbar from './components/Navbar'
import Vault from './components/vault'
import Footer from './components/Footer'
import PasswordContextProvider from './store/store'

function App() {

  return (
    <>
      {/* Body Background  from https://bg.ibelick.com/ */}
      <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <PasswordContextProvider>
        <Navbar />
        <Vault />
        <Footer />
      </PasswordContextProvider>
    </>
  )
}

export default App
