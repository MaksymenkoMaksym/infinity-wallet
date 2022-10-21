import {
  List,
  ListItem,
  TextItem,
  Icon,
  StyledLink,
} from './Navigation.styled';
import sprite from '../../assets/images/icons.svg';
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });
  const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });
  return (
    <nav>
      <List className="nav_list">
        <ListItem>
          <StyledLink to="/" end>
            <>
              <Icon>
                <use href={`${sprite}#icon-home`}></use>
              </Icon>
            </>
            {isTabletOrBigScreen && <TextItem>Home</TextItem>}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/diagram">
            <>
              <Icon>
                <use href={`${sprite}#icon-timeline`}></use>
              </Icon>
            </>
            {isTabletOrBigScreen && <TextItem>Statistics</TextItem>}
          </StyledLink>
        </ListItem>

        <ListItem>
          {isMobileScreen && (
            <StyledLink to="/currency">
              <Icon>
                <use href={`${sprite}#icon-currency`}></use>
              </Icon>
            </StyledLink>
          )}
        </ListItem>
      </List>
    </nav>
  );
};

export default Navigation;
