import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  // NavContainer,
  List,
  ListItem,
  TextItem,
  Icon,
  StyledLink,
} from './Navigation.styled';
import sprite from '../../assets/images/icons.svg';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';

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
            <Tab>
              <TextItem>Home</TextItem>
            </Tab>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/diagram">
            <>
              <Icon>
                <use href={`${sprite}#icon-timeline`}></use>
              </Icon>
            </>
            <Tab>
              <TextItem>Statistics</TextItem>
            </Tab>
          </NavLink>
        </ListItem>

        <ListItem className="nav_link_currency">
          <Mob>
            <NavLink to="/currency">
              <Icon>
                <use href={`${sprite}#icon-currency`}></use>
              </Icon>
            </NavLink>
          </Mob>
        </ListItem>
      </List>
    </nav>
    // </NavContainer>
  );
};

export default Navigation;
