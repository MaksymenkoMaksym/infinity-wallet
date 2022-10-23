import { useSelector } from 'react-redux';
// import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import Loader from 'components/Loader';
import { useMediaQuery } from 'react-responsive';
import { UlBoard } from './DashboardPage.styled';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';

const DashboardPage = () => {
  const isLoadingTransaction = useSelector(selectIsLoadingTransaction);
  const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div key={Math.random() * 100}>
      {isLoadingTransaction ? (
        <Loader />
      ) : (
        <UlBoard>
          {isMobileScreen && <MobileDashboard />}
          {isTabletOrBigScreen && <LaptopDashboard />}
        </UlBoard>
      )}
    </div>
  );
};

export default DashboardPage;
