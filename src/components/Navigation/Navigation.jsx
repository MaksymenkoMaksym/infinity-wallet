import React from 'react';
import { NavLink } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import {
  // NavContainer,
  List,
  ListItem,
  TextItem,
  Icon,
} from './Navigation.styled';
import sprite from '../../assets/images/icons.svg';

const Navigation = () => {
  return (
    // <NavContainer>
    <nav>
      <List className="nav_list">
        <ListItem>
          <NavLink to="/home">
            <>
              <Icon>
                <use href={`${sprite}#icon-home`}></use>
              </Icon>
            </>
            <MediaQuery minWidth={768}>
              <TextItem>Home</TextItem>
            </MediaQuery>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/diagram">
            <>
              <Icon>
                <use href={`${sprite}#icon-timeline`}></use>
              </Icon>
            </>
            <MediaQuery minWidth={768}>
              <TextItem>Statistics</TextItem>
            </MediaQuery>
          </NavLink>
        </ListItem>

        <ListItem className="nav_link_currency">
          <MediaQuery maxWidth={767}>
            <NavLink to="/currency">
              <Icon>
                <use href={`${sprite}#icon-currency`}></use>
              </Icon>
            </NavLink>
          </MediaQuery>
        </ListItem>
      </List>
    </nav>
    // </NavContainer>
  );
};

export default Navigation;
