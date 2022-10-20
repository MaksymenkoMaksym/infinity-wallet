// import { useDispatch} from 'react-redux';
// import { TransactionSerializer } from './TransactionSerializer';
import { UlBoard } from './DashboardPage.styled';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';

const DashboardPage = () => {
  // const dispatch = useDispatch();

  //  useEffect(() => {
  //    dispatch(fetchTransactionSerializer());
  //  }, [dispatch]);

  return (
    <UlBoard>
      <Mob>
        <MobileDashboard />
      </Mob>
      <Tab>
        <LaptopDashboard />
      </Tab>
    </UlBoard>
  );
};

export default DashboardPage;
