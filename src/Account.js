// The customer's account - manipulate the balance and transactions from here

function Account() {
  this.balance = 0;
  this.transactions = [];
}
Account.prototype.currentBalance = function() {
  return this.balance;
};

Account.prototype.showTransactions = function() {
  return this.transactions;
};

Account.prototype.deposit = function(amount) {
  transaction = new Transaction();
  transaction.depositFunds(amount);
  transaction.balance += this.balance + amount;
  this.transactions.push(transaction);
  this.balance += transaction.deposit;
};

Account.prototype.withdraw = function(amount) {
  transaction = new Transaction();
  transaction.withdrawFunds(amount);
  transaction.balance += this.balance - amount;
  this.transactions.push(transaction);
  this.balance -= transaction.withdrawal;
};
