import './App.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Characters from './components/Characters';
import Episodes from './components/Episodes/Episodes.js';
import Quotes from './components/Quotes/Quotes.js';
import Footer from "./components/Footer";


function App() {
  const currentURL = window.location.pathname;
  function renderContent() {
    switch(currentURL) {
      case "/":
        return <Home/>
      case "/characters":
        return <Characters/>
      case "/quotes":
        return <Quotes/>
      case "/episodes":
        return <Episodes/>  
      default:
      return <Home/>
  }
}
  return (
    <div className="App">
      <Menu />
      <main className='content'>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

