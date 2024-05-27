import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialMediaFooter = ({ children, link }) => {
  return (
    <a
      className={`mx-[2vw] hover:first-of-type:text-red-600 hover:last-of-type:text-green-800 hover:text-blue-700`}
      href={link}
      target="blank"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-300 text-center py-2">
      <SocialMediaFooter link={'https://instagram.com/m.ferdinram'}>
        <InstagramIcon sx={{ fontSize: 26 }} />
      </SocialMediaFooter>

      <SocialMediaFooter
        link={'https://www.linkedin.com/in/ferdinandramdhani/'}
      >
        <LinkedInIcon sx={{ fontSize: 26 }} />
      </SocialMediaFooter>

      <SocialMediaFooter
        link={'https://mail.google.com/mail/u/?authuser=ferdinram13@gmail,com'}
      >
        <EmailIcon sx={{ fontSize: 26 }} />
      </SocialMediaFooter>
    </div>
  );
};

export default Footer;
