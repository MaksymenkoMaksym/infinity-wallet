import {
  LogoIcon,
  LogoText,
  StyledLink,
} from 'components/Header/Header.styled';
import logo from '../../assets/images/icons.svg';
export const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledLink to={'/'}>
        <LogoIcon>
          <use href={logo + `#icon-logo`}></use>
        </LogoIcon>
        <LogoText>Wallet</LogoText>
      </StyledLink>
    </div>
  );
};

export default Logo;
