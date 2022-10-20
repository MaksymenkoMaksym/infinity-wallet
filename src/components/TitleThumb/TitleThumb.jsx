import svgIcon from "../../assets/images/icons.svg";
import { PrimarySvg, Box, Title } from "./TitleThumb.styled";


export const TitleThumb = ({icon}) => {

    return(
    <Box > 
        <PrimarySvg>
        <use href={svgIcon + icon}></use>
        </PrimarySvg>
        <Title>Finance App</Title>
    </Box>)
}