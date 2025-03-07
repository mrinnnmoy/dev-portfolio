import React from 'react';

// Images
import pfp from "../assets/pfp.png";
import mrinmoy from "../assets/mrinmoy.png";

// Icons
import { MdSunny } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { CiSquareChevRight } from "react-icons/ci";

const Home = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <img src={pfp} alt="pfp-icon" />
          <span className='header-name'>Mrinmoy Porel.</span>
        </div>
        <div className="header-right">
          <MdSunny className='theme-icon' />
          <MdOutlineDarkMode className='theme-icon' />
        </div>
      </header>

      <main>
        <div className="profile-card">
          <div className="profile-card-left">
            <img src={mrinmoy} alt="profile-img" />
            <span>Mrinmoy Porel</span>
            <p>A Blockchain Developer building advanced decentralized apps for the future of Web3.</p>
            <div className="social-links">
              <a href="https://github.com/mrinnnmoy" target='_blank'><FiGithub className='icons' /></a>
              <a href="https://x.com/mrinnnmoy/" target='_blank'><FaXTwitter className='icons' /></a>
              <a href="https://www.linkedin.com/in/mrinnnmoy/" target='_blank'><AiOutlineLinkedin className='icons' /></a>
              <a href='mailto:mrinmoy202000@gmail.com'><HiOutlineMail className='icons' /></a>
            </div>
          </div>

          <div className="profile-card-right">
            <h3>BLOCKCHAIN</h3>
            <h5>DEVELOPER</h5>
            <p>Passionate about building secure, transparent and user-friendly blockchain solutions that drive real-world impact.</p>
            <div className="small-card">
              <div className="card">
                <span>+3</span>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <div className="card">
                <span>+10</span>
                <p>PROJECTS COMPLETED</p>
              </div>
              <div className="card">
                <span>+5</span>
                <p>OPEN-SOURCE CONTRIBUTIONS</p>
              </div>
            </div>

            <div className="resume-card">
              <div className="resume-card-left">
                <FaRegUser className='resume-icon' />
                <span>Download CV.</span>
              </div>
              <a href="#" download className='resume-button'>
                <CiSquareChevRight className='resume-button-icon' />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default Home;