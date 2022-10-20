export const TransactionSerializer = [
  {
    id: 1,
    transactionDate: '20.10.22',
    type: 'INCOME',
    categoryId: 'Other',
    userId: 1,
    comment: 'car',
    amount: 300,
    balanceAfter: 2300,
  },
  {
    id: 2,
    transactionDate: '21.10.22',
    type: 'EXPENSE',
    categoryId: 'Other',
    userId: 1,
    comment: 'dog',
    amount: 500,
    balanceAfter: 2300,
  },
  {
    id: 3,
    transactionDate: '22.10.22',
    type: 'INCOME',
    categoryId: 'Other',
    userId: 1,
    comment: 'cat',
    amount: 200,
    balanceAfter: 2300,
  },
];

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
