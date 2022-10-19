import {
  LogoIcon,
  LogoText,
  StyledLink,
} from 'components/Header/Header.styled';
import logo from '../../assets/images/icons.svg';
export const Logo = () => {
  return (
    <StyledLink to={'/home'}>
      <LogoIcon>
        <use href={logo + `#icon-logo`}></use>
      </LogoIcon>
      <LogoText>Wallet</LogoText>
    </StyledLink>
  );
};

export default Logo;
