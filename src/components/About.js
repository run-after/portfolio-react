import '../styles/About.css';
import htmlIcon from '../media/html.png';
import cssIcon from '../media/css.jpg';
import javascriptIcon from '../media/javascript.png';
import reactIcon from '../media/react.png';
import webpackIcon from '../media/webpack.png';
import firebaseIcon from '../media/firebase.png';
import rubyIcon from '../media/ruby.png';
import railsIcon from '../media/rails.png';
import gitIcon from '../media/git.png';
import nodeIcon from '../media/node.jpeg';
import mongoIcon from '../media/mongodb.png';
import awsIcon from '../media/aws.png';

const About = () => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='definition'>
          <div className='title'>
            <span className='name'>Chase </span><span className='pronounce'>[ cheys ]</span>
          </div>
          <p>verb (used without object), <span className='bold'>chased, chas-ing</span></p>
          <div><span className='number'>1   </span><span>to follow in pursuit</span></div>
          <div><span className='number'>2   </span><span>to run after</span></div>
        </div>
        <p className='description'>
          I'm a self taught developer. I have an engineering background which I believe gives me
          a unique analytical way of looking at problems. At my current position, when there is an
          issue I step back and look at the big picture. To find the root cause of the problem,
          sometimes it takes a careful tracing of the path to find what went wrong. When the
          problem is found, it is often useful to break the problem down into smaller, more
          managable problems. This translates to coding well.
        </p>
      </div>

      <div className='skills'>
        <h1 className='title'>What I know</h1>
        <div className='icons'>
          <div className='col-1 col'>
            <div className='img-wrapper'>
              <p className='img-description'>HTML</p>
              <img className='tech-icon' src={htmlIcon} alt='html' />
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>CSS</p>
              <img className='tech-icon' src={cssIcon} alt='css' />
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>JavaScript</p>
              <img className='tech-icon' src={javascriptIcon} alt='javascript' />
            </div>
          </div>

          <div className='col-2 col'>
            <div className='img-wrapper'>
              <p className='img-description'>React</p>
              <img className='tech-icon' src={reactIcon} alt='React' />  
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>Node.js</p>
              <img className='tech-icon' src={nodeIcon} alt='node' />  
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>MongoDB</p>
              <img className='tech-icon' src={mongoIcon} alt='mongodb' />  
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>AWS</p>
              <img className='tech-icon' src={awsIcon} alt='aws' />  
            </div>
          </div>

          <div className='col-3 col'>
            <div className='img-wrapper'>
              <p className='img-description'>Git</p>
              <img className='tech-icon' src={gitIcon} alt='git' />  
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>Webpack</p>
              <img className='tech-icon' src={webpackIcon} alt='webpack' />  
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>Firebase</p>
              <img className='tech-icon' src={firebaseIcon} alt='firebase' />  
            </div>
            
            <div className='img-wrapper'>
              <p className='img-description'>Ruby</p>
              <img className='tech-icon' src={rubyIcon} alt='ruby' />  
            </div>
            <div className='img-wrapper'>
              <p className='img-description'>Rails</p>
              <img className='tech-icon' src={railsIcon} alt='rails' />  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;