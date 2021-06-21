import React from 'react';
import { Button } from 'react-bootstrap';
import constant from '../constant';
import cardImage from '../asset/DSC01008.jpg';
import telegramIcon from '../asset/telegram.svg';
import linkedinIcon from '../asset/linkedin.svg';
import instagramIcon from '../asset/instagram.svg';
import downloadIcon from '../asset/download.svg';
import emailIcon from '../asset/email.svg';
import hireImage from '../asset/Untitled design.png';
import springImage from '../asset/pngfind.com-spring-png-535670.png';
import nodeImage from '../asset/kisspng-node-js-javascript-express-js-portable-network-gra-mixin-software-5b7c7247ce6172.8523259515348823758453.png';
import reactImage from '../asset/react.png';
import reactNativeImage from '../asset/pinpng.com-transformer-logo-png-5100567.png';
import androidImage from '../asset/android.svg';

const {
  INTRO_NAME, INTRO_NAME_SECOND, INTRO_GREET, DOWNLOAD_CV, HIRE_ME_TEXT
} = constant;

function _onOpenWindow(link) {
  window.open(link);
}

const DashboardContainer = () => (
  <>
    <h2 className="name">{INTRO_NAME}</h2>
    <h1 className="name2">{INTRO_NAME_SECOND}</h1>
    <p className="greet">{INTRO_GREET}</p>
    <img className="card-image" src={cardImage} alt="" />
    <Button
      className="button-email-me"
      onClick={() => _onOpenWindow('mailto:crisandolin@gmail.com')}
    >
      <img className="email-icon" src={emailIcon} alt="" />
      <span>Email Me</span>
    </Button>
    <img className="card-image" src={cardImage} alt="" />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="telegram-icon"
      src={telegramIcon}
      alt=""
      onClick={() => _onOpenWindow('https://t.me/desmancris')}
    />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="linkedin-icon"
      src={linkedinIcon}
      alt=""
      onClick={() => _onOpenWindow('https://www.linkedin.com/in/crisandolin/')}
    />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="instagram-icon"
      src={instagramIcon}
      alt=""
      onClick={() => _onOpenWindow('https://www.instagram.com/crisandolin/')}
    />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="download-icon"
      src={downloadIcon}
      alt=""
      onClick={() => _onOpenWindow('https://drive.google.com/file/d/1FoSdxNw6h5QBLVRccGPuYLQmZpoP74_J/view?usp=sharing')}
    />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <p
      className="download-cv-text"
      onClick={() => _onOpenWindow('https://drive.google.com/file/d/1FoSdxNw6h5QBLVRccGPuYLQmZpoP74_J/view?usp=sharing')}
    >
      {DOWNLOAD_CV}
    </p>

    <h1 className="hire-me-text">Why Hire Me?</h1>

    <img className="hire-communicative" src={hireImage} alt="" />
    <h2 className="hire-communicative-h2">Communicative</h2>
    <p className="hire-communicative-body">{HIRE_ME_TEXT}</p>

    <img className="hire-collaborative" src={hireImage} alt="" />
    <h2 className="hire-collaborative-h2">Collaborative</h2>
    <p className="hire-collaborative-body">{HIRE_ME_TEXT}</p>

    <img className="hire-conscientious" src={hireImage} alt="" />
    <h2 className="hire-conscientious-h2">Conscientious</h2>
    <p className="hire-conscientious-body">{HIRE_ME_TEXT}</p>

    <img className="hire-sans" src={hireImage} alt="" />
    <h2 className="hire-sans-h2">Sans Beud</h2>
    <p className="hire-sans-body">{HIRE_ME_TEXT}</p>

    <div className="box-interest" />
    <p className="interested-text">Interested working with me?</p>
    <Button className="more-project" variant="outline-primary" onClick={() => _onOpenWindow('https://github.com/crisandolindesmanrumahorbo')}>More Project</Button>
    <Button
      className="button-email-me-interest"
      onClick={() => _onOpenWindow('mailto:crisandolin@gmail.com')}
    >
      <img className="email-icon" src={emailIcon} alt="" />
      <span>Email Me</span>
    </Button>

    <h1 className="skills-tools-text">Skills & Tools</h1>
    <img className="spring-tool" src={springImage} alt="" />
    <img className="node-tool" src={nodeImage} alt="" />
    <img className="react-tool" src={reactImage} alt="" />
    <img className="react-native-tool" src={reactNativeImage} alt="" />
    <img className="android-tool" src={androidImage} alt="" />

    <div className="footer-box" />
    <h2 className="get-touch-text">Get in touch</h2>
    <h2 className="business-text">For buisness please send me email crisandolin@gmail.com</h2>
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="telegram-icon-footer"
      src={telegramIcon}
      alt=""
      onClick={() => _onOpenWindow('https://t.me/desmancris')}
    />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="linkedin-icon-footer"
      src={linkedinIcon}
      alt=""
      onClick={() => _onOpenWindow('https://www.linkedin.com/in/crisandolin/')}
    />
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      className="instagram-icon-footer"
      src={instagramIcon}
      alt=""
      onClick={() => _onOpenWindow('https://www.instagram.com/crisandolin/')}
    />
  </>
);

export default DashboardContainer;
