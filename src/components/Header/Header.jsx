import { useDispatch, useSelector } from 'react-redux';
import Logo from 'components/Logo/Logo';

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
import { logOutUser } from 'redux/auth/authOperation';
import { selectUser } from 'redux/auth/authSelectors';

const Header = () => {
  const { username } = useSelector(selectUser);
  const dispatch = useDispatch();

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
          <UserSpan>{username}</UserSpan>
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

export default Header;
