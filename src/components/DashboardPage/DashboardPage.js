import { LiTitleMob, Li, LiTitle, Ul, Div, Sum } from './DashboardPage.styled';

const DashboardPage = () => {
  //   const media320 = useMediaPredicate('(min-width: 320px)');
  //   const media768 = useMediaPredicate('(max-width: 768px)');
  return (
    <Div>
      <ul style={{ padding: 0, margin: 0 }}>
        <ul style={{ display: 'none' }}>
          <LiTitle>Date</LiTitle>
          <LiTitle>Type</LiTitle>
          <LiTitle>Category</LiTitle>
          <LiTitle>Comment</LiTitle>
          <LiTitle>Sum</LiTitle>
          <LiTitle>Balance</LiTitle>
          <LiTitle></LiTitle>
        </ul>
        <Ul>
          <LiTitleMob>Date</LiTitleMob>
          <Li>25.10.22</Li>
        </Ul>
        <Ul>
          <LiTitleMob>Type</LiTitleMob>
          <Li> - </Li>
        </Ul>
        <Ul>
          <LiTitleMob>Category</LiTitleMob>
          <Li>Other</Li>
        </Ul>
        <Ul>
          <LiTitleMob>Comment</LiTitleMob>
          <Li>Gift for your wife</Li>
        </Ul>
        <Ul>
          <LiTitleMob>Sum</LiTitleMob>
          <Li>
            <Sum>300.00</Sum>
          </Li>
        </Ul>
        <Ul>
          <LiTitleMob>Balance</LiTitleMob>
          <Li>6 900.00</Li>
        </Ul>
      </ul>
    </Div>
  );
};

export default DashboardPage;
