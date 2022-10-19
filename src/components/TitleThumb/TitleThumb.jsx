import svgIcon from "../../assets/images/icons.svg";
import { PrimarySvg, Box, Title } from "./TitleThumb.styled";

export const TitleThumb = () => {
    return(
    <Box > 
        <PrimarySvg>
        <use href={svgIcon + `#icon-Frame-1`}></use>
        </PrimarySvg>
        <Title>Finance App</Title>
    </Box>)
}