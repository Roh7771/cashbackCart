const purchaseAmount = 10000;
const maxCashback = 3000;

const purchaseCategory = 'usual';

let cashbackPercent;

if (purchaseCategory === 'usual') {
    cashbackPercent = 0.01;
} else if (purchaseCategory === 'increased') {
    cashbackPercent = 0.05;
} else {
    cashbackPercent = 0.3;
}

console.log(cashbackPercent);

const returnedCashback = purchaseAmount * cashbackPercent > maxCashback ? maxCashback : purchaseAmount * cashbackPercent;

console.log(returnedCashback);
