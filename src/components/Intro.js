import '../styles/Intro.css';
import githubIcon from '../media/github.png';
import emailIcon from '../media/email.png';
import resumeIcon from '../media/cv.png';
import resume from '../media/ChaseStearn.pdf';


const Intro = () => {
  return (
    <div id='intro'>
      <h1 className='greeting'>Hi, I'm <span className='name'>Chase</span>.</h1>
      <p className='description'>I'm a self-taught FullStack JavaScript Developer</p>
      <div className='links'>
        <a href='https://github.com/run-after' target='_blank' rel='noreferrer'><img className='link' src={githubIcon} alt='link to github' /></a>
        <a href='mailto:run.after@protonmail.com'><img className='link' src={emailIcon} alt='link to email' /></a>
        <a href={resume} target='_blank' rel='noreferrer'><img className='link' src={resumeIcon} alt='link to cv' /></a>
      </div>
      
    </div>
  );
};

export default Intro;