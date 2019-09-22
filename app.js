const purchaseAmount = 10000;

const purchaseCategory = 'usual';

let cashback;

if (purchaseCategory === 'usual') {
    cashback = 0.01;
} else if (purchaseCategory === 'increased') {
    cashback = 0.05;
} else cashback = 0.3;

console.log(cashback);

const returnedMoney = purchaseAmount * cashback > 3000 ? 3000 : purchaseAmount * cashback;

console.log(returnedMoney);
