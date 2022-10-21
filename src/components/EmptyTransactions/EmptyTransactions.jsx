import {
  DivTable,
  Name,
  NameP,
  LogoIcon,
  Picture,
  Text,
} from './EmptyTransactions.styled';
import logo from '../../assets/images/icons.svg';
const EmptyTransactions = () => (
  <DivTable>
    <Text>
      <NameP>
        Welcome to your <br></br>
        <Name>
          <LogoIcon>
            <use href={logo + `#icon-logo`}></use>
          </LogoIcon>
          WALLET
        </Name>
      </NameP>
      <NameP>Pleace add a transaction!</NameP>
    </Text>
    <Picture />
  </DivTable>
);

export default EmptyTransactions;
