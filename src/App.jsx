import './App.css';
import AppBar from './components/AppBar/AppBar';
import ContactUs from './components/ContactUs/ContactUs';
import CopyRight from './components/CopyRight/CopyRight';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import ProjectCard from './components/ProjectCard/ProjectCard.jsx';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <Home></Home>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <ContactUs></ContactUs>
      <ProjectCard></ProjectCard>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
