import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";
import img from "../../public/static/img/background/dots.svg";
import { Flex } from "../../styles/Global";
import { Button } from "../../styles/Buttons";
import { Text } from "../../styles/Text";

const scaleUp = keyframes({
  "0%": { transform: "translateY(15%)" },
  "100%": { transform: "translateY(-140%)" },
});

export const Header = styled("header", {
  backgroundColor: "$brand1",
  padding: "12rem 0 8rem 0",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom 1rem right 1rem",
  "@mobile": {
    padding: "9rem 0 6rem 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  "@mobile": {
    flexDirection: "column",
    [`& ${Button}`]: {
      width: "100%",
    },
  },
});

export const StackSection = styled("section", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "2rem",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  }
});

export const StackCard = styled("div", {
  minWidth: "10.25rem",
  maxWidth: "10.25rem",
  borderRadius: "$1",
  padding: "1rem",
  background: "$whiteFixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  [`& ${Text}`]: {
    opacity: 0,
    position: "absolute",
    transform: "translateY(-15%)",
    background: "$whiteFixed",
    boxShadow: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12))",
    padding: "0.4rem 1rem",
    borderRadius: "$1",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
    whiteSpace: "nowrap",

    "&:before": {
      content: "",
      zIndex: "-1",
      bottom: "-5px",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "25px solid transparent",
      borderRight: "25px solid transparent",
      borderTop: "25px solid $whiteFixed",
      transform: "translateX(-50%)",
      left: "50%"
    },
  },

  "&:hover": {
    [`& ${Text}`]: {
      opacity: 1,
      top: 0,
      transform: "translateY(-140%)",
      animation: `${scaleUp} 200ms`,
    },
  },
});

export const ProjectsArea = styled("section", {
  padding: "4rem 0 8rem 0",
});

export const ProjectsAreaSocialMediaMessage = styled("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem"
  }
});

export const ProjectsAreaContent = styled("div", {
  width: "60%",
  paddingLeft: "4rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  }
});

export const ProjectAreaWrapperColumns = styled(Flex, {
    position: "relative",
    alignItems: "flex-start",
    "@mobile": {
      flexDirection: "column"
    }
})