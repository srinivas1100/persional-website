import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import AppBar from './components/AppBar/AppBar';
import ContactUs from './components/ContactUs/ContactUs';
import CopyRight from './components/CopyRight/CopyRight';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="app">
      <Home></Home>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <ContactUs></ContactUs>
      <CopyRight></CopyRight>
      <AppBar></AppBar>
    </div>

  );
}

export default App;