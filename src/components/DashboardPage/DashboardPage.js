import { UlBoard } from './DashboardPage.styled';
import { Mob, Tab } from 'components/MediaWraper/MediaWraper';
import MobileDashboard from './MobileDashboard';
import LaptopDashboard from './LaptopDashboard';

const DashboardPage = () => {
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
