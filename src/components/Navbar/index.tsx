import { useState } from "react";
import useMedia from "use-media";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoImage,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "../../styles/Buttons";
import { Container } from "../../styles/Global";
import logo from "../../assets/img/logo/user.png";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}
export const NavBar: React.FC = () => {
  const isWide = useMedia({ maxWidth: "991px" });

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage src={logo} />
            <LogoTipoText>Camila Duarte</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button type="icon" onClick={OpenMenu}>
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        {isWide ? open && <NavLinks /> : <NavLinks/>}
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = () => {
  return (
    <NavbarLinks>
      <Button type="primary">Whatsapp</Button>
      <Button type="icon">
        <FaGithub />
      </Button>
      <Button type="icon">
        <FaLinkedinIn />
      </Button>
    </NavbarLinks>
  );
};
