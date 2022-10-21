import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';

import { useMediaQuery } from 'react-responsive';

import { Wrap, Column } from './HeroBar.styled';

const HeroBar = () => {
  const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <Wrap>
        <Column>
          <Navigation />
          <Balance />
        </Column>
        {isTabletOrBigScreen && <Currency />}
      </Wrap>
    </>
  );
};

export default HeroBar;
