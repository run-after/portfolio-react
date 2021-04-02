import '../styles/Skills.css';
import htmlIcon from '../media/html.png';
import cssIcon from '../media/css.jpg';
import javascriptIcon from '../media/javascript.png';
import reactIcon from '../media/react.png';
import webpackIcon from '../media/webpack.png';
import firebaseIcon from '../media/firebase.png';
import rubyIcon from '../media/ruby.png';
import railsIcon from '../media/rails.png';
import gitIcon from '../media/git.png';

const Skills = () => {
  return (
    <div id='skills'>
      <h1 className='title'>What I know</h1>
      <div className='icons'>
        <div className='col-1 col'>
          <img className='tech-icon' src={htmlIcon} alt='html' />
          <img className='tech-icon' src={cssIcon} alt='css' />
          <img className='tech-icon' src={gitIcon} alt='git' />
        </div>

        <div className='col-2 col'>
          <img className='tech-icon' src={javascriptIcon} alt='javascript' />
          <img className='tech-icon' src={reactIcon} alt='React' />
          <img className='tech-icon' src={webpackIcon} alt='webpack' />
          <img className='tech-icon' src={firebaseIcon} alt='firebase' />
        </div>

        <div className='col-3 col'>
          <img className='tech-icon' src={rubyIcon} alt='ruby' />
          <img className='tech-icon' src={railsIcon} alt='rails' />
        </div>
        
      </div>
      
    </div>
  );
};

export default Skills;