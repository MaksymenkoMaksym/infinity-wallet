import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';
import Loader from 'components/Loader';

import useSortedTtransactions from 'utility/sortedTtransactions';
import { DivTable, UlBoard } from './DashboardPage.styled';
const DashboardPage = () => {
  const transactions = useSortedTtransactions();
  // <Loader />
  return (
    <>
      {transactions.length === 0 ? (
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
