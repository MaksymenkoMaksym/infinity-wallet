// import { useSelector } from 'react-redux';
// import {
//   selectTransactionCategories,
//   selectTransactionsForPeriod,
// } from 'redux/transactions/transactionsSelectors';
import { useHookTransaction } from 'hooks';

const useTransaction = () => {
  const { forPeriod } = useHookTransaction();
  const { categories } = useHookTransaction();
  if (forPeriod.length === 0) {
    return {};
  }
  let categoriesSummary = categories.map(
    elCat =>
      forPeriod.categoriesSummary.find(el => el.name === elCat.name) ?? {
        name: elCat.name,
        type: elCat.type,
        total: 0,
      }
  );

  return { ...forPeriod, categoriesSummary };
};

export default useTransaction;
