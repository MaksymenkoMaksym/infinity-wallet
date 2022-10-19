import Logo from 'components/Logo/Logo';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/icons.svg';

import {
  UserDiv,
  UserSpan,
  StyledLink,
  LogoText,
  ExitIcon,
  HeaderTag,
} from './Header.styled';

const Header = ({ name = 'Максим Максименко' }) => {
  return (
    <>
      <HeaderTag>
        <Logo />
        <StyledLink to={'/test'}>
          <LogoText>TEST</LogoText>
        </StyledLink>
        <UserDiv>
          <UserSpan>{name}</UserSpan>
          <ExitIcon>
            <use href={logo + `#icon-exit`}></use>
          </ExitIcon>
        </UserDiv>
      </HeaderTag>
      <Outlet />
    </>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
