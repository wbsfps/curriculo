import Header from './page/partials/Header';
import Profile from './page/partials/Profile';
import About from './page/partials/About';
import WorkExpercience from './page/partials/WorkExperience';
import SideProjects from './page/partials/SideProjects';
import Links from './page/partials/Links';

import './components/GlobalStyle/GlobalStyle.css';

function App() {

  return (
    <>
    <Header/>
    <Profile/>
    <About/>
    <WorkExpercience/>
    <SideProjects/>
    <Links/>
    </>
  )
}

export default App;
