import { UlBoard } from './DashboardPage.styled';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import { selectTransactions } from '../../redux/transactions/transactionsSelectors';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const transactions = useSelector(selectTransactions);
  console.log(transactions);
  return (
    // {transactions.length ===0 ?
    //   <div>
    //   </div>
    // :
    <UlBoard>
      <Mob>
        <MobileDashboard />
      </Mob>
      <Tab>
        <LaptopDashboard />
      </Tab>
    </UlBoard>
    // }
  );
};

export default DashboardPage;
