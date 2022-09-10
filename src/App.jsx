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
    <div className="App">
      <AppBar></AppBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <ContactUs></ContactUs>
      {/* <ProjectCard imageUrl="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" projectName="Project Name" projectDescription="Write some description of the project on heare. Some short note in the project descreption on heare, write some techanology breaf notes in here of the iplementing in the project." ></ProjectCard> */}
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
