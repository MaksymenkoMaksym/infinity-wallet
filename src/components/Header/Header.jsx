import { useSelector } from 'react-redux';
import Logo from 'components/Logo/Logo';

// import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/icons.svg';

import {
  UserDiv,
  UserSpan,
  StyledLink,
  LogoText,
  UserBtn,
  ExitIcon,
  ExitText,
  HeaderTag,
} from './Header.styled';
import Modal from '../ModalLogout';
import { selectUser } from 'redux/auth/authSelectors';
import { useState } from 'react';

const Header = () => {
  const { username } = useSelector(selectUser);
  const [show, setShow] = useState(false);

  return (
    <>
      <HeaderTag>
        <Logo />
        <StyledLink to={'/test'}>
          <LogoText>TEST</LogoText>
        </StyledLink>
        <UserDiv>
          <UserSpan>{username}</UserSpan>
          <UserBtn onClick={() => setShow(true)}>
            <ExitIcon>
              <use href={logo + `#icon-exit`}></use>
            </ExitIcon>
            <ExitText>Exit</ExitText>
          </UserBtn>
        </UserDiv>
      </HeaderTag>
      <Modal onClose={() => setShow(false)} show={show} title="Exit the App?" />
    </>
  );
};

export default Header;
