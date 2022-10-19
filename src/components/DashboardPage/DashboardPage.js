// import { useDispatch} from 'react-redux';
import { TransactionSerializer } from './TransactionSerializer';
import {
  LiTitleMob,
  Li,
  LiTitle,
  Ul,
  Div,
  Sum,
  UlTitle,
  UlItems,
  UlBoard,
} from './DashboardPage.styled';

const DashboardPage = () => {
  // const dispatch = useDispatch();

  //   id*	string
  // transactionDate*	string
  // type*	string
  // Enum:
  // [ INCOME, EXPENSE ]
  // categoryId*	string
  // userId*	string
  // comment*	string
  // amount*	number
  // balanceAfter*

  //  useEffect(() => {
  //    dispatch(fetchTransactionSerializer());
  //  }, [dispatch]);

  return (
    <Div>
      <UlBoard>
        <UlTitle>
          <LiTitle>Date</LiTitle>
          <LiTitle>Type</LiTitle>
          <LiTitle>Category</LiTitle>
          <LiTitle>Comment</LiTitle>
          <LiTitle>Sum</LiTitle>
          <LiTitle>Balance</LiTitle>
        </UlTitle>
        {TransactionSerializer.map(item => {
          return (
            <UlItems key={item.key}>
              <Ul transaction={item.type}>
                <LiTitleMob>Date</LiTitleMob>
                <Li>{item.transactionDate}</Li>
              </Ul>
              <Ul transaction={item.type}>
                <LiTitleMob>Type</LiTitleMob>
                <Li>{item.type === 'INCOME' ? '+' : '-'} </Li>
              </Ul>
              <Ul transaction={item.type}>
                <LiTitleMob>Category</LiTitleMob>
                <Li>{item.categoryId}</Li>
              </Ul>
              <Ul transaction={item.type}>
                <LiTitleMob>Comment</LiTitleMob>
                <Li>{item.comment}</Li>
              </Ul>
              <Ul transaction={item.type}>
                <LiTitleMob>Sum</LiTitleMob>
                <Li>
                  <Sum transaction={item.type}>{item.amount}</Sum>
                </Li>
              </Ul>
              <Ul transaction={item.type}>
                <LiTitleMob>Balance</LiTitleMob>
                <Li>{item.balanceAfter}</Li>
              </Ul>
            </UlItems>
          );
        })}
      </UlBoard>
    </Div>
  );
};

export default DashboardPage;
