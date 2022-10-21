import { UlBoard } from './DashboardPage.styled';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import { selectTransactions } from '../../redux/transactions/transactionsSelectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';

const DashboardPage = () => {
  const transactions = useSelector(selectTransactions);
  console.log(transactions);
  return (
    <>
      {transactions.length === 0 ? (
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
