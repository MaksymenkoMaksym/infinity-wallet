import { useSelector, useDispatch } from 'react-redux';
import Logo from 'components/Logo/Logo';
// import { Outlet } from 'react-router-dom';
import logo from '../../assets/images/icons.svg';

import {
  UserDiv,
  UserSpan,
  UserBtn,
  ExitIcon,
  ExitText,
  HeaderTag,
} from './Header.styled';
import Modal from '../ModalLogout';
import { selectUser } from 'redux/auth/authSelectors';
import { useState } from 'react';
import { logOutUser } from 'redux/auth/authOperation';

const Header = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);
  const [show, setShow] = useState(false);
  const onLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <HeaderTag>
        <Logo />
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
      <Modal
        onClose={() => setShow(false)}
        handlerFunc={onLogOut}
        show={show}
        title="Exit the App?"
      />
    </>
  );
};

export default Header;
