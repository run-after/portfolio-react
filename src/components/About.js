import "../styles/About.css";
import htmlIcon from "../media/html.png";
import cssIcon from "../media/css.jpg";
import javascriptIcon from "../media/javascript.png";
import reactIcon from "../media/react.png";
import gitIcon from "../media/git.png";
import nodeIcon from "../media/node.jpeg";
import mongoIcon from "../media/mongodb.png";
import awsIcon from "../media/aws.png";
import nextIcon from "../media/nextjs.png";
import jestIcon from "../media/jest.png";
import tailwindIcon from "../media/tailwind.png";
import cypressIcon from "../media/cypress.png";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="definition">
          <div className="title">
            <span className="name">Chase </span>
            <span className="pronounce">[ cheys ]</span>
          </div>
          <p>
            verb (used without object),{" "}
            <span className="bold">chased, chas-ing</span>
          </p>
          <div>
            <span className="number">1 </span>
            <span>to follow in pursuit</span>
          </div>
          <div>
            <span className="number">2 </span>
            <span>to run after</span>
          </div>
        </div>
        <p className="description">
          I'm a self-taught developer. I have been working with web technologies
          since 2020. The first two years, I spent teaching myself how to work
          with different web technologies while working fulltime. I have built
          and maintained an embedded SDK, customer dashboard, and a brochure
          site with Covie. After working with Covie, I have done some freelance
          work building a couple of customer facing sites. Below you'll find
          some of my personal projects I built while learning / practicing. I am
          currently open to new opportunites! Feel free to reach out!
        </p>
      </div>

      <div className="skills">
        <h1 className="title">Some tech I know</h1>
        <div className="icons">
          <div className="col-1 col">
            <div className="img-wrapper">
              <p className="img-description">React</p>
              <img className="tech-icon" src={reactIcon} alt="React" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">Next.js</p>
              <img className="tech-icon" src={nextIcon} alt="Next" />
            </div>

            <div className="img-wrapper">
              <p className="img-description">JavaScript</p>
              <img
                className="tech-icon"
                src={javascriptIcon}
                alt="javascript"
              />
            </div>
          </div>

          <div className="col-2 col">
            <div className="img-wrapper">
              <p className="img-description">Jest</p>
              <img className="tech-icon" src={jestIcon} alt="jest" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">Cypress</p>
              <img className="tech-icon" src={cypressIcon} alt="cypress" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">TailwindCSS</p>
              <img className="tech-icon" src={tailwindIcon} alt="TailwindCSS" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">Node.js</p>
              <img className="tech-icon" src={nodeIcon} alt="node" />
            </div>
          </div>

          <div className="col-3 col">
            <div className="img-wrapper">
              <p className="img-description">AWS</p>
              <img className="tech-icon" src={awsIcon} alt="aws" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">MongoDB</p>
              <img className="tech-icon" src={mongoIcon} alt="mongodb" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">Git</p>
              <img className="tech-icon" src={gitIcon} alt="git" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">HTML</p>
              <img className="tech-icon" src={htmlIcon} alt="html" />
            </div>
            <div className="img-wrapper">
              <p className="img-description">CSS</p>
              <img className="tech-icon" src={cssIcon} alt="css" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
