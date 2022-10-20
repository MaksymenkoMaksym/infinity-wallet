import {
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
    <nav>
      <List className="nav_list">
        <ListItem>
          <StyledLink to="/home">
            <>
              <Icon>
                <use href={`${sprite}#icon-home`}></use>
              </Icon>
            </>
            <Tab>
              <TextItem>Home</TextItem>
            </Tab>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/diagram">
            <>
              <Icon>
                <use href={`${sprite}#icon-timeline`}></use>
              </Icon>
            </>
            <Tab>
              <TextItem>Statistics</TextItem>
            </Tab>
          </StyledLink>
        </ListItem>

        <ListItem>
          <Mob>
            <StyledLink to="/currency">
              <Icon>
                <use href={`${sprite}#icon-currency`}></use>
              </Icon>
            </StyledLink>
          </Mob>
        </ListItem>
      </List>
    </nav>
  );
};

export default Navigation;
