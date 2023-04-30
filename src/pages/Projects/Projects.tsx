import React from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Projects/Project";
import LockMaster from "../../assets/img/ProjectThumbNails/LockMaster.png";
import Stacija from "../../assets/img/ProjectThumbNails/StacyNormal.png";
import Sc from "../../assets/img/ProjectThumbNails/Stacija-Sc.png";
import ScTwo from "../../assets/img/ProjectThumbNails/Stacija-Sc-2.png";
import Soulchannel from "../../assets/img/ProjectThumbNails/tsc.png";
import Memory from "../../assets/img/ProjectThumbNails/memory.png";
import M from "../../assets/img/Icons/mstile-310x310.png";
import PicFlip from "../../assets/img/ProjectThumbNails/picflip.png";
import { Slide, Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1>
          &lt;<span id="title">projects</span>/&gt;
        </h1>
        <div className="projects">
          <Fade className="fadeprojects">
            <Slide direction="left" triggerOnce className="fadeprojects">
              <Project
                title="stacija-art.com"
                images={[Stacija, Sc, ScTwo]}
                languages={["Javascript", "HTML5", "CSS3", "React", "Vite"]}
                description="Personal portfolio for a artist with a complex frontend-design, lots of animations and colours.
            We've worked together agile to find the most suitable, individual and efficient solution for her."
                githubLink="https://github.com/mimi1405/stacija"
                weblink="https://stacija-art.com/"
              />
            </Slide>
            <Slide direction="right" triggerOnce className="fadeprojects">
              <Project
                title="LockMaster"
                images={[LockMaster]}
                languages={["Typescript", "Rust", "Vite", "Tauri", "React"]}
                description="Crossplatform desktop application to create strong and secured passwords locally"
                githubLink="https://github.com/mimi1405/LockMaster"
              />
            </Slide>
            <Slide direction="left" triggerOnce className="fadeprojects">
              <Project
                title="PicFlip!"
                images={[PicFlip]}
                languages={["Typescript", "React", "Vite", "Tauri", "Rust"]}
                description="A free imageconverter for the macOS with drag and drop feature.
            macOS is the drag & drop system itself!
            The perfect tool for fast and efficient image conversion on a Mac.
            It's linked to ImageMagicK."
                githubLink="https://github.com/mimi1405/PicFlip"
              />
            </Slide>
            <Slide direction="right" triggerOnce className="fadeprojects">
              <Project
                title="the-soul-channel.de"
                images={[Soulchannel]}
                languages={["Javascript", "React", "Vite", "HTML5", "CSS3"]}
                description="A static website for the services of a life-coach! Cool parallax effects and a custom design. We've worked agile and were done fast."
                githubLink="https://github.com/mimi1405/PicFlip"
                weblink="https://the-soul-channel.de/"
              />
            </Slide>
            <Slide direction="left" triggerOnce className="fadeprojects">
              <Project
                title="Memory"
                images={[Memory]}
                languages={["C#", "WPF"]}
                description="Desktop memory-game made with C# WPF. Memoryicons contain known programing languages and or technologies."
                githubLink="https://github.com/mimi1405/MemoryGame-with-WPF"
              />
            </Slide>
            <Slide direction="right" triggerOnce className="fadeprojects">
              <Project
                title="This site"
                images={[M]}
                languages={["Typescript", "React", "Vite", "HTML5", "CSS3"]}
                description="This site here is actually my first typescript project for production. It is a remake of my old one with a much better UI-Design, some frontend-logic for interaction and with updated projects to show off my current skills."
                githubLink="https://github.com/mimi1405/TS-VITE-REACT-Portoflio-2.0"
              />
            </Slide>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Projects;
