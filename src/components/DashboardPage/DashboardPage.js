import styled from 'styled-components';
// import { useMediaPredicate } from 'react-media-hook';

const LiTitleMob = styled.li`
  font-weight: ${props => props.theme.fontWeights.bold}px;
  font-size: ${props => props.theme.fontSizes.m};
`;
const Li = styled.li`
  font-weight: ${props => props.theme.fontWeights.bold}px;
  font-size: ${props => props.theme.fontSizes.s};
`;
const LiTitle = styled.li``;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-left: 5px solid ${props => props.theme.colors.pink};
  padding: 12px ${props => props.theme.space[2]}px;
  list-style: none;
  border-bottom: 1px solid #dcdcdf;

  &: last-child {
    border-bottom: none;
  }
`;
const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  width: 280px;
  background: ${props => props.theme.colors.white};

  overflow: hidden;
  border-radius: ${props => props.theme.space[1]}px;
`;
const Sum = styled.li`
  color: ${props => props.theme.colors.pink};
`;

export default function DashboardPage() {
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
}
