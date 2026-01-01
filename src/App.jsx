import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import GitHubActivity from "./sections/GitHubActivity";
import Experience from "./sections/Experience";
import Blogs from "./sections/Blogs";
import Connect from "./sections/Connect";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <GitHubActivity />
      <Experience />
      <Blogs />
      <Connect />
      <Footer />
    </>
  )
};

export default App;