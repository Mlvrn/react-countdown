import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';

const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com">
        <img src={facebookIcon} alt="facebook" />
      </a>
      <a href="https://www.pinterest.com">
        <img src={pinterestIcon} alt="pinterest" />
      </a>
      <a href="https://www.instagram.com">
        <img src={instagramIcon} alt="instagram" />
      </a>
    </footer>
  );
};

export default Footer;
