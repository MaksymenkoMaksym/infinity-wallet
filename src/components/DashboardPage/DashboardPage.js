import { useSelector } from 'react-redux';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import Loader from 'components/Loader';

import { UlBoard } from './DashboardPage.styled';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';
const DashboardPage = () => {
  const isLoadingTransaction = useSelector(selectIsLoadingTransaction);
  return (
    <>
      {isLoadingTransaction ? (
        <Loader />
      ) : (
        <UlBoard>
          <Mob>
            <MobileDashboard />
          </Mob>
          <Tab>
            <LaptopDashboard />
          </Tab>
        </UlBoard>
      )}
    </>
  );
};

export default DashboardPage;
