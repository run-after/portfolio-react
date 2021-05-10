import '../styles/Projects.css';
import readit from '../media/readit-screenshot.png';
import odinBook from '../media/odinbook-screenshot.png';
import wheresWaldo from '../media/wheres-waldo-screenshot.jpg';
import battleship from '../media/battleship-screenshot.jpg';
import memoryGame from '../media/memory-card-screenshot.jpg';
import reactIcon from '../media/react.png';
import firebaseIcon from '../media/firebase.png';
import htmlIcon from '../media/html.png';
import cssIcon from '../media/css.jpg';
import javascriptIcon from '../media/javascript.png';
import jestIcon from '../media/jest.png';
import webpackIcon from '../media/webpack.png';
import bootstrapIcon from '../media/bootstrap.png';
import railsIcon from '../media/rails.png';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='spacer'></div>
      <div className='project justify-right'>
        <div className='buttons'>
          <a className='btn' href='https://readitapp.netlify.app/' target='_blank' rel='noreferrer'>Live</a>
          <a className='btn' href='https://github.com/run-after/readit' target='_blank' rel='noreferrer'>Code</a>
        </div>
        <img className='screenshot' src={readit} alt='Screenshot of Readit' />
        <div className='info'>
          <h1>Readit - a Reddit clone</h1>
          <p>
            A fullstack web app built using React functional components on the front-end and Firebase
            on the back-end, deployed on Netlify
          </p>
          <p>
            Sign up with email. Post, comment, like, hate, create groups,
            join groups.. It's all there
          </p>
          <p>
            Custom CSS with responsive design
          </p>
          <p>
            This was a large project with a lot of moving parts. Setting up the
            DB schema was probably the most challenging part of this project for me.
            Getting all the moving parts to work together was a fun, challenging project
          </p>          
          <ul className='tech'>
            <li><img className='tech-icon' src={htmlIcon} alt='HTML icon' /></li>
            <li><img className='tech-icon' src={cssIcon} alt='CSS icon' /></li>
            <li><img className='tech-icon' src={javascriptIcon} alt='JS icon' /></li>
            <li><img className='tech-icon' src={reactIcon} alt='React icon' /></li>
            <li><img className='tech-icon' src={firebaseIcon} alt='Firebase icon' /></li>
          </ul>
        </div>
      </div>

      <div className='project justify-left'>
        <div className='buttons'>
          <a className='btn' href='https://blooming-shore-50178.herokuapp.com/' target='_blank' rel='noreferrer'>Live</a>
          <a className='btn' href='https://github.com/run-after/odinbook' target='_blank' rel='noreferrer'>Code</a>
        </div>
        <img className='screenshot' src={odinBook} alt='Screenshot of Odinbook' />
        <div className='info'>
          <h1>Odinbook - A Facebook clone</h1>
          <p>
            A fullstack web app built using Ruby on Rails and styled with Bootstrap deployed using Heroku
          </p>
          <p>
            Inclueds all the core features of Facebook
          </p>
          <p>
            Utilizes a mailer to welcome a new user when they sign up
          </p>
          <p>
            Utilizes AWS S3 via Active Storage to allow an attachment/update of an avatar photo
          </p>
          <p>
            This was a fun and challenging project that has a lot of moving pieces. Setting up the DB schema was one of the
             bigger challenges. This was my first fullstack app that I made.
          </p>
          
          <ul className='tech'>
            <li><img className='tech-icon' src={htmlIcon} alt='HTML icon' /></li>
            <li><img className='tech-icon' src={cssIcon} alt='CSS icon' /></li>
            <li><img className='tech-icon' src={railsIcon} alt='Rails icon' /></li>
            <li><img className='tech-icon' src={bootstrapIcon} alt='bootstrap icon' /></li>
          </ul>
        </div>
      </div>

      <div className='project justify-right'>
        <div className='buttons'>
          <a className='btn' href='https://run-after.github.io/wheres-waldo' target='_blank' rel='noreferrer'>Live</a>
          <a className='btn' href='https://github.com/run-after/wheres-waldo' target='_blank' rel='noreferrer'>Code</a>
        </div>
        <img className='screenshot' src={wheresWaldo} alt='Screenshot of Wheres Waldo' />
        <div className='info'>
          <h1>Where's Waldo - a photo tagging app</h1>
          <p>
            This is a fullstack photo tagging app that has you find all given characters in a photo
          </p>
          <p>
            Built using React functional components on the front-end and Firebase on the back-end, deployed on Github Pages
          </p>
          <p>
            Custom CSS with animations and responsive design
          </p>
          <p>
            This was a fun project that was the first time using Firebase as a backend.
             Figuring out how to set up the DB schema was a challenge, but I read through
            all the docs and got a good idea how to work with Firebase. It was a fun project
          </p>
          
          <ul className='tech'>
            <li><img className='tech-icon' src={htmlIcon} alt='HTML icon' /></li>
            <li><img className='tech-icon' src={cssIcon} alt='CSS icon' /></li>
            <li><img className='tech-icon' src={javascriptIcon} alt='JS icon' /></li>
            <li><img className='tech-icon' src={reactIcon} alt='React icon' /></li>
            <li><img className='tech-icon' src={firebaseIcon} alt='Firebase icon' /></li>
          </ul>
        </div>
      </div>

      <div className='project justify-left'>
        <div className='buttons'>
          <a className='btn' href='https://run-after.github.io/battleship/' target='_blank' rel='noreferrer'>Live</a>
          <a className='btn' href='https://github.com/run-after/battleship' target='_blank' rel='noreferrer'>Code</a>
        </div>
        <img className='screenshot' src={battleship} alt='Screenshot of Battleship' />
        <div className='info'>
          <h1>Battleship - a classic game</h1>
          <p>
            Custom CSS with animations and responsive design
          </p>
          <p>
            Computer logic that places ships randomly
          </p>
          <p>
            This was one of the first larger projects that I used factory functions
             and a modular desgin. I also practiced TDD with Jest, which was a totally
            different way of making an app. Getting into the TDD mindset was probably the
            biggest challenge on this project
          </p>
          
          <ul className='tech'>
            <li><img className='tech-icon' src={htmlIcon} alt='HTML icon' /></li>
            <li><img className='tech-icon' src={cssIcon} alt='CSS icon' /></li>
            <li><img className='tech-icon' src={javascriptIcon} alt='JS icon' /></li>
            <li><img className='tech-icon' src={webpackIcon} alt='Webpack icon' /></li>
            <li><img className='tech-icon' src={jestIcon} alt='Jest icon' /></li>
          </ul>
        </div>
      </div>

      <div className='project justify-right'>
        <div className='buttons'>
          <a className='btn' href='https://run-after.github.io/memory-game/' target='_blank' rel='noreferrer'>Live</a>
          <a className='btn' href='https://github.com/run-after/memory-game' target='_blank' rel='noreferrer'>Code</a>
        </div>
        <img className='screenshot' src={memoryGame} alt='Screenshot of Memory game' />
        <div className='info'>
          <h1>Memory Game</h1>
          <p>
            Built using React hooks, deployed on Github pages.
          </p>
          <p>
            Custom CSS with animations and responsive design.
          </p>
          <p>
            This is the first larger app that I built using React hooks. This was a good
             practice to learn all about React state and move away from class based components.
            I learned a lot from doing this project
          </p>
          
          <ul className='tech'>
            <li><img className='tech-icon' src={htmlIcon} alt='HTML icon' /></li>
            <li><img className='tech-icon' src={cssIcon} alt='CSS icon' /></li>
            <li><img className='tech-icon' src={javascriptIcon} alt='JS icon' /></li>
            <li><img className='tech-icon' src={reactIcon} alt='React icon' /></li>
          </ul>
        </div>
      </div>
      <div className='more'>
        See more projects on my <a href='https://github.com/run-after' target='_blank' rel="noreferrer">Github</a>!
      </div>
    </div>
  )
};

export default Projects;