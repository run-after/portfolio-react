import '../styles/Projects.css';
import readit from '../media/readit-screenshot.png';
import odinBook from '../media/odinbook-screenshot.png';
import battleship from '../media/battleship-screenshot.jpg';
import social from '../media/social-screenshot.png';
import reactIcon from '../media/react.png';
import firebaseIcon from '../media/firebase.png';
import htmlIcon from '../media/html.png';
import cssIcon from '../media/css.jpg';
import javascriptIcon from '../media/javascript.png';
import jestIcon from '../media/jest.png';
import webpackIcon from '../media/webpack.png';
import bootstrapIcon from '../media/bootstrap.png';
import railsIcon from '../media/rails.png';
import nodeIcon from '../media/node.jpeg';
import mongoIcon from '../media/mongodb.png';
import aws from '../media/aws.png';

const Projects = () => {
  return (
    <div id='projects'>
      <div className='spacer'></div>
      
      <div className='project justify-right'>
        <div className='buttons'>
          <a className='btn' href='https://runafter-social.netlify.app/' target='_blank' rel='noreferrer'>Live</a>
          <a className='btn' href='https://github.com/run-after/social-frontend' target='_blank' rel='noreferrer'>Code</a>
        </div>
        <img className='screenshot' src={social} alt='Screenshot of Social' />
        <div className='info'>
          <h1>Social - a Facebook clone</h1>
          <p>
            A fullstack web app built using MongoDB, Express.js, React, and Node.js. Media stored on AWS S3
          </p>
          <p>
            Sign up with email or Facebook. Post text/image, comment, like, add friendships.. It's all there
          </p>
          <p>
            The <a href='https://github.com/run-after/social-frontend'>frontend</a> makes API calls to
            the <a href='https://github.com/run-after/social-backend'>backend</a>. All routes are secured via
            passport.js except the routes to log in, sign up, and log in with Facebook.
          </p>
          <p>
            Cors was used to ensure only the frontend can make API calls. 
          </p>
          <ul className='tech'>
            <li><img className='tech-icon' src={javascriptIcon} alt='JS icon' /></li>
            <li><img className='tech-icon' src={reactIcon} alt='React icon' /></li>
            <li><img className='tech-icon' src={nodeIcon} alt='Node icon' /></li>
            <li><img className='tech-icon' src={mongoIcon} alt='Mongo icon' /></li>
            <li><img className='tech-icon' src={aws} alt='AWS icon' /></li>
          </ul>
        </div>
      </div>
      
      <div className='project justify-left'>
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

      <div className='project justify-right'>
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
            Includes all the core features of Facebook
          </p>
          <p>
            Utilizes a mailer to welcome a new user when they sign up
          </p>
          <p>
            Utilizes AWS S3 via Active Storage to allow an attachment/update of an avatar photo
          </p>
          <p>
            This is the largest project I have done using Ruby on Rails. I learned a lot and really enjoyed
            working through all these moving parts.
          </p>

          <ul className='tech'>
            <li><img className='tech-icon' src={htmlIcon} alt='HTML icon' /></li>
            <li><img className='tech-icon' src={cssIcon} alt='CSS icon' /></li>
            <li><img className='tech-icon' src={railsIcon} alt='Rails icon' /></li>
            <li><img className='tech-icon' src={bootstrapIcon} alt='bootstrap icon' /></li>
            <li><img className='tech-icon' src={aws} alt='AWS icon' /></li>
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