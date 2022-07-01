import { styled } from "../../styles/stitches.config";
import img from "../../assets/img/background/dots.svg"
import { Flex } from '../../styles/Global'
import { Button } from '../../styles/Buttons'

export const Header = styled('header', {
    backgroundColor: "$brand1",
    padding: "12rem 0 8rem 0",
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom 1rem right 1rem",
    "@mobile": {
        padding: "9rem 0 6rem 0",
    }
})

export const HeaderContent = styled('div', {
    maxWidth: "100%",
    width: "36rem",
    display: "flex",
    flexDirection: "column",
    gap: "$2",
})

export const HeaderButtonsArea = styled(Flex, {
    marginTop: "$2",
    "@mobile": {
        flexDirection: "column",
        [`& ${Button}`]: {
            width: "100%"
        }
    }
})