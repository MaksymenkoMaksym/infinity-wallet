import { LogoThumb, LogoIcon,
  LogoText,
  StyledLink } from './Logo.styled';
import logo from '../../assets/images/icons.svg';
export const Logo = () => {
  return (
    <LogoThumb

    >
      <StyledLink to={'/'}>
        <LogoIcon>
          <use href={logo + `#icon-logo`}></use>
        </LogoIcon>
        <LogoText>Wallet</LogoText>
      </StyledLink>
    </LogoThumb>
  );
};

export default Logo;
