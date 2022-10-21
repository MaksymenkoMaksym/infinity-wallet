import { useSelector } from 'react-redux';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import Loader from 'components/Loader';

import useSortedTtransactions from 'utility/sortedTtransactions';
import { DivTable, UlBoard } from './DashboardPage.styled';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';
const DashboardPage = () => {
  const transactions = useSortedTtransactions();
  const isLoadingTransaction = useSelector(selectIsLoadingTransaction);
  // <Loader />
  return (
    <>
      {isLoadingTransaction ? (
        <Loader />
      ) : !transactions ? (
        <DivTable>
          <p>Welcome!</p>
          <p>
            Your transactions will be displayed here, but first add a
            transaction!
          </p>
        </DivTable>
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
