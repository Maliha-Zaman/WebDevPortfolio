import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';

import Services from './components/services/services'

import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/contact/contact';
const App =()=> {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
