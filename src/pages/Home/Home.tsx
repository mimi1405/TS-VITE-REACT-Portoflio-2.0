import React, { useRef } from "react";
import "./Home.css";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Me from '../../assets/img/Other/Me.jpg';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
  if (sectionRef.current) {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  }
};

const calculateAge = (): number => {
  const today = new Date();
  const birthDate = new Date("2004-05-14");
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  const age = today.getFullYear() - birthYear;
  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    return age - 1;
  }
  return age;
};

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="entry section">
        <div id="greeting">
          <h1 id="hello">
            Hi! I'm &lt;<span id="name">MAKSIM</span>/&gt;
          </h1>
          <h2 id="build">I like to build software.</h2>
        </div>
        <div id="arrow">
          <a href="#infos">
            <HiOutlineArrowTrendingDown size={180} />
          </a>
        </div>
      </section>
      <section ref={sectionRef} id="infos" className="section">
        <div id="card">
          <div>
            <h4 id="aboutMe_title">About Me</h4>
            <img alt="Image of the portfoliocreator" id="me" src={Me} />
          </div>
          <p>
            I'm a {calculateAge()} year old student. <br /> My passion is programming. No
            matter what. <br />  <br /> <br /> In 2019 I started to attend the computer
            science middle school. Started with IT basics and now going on with
            more complex programming <Link id="projectslink" to="/projects">projects</Link> behind me.
          </p>
        </div>
      </section>
      <section id="socials">
        <h1 id="hello">
          &lt;<span id="name">Reach Me</span>/&gt;
        </h1>
        <div>
          <a href="https://github.com/mimi1405">
            <AiFillGithub size={75} />
          </a>
          <a href="https://www.linkedin.com/in/maksim-momcilovic-1b3a4624b">
            <AiFillLinkedin size={75} />
          </a>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default Home;
