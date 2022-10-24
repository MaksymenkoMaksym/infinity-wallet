import {
  List,
  ListItem,
  TextItem,
  Icon,
  StyledLink,
} from './Navigation.styled';
import sprite from '../../assets/images/icons.svg';
import useIsMobile from 'hooks/isMobile';

const Navigation = () => {
  const isMobileScreen = useIsMobile();

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
            {!isMobileScreen && <TextItem>Home</TextItem>}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/diagram">
            <>
              <Icon>
                <use href={`${sprite}#icon-timeline`}></use>
              </Icon>
            </>
            {!isMobileScreen && <TextItem>Statistics</TextItem>}
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
