import React from "react";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Projects/Project";
import LockMaster from "../../assets/img/ProjectThumbNails/lm.png";
import Stacija from "../../assets/img/ProjectThumbNails/normal.png";
import Sc from "../../assets/img/ProjectThumbNails/stacija.png";
import ScTwo from "../../assets/img/ProjectThumbNails/stacija-sc.png";
import Soulchannel from "../../assets/img/ProjectThumbNails/tsc.png";
import Memory from "../../assets/img/ProjectThumbNails/memory.png";
import M from "../../assets/img/Icons/mstile-310x310.png";
import PicFlip from "../../assets/img/ProjectThumbNails/picflip.png";
import GratisWasserLogo from "../../assets/img/ProjectThumbNails/gratiswasser/logo.png";
import GratisWasserUIBlank from "../../assets/img/ProjectThumbNails/gratiswasser/ui-blank.png";
import GratisWasserUIFilled from "../../assets/img/ProjectThumbNails/gratiswasser/ui-filled.png";
import GlasflexLogo from "../../assets/img/ProjectThumbNails/glasflex/logo.png";
import GlasflexUIReferences from "../../assets/img/ProjectThumbNails/glasflex/ui-references.png";
import GlasflexUIStrengths from "../../assets/img/ProjectThumbNails/glasflex/ui-strengths.png";

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
                  title="GratisWasser Kampagnenplaner"
                  images={[GratisWasserLogo, GratisWasserUIFilled, GratisWasserUIBlank]}
                  languages={["Typescript", "Solid", "Java 21", "Spring Boot"]}
                  description="Campaign planning system for the marketing area. Combined with a CRUD backend system to manage the tool. I worked agile together with Gaël (Co-Founder) to find the best solution."
                  githubLink=""
                  weblink="https://kampagnenplaner-gratiswasser.com"
              />
            </Slide>
            <Slide direction="right" triggerOnce className="fadeprojects">
              <Project
                  title="Glasflex.ch GmbH Website"
                  images={[GlasflexLogo, GlasflexUIReferences, GlasflexUIStrengths]}
                  languages={["Typescript", "React"]}
                  description="Marketing / Landing page of a glas-repair-service startup."
                  githubLink=""
                  weblink="https://glasflex.ch/"
              />
            </Slide>
            <Slide direction="left" triggerOnce className="fadeprojects">
              <Project
                title="stacija-art.com"
                images={[Stacija, Sc, ScTwo]}
                languages={["Javascript", "React"]}
                description="Personal portfolio for an artist with a complex frontend-design, lots of animations and colours.
            We've worked together agile to find the most suitable, individual and efficient solution for her."
                githubLink=""
                weblink=""
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
                languages={["Typescript", "React", "Tauri", "Rust"]}
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
                languages={["Javascript", "React"]}
                description="A static website for the services of a life-coach! Cool parallax effects and a custom design. We've worked agile and were done fast."
                githubLink=""
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
                languages={["Typescript", "React"]}
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
