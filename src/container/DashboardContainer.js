import React from 'react';
import { Button } from 'react-bootstrap';
import constant from '../constant';
import cardImage from '../asset/DSC01008.jpg';
import telegramIcon from '../asset/telegram.svg';
import linkedinIcon from '../asset/linkedin.svg';
import instagramIcon from '../asset/instagram.svg';
import downloadIcon from '../asset/download.svg';
import emailIcon from '../asset/email.svg';
import communicativeImage from '../asset/5.png';
import collaborationImage from '../asset/4.png';
import conscientiousImage from '../asset/2.png';
import responsibleImage from '../asset/3.png';
import springImage from '../asset/pngfind.com-spring-png-535670.png';
import nodeImage from '../asset/kisspng-node-js-javascript-express-js-portable-network-gra-mixin-software-5b7c7247ce6172.8523259515348823758453.png';
import reactImage from '../asset/react.png';
import reactNativeImage from '../asset/pinpng.com-transformer-logo-png-5100567.png';
import androidImage from '../asset/android.svg';

const {
  INTRO_NAME,
  INTRO_NAME_SECOND,
  INTRO_GREET,
  DOWNLOAD_CV,
  HIRE_ME_TEXT_COMMUNICATIVE,
  HIRE_ME_TEXT_COLLABORATIVE,
  HIRE_ME_TEXT_CONSCIENTIOUS,
  HIRE_ME_TEXT_RESPONSIBLE,
  MAIL_TO_LINK,
  TELEGRAM_LINK,
  LINKEDIN_LINK,
  INSTAGRAM_LINK,
  CV_DOWNLOAD_LINK,
  GITHUB_LINK
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
      onClick={() => _onOpenWindow(MAIL_TO_LINK)}
    >
      <img className="email-icon" src={emailIcon} alt="" />
      <span>Email Me</span>
    </Button>
    <img className="card-image" src={cardImage} alt="" />
    <img
      className="telegram-icon"
      src={telegramIcon}
      alt=""
      onClick={() => _onOpenWindow(TELEGRAM_LINK)}
    />
    <img
      className="linkedin-icon"
      src={linkedinIcon}
      alt=""
      onClick={() => _onOpenWindow(LINKEDIN_LINK)}
    />
    <img
      className="instagram-icon"
      src={instagramIcon}
      alt=""
      onClick={() => _onOpenWindow(INSTAGRAM_LINK)}
    />
    <img
      className="download-icon"
      src={downloadIcon}
      alt=""
      onClick={() => _onOpenWindow(CV_DOWNLOAD_LINK)}
    />
    <p
      className="download-cv-text"
      onClick={() => _onOpenWindow(CV_DOWNLOAD_LINK)}
    >
      {DOWNLOAD_CV}
    </p>

    <h1 className="hire-me-text">Why Hire Me?</h1>

    <img className="hire-communicative" src={communicativeImage} alt="" />
    <h2 className="hire-communicative-h2">Communicative</h2>
    <p className="hire-communicative-body">{HIRE_ME_TEXT_COMMUNICATIVE}</p>

    <img className="hire-collaborative" src={collaborationImage} alt="" />
    <h2 className="hire-collaborative-h2">Collaborative</h2>
    <p className="hire-collaborative-body">{HIRE_ME_TEXT_COLLABORATIVE}</p>

    <img className="hire-conscientious" src={conscientiousImage} alt="" />
    <h2 className="hire-conscientious-h2">Conscientious</h2>
    <p className="hire-conscientious-body">{HIRE_ME_TEXT_CONSCIENTIOUS}</p>

    <img className="hire-sans" src={responsibleImage} alt="" />
    <h2 className="hire-sans-h2">Responsible</h2>
    <p className="hire-sans-body">{HIRE_ME_TEXT_RESPONSIBLE}</p>

    <div className="box-interest" />
    <p className="interested-text">Interested working with me?</p>
    <Button className="more-project" variant="outline-primary" onClick={() => _onOpenWindow(GITHUB_LINK)}>More Project</Button>
    <Button
      className="button-email-me-interest"
      onClick={() => _onOpenWindow(MAIL_TO_LINK)}
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
    <h2 className="business-text">For business please send me email crisandolin@gmail.com</h2>
    <img
      className="telegram-icon-footer"
      src={telegramIcon}
      alt=""
      onClick={() => _onOpenWindow(TELEGRAM_LINK)}
    />
    <img
      className="linkedin-icon-footer"
      src={linkedinIcon}
      alt=""
      onClick={() => _onOpenWindow(LINKEDIN_LINK)}
    />
    <img
      className="instagram-icon-footer"
      src={instagramIcon}
      alt=""
      onClick={() => _onOpenWindow(INSTAGRAM_LINK)}
    />
  </>
);

export default DashboardContainer;
