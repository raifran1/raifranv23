import '../styles/footer.css'
import logo from "../img/logo.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {Link} from "@mui/material";


export default function Footer() {
  let ano = new Date().getFullYear()

  return (
    <div className='footerContainer'>
      <img src={logo} className="footerLogo" alt="logo" />
      <div className='iconsDivMenuFooter'>
        <Link href='https://www.facebook.com/raifranlucas.dev/' target='_blank'><FacebookRoundedIcon className='marginRightFooter sizeIcon' /></Link>
        <Link href='https://www.instagram.com/raifranlucas.dev/' target='_blank'><InstagramIcon className='marginRightFooter sizeIcon'/></Link>
        <Link href='https://www.linkedin.com/in/raifranlucas/' target='_blank'><LinkedInIcon className='marginRightFooter sizeIcon'/></Link>
        <Link href='https://api.whatsapp.com/send?phone=5586998236024&text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os!' target='_blank'><WhatsAppIcon className='sizeIcon' /></Link>
      </div>
      <h3 className='footerDescription'>airtech © {ano} </h3>
    </div>
  )
}