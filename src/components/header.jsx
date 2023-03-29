import '../styles/header.css';
import logo from '../img/logo.svg'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import ContactsIcon from '@mui/icons-material/Contacts';
import {Button, Link, MenuItem, Menu} from "@mui/material";
import {useState} from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorElContactMenu, setAnchorElContactMenu] = useState(false);
  const openContactMenu = Boolean(anchorElContactMenu);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleClickContactMenu = () => {
    setAnchorElContactMenu(true);
  };
  const handleCloseContactMenu = () => {
    setAnchorElContactMenu(false);
  };

  return (
    <header className="containerHeader">
      <div className='menuMobile'>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className='Icon-Menu'
        >
          <MenuIcon className='sizeIcon' />
        </Button>
      </div>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >

        <MenuItem onClick={handleClose}><h1 className='menuTextHeaderMobile'><Link className='LinkNativeMenu' href='#home'>Home</Link></h1></MenuItem>
        <MenuItem onClick={handleClose}><h1 className='menuTextHeaderMobile'><Link className='LinkNativeMenu' href='#sobre'>Sobre</Link></h1></MenuItem>
        <MenuItem onClick={handleClose}><h1 className='menuTextHeaderMobile'><Link className='LinkNativeMenu' href='#servico'>Serviços</Link></h1></MenuItem>
      </Menu>

      <img src={logo} className='logoHeader' alt='Logotipo Raifran Lucas Desenvolvedor'/>


      <div className='divMenu'>
        <h1 className='menuTextHeader'><Link className='LinkNative' href='#home'>Home</Link></h1>
        <h1 className='menuTextHeader'><Link className='LinkNative' href='#sobre'>Sobre</Link></h1>
        <h1 className='menuTextHeader'><Link className='LinkNative' href='#servico'>Serviços</Link></h1>
        {/*<h1 className='menuTextHeader'>Contato</h1>*/}
        <div className='iconsDivMenu'>
          <Link href='https://www.facebook.com/raifranlucas.dev/' target='_blank'><FacebookRoundedIcon className='marginRight sizeIcon' /></Link>
          <Link href='https://www.instagram.com/raifranlucas.dev/' target='_blank'><InstagramIcon className='marginRight sizeIcon'/></Link>
          <Link href='https://www.linkedin.com/in/raifranlucas/' target='_blank'><LinkedInIcon className='marginRight sizeIcon'/></Link>
          <Link href='https://api.whatsapp.com/send?phone=5586998236024&text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os!' target='_blank'><WhatsAppIcon className='sizeIcon' /></Link>
        </div>
      </div>

      <div className='menuMobile'>
        <Button
          id="demo-positioned-button"
          aria-controls={openContactMenu ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openContactMenu ? 'true' : undefined}
          onClick={handleClickContactMenu}
          className='Icon-Menu-Right'
        >
          <ContactsIcon className='sizeIcon' />
        </Button>
      </div>

       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorElContactMenu}
        open={openContactMenu}
        onClose={handleCloseContactMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >

        <MenuItem onClick={handleCloseContactMenu}>
          <Link href='https://www.facebook.com/raifranlucas.dev/' target='_blank'><FacebookRoundedIcon className='menuOption' /></Link>
        </MenuItem>

         <MenuItem onClick={handleCloseContactMenu}>
          <Link href='https://www.instagram.com/raifranlucas.dev/' target='_blank'><InstagramIcon className='menuOption'/></Link>
        </MenuItem>

         <MenuItem onClick={handleCloseContactMenu}>
          <Link href='https://www.linkedin.com/in/raifranlucas/' target='_blank'><LinkedInIcon className='menuOption'/></Link>
        </MenuItem>

         <MenuItem onClick={handleCloseContactMenu}>
          <Link href='https://api.whatsapp.com/send?phone=5586998236024&text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os!' target='_blank'><WhatsAppIcon className='menuOption' /></Link>
        </MenuItem>
      </Menu>

    </header>
  )
}