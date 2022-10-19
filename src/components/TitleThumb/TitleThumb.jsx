import svgIcon from "../../assets/images/icons.svg";
import { PrimarySvg, Box } from "./TitleThumb.styled";

export const TitleThumb = () => {
    return(
    <Box > 
        <PrimarySvg>
        <use href={svgIcon + `#icon-Frame-1`}></use>
        </PrimarySvg>
        <h1>Finance App</h1>
    </Box>)
}