import { useState } from "react";
import useMedia from "use-media";
import {UseData} from "../../utils/userData"

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
            <LogoTipoImage src={`https://github.com/${UseData.githubUser}.png`} />
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
      <Button type="primary">Falar no whatsapp</Button>
      <Button type="icon" target="_blank" as="a" href={`https://github.com/${UseData.githubUser}`}>
        <FaGithub />
      </Button>
      <Button type="icon" target="_blank" as="a" href={`https://www.linkedin.com/in/${UseData.linkedinUser}`}>
        <FaLinkedinIn />
      </Button>
    </NavbarLinks>
  );
};
