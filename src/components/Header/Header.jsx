import { useDispatch } from 'react-redux';
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
import { logOutUser } from 'redux/auth/operation';

const Header = ({ name = 'Максим Максименко' }) => {
  const dispatch = useDispatch();
  //   const user = {
  //     username: 'infinity',
  //     email: 'infinity@gmail.com',
  //     password: 'infinity26',
  //   };
  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <HeaderTag>
        <Logo />
        <StyledLink to={'/test'}>
          <LogoText>TEST</LogoText>
        </StyledLink>
        <UserDiv>
          <UserSpan>{name}</UserSpan>
          <ExitIcon
            onClick={() => {
              logOut();
            }}
          >
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
