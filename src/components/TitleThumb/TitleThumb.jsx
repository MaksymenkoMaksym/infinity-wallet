import { useParams} from "react-router-dom";
import svgIcon from "../../assets/images/icons.svg";
import { PrimarySvg, Box, Title } from "./TitleThumb.styled";
// import { LoginForm } from "components/Forms";

export const TitleThumb = () => {
    const { authType } = useParams();

    const iconDefine = () => {
switch (authType) {
    case 'login':
        return "#frame-1";

    default:
       return "#frame-2";
}
    }


    return(
    <Box > 
        <PrimarySvg>
        <use href={svgIcon + iconDefine()}></use>
        </PrimarySvg>
        <Title>Finance App</Title>
    </Box>)
}