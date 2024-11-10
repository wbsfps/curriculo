import Profile from './page/partials/Profile';
import About from './page/partials/About';
import HardSkills from './page/partials/HardSkills';
import WorkExpercience from './page/partials/WorkExperience';
import SideProjects from './page/partials/SideProjects';
import Links from './page/partials/Links';

import './components/GlobalStyle/GlobalStyle.css';

function App() {

  return (
    <div className='main_container'>
    <Profile/>
    <About/>
    <HardSkills/>
    <WorkExpercience/>
    <SideProjects/>
    <Links/>
    </div>
  )
}

export default App;
