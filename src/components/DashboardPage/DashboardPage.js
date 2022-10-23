import { useSelector } from 'react-redux';
// import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import Loader from 'components/Loader';
import useIsMobile from 'hooks/isMobile';
import { UlBoard } from './DashboardPage.styled';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';

const DashboardPage = () => {
  const isLoadingTransaction = useSelector(selectIsLoadingTransaction);
  const isMobileScreen = useIsMobile();
  return (
    <div key={Math.random() * 100}>
      {isLoadingTransaction ? (
        <Loader />
      ) : (
        <UlBoard>
          {isMobileScreen && <MobileDashboard />}
          {!isMobileScreen && <LaptopDashboard />}
        </UlBoard>
      )}
    </div>
  );
};

export default DashboardPage;
