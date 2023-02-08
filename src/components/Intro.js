import "../styles/Intro.css";
import resume from "../media/ChaseStearn.pdf";
import { GoMail } from "react-icons/go";
import { AiOutlineSolution, AiOutlineGithub } from "react-icons/ai";

const Intro = () => {
  return (
    <div id="intro">
      <h1 className="greeting">
        Hi, I'm <span className="name">Chase</span>.
      </h1>
      <p className="description">I'm a JavaScript Developer</p>
      <div className="links">
        <a href="https://github.com/run-after" target="_blank" rel="noreferrer">
          <AiOutlineGithub className="link" />
        </a>
        <a href="mailto:run.after@protonmail.com">
          <GoMail className="link" />
        </a>
        <a href={resume} target="_blank" rel="noreferrer">
          <AiOutlineSolution className="link" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
