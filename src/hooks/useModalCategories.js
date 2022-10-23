import { useSelector } from 'react-redux';
const useModalCategories = values => {
  const categories = useSelector(selectTransactionCategories);

  const options = categories
    .filter(category => category.type === 'EXPENSE')
    .map(category => {
      return { value: category.name, label: category.name };
    });
  //   const getOptions = () => {
  //     return categories
  //       .filter(category => category.type === 'EXPENSE')
  //       .map(category => {
  //         return { value: category.name, label: category.name };
  //       });
  //   };
  const getCategoryId = values => {
    if (values.type === 'INCOME') {
      return categories.find(elem => elem.type === 'INCOME').id;
    }
    return categories.find(elem => elem.name === values.category.value).id;
  };
  const categoryId = getCategoryId(values);

  return { options, categoryId };
};

export default useModalCategories;
