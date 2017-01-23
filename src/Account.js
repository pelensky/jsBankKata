function Account() {
  this.balance = 0;
  this.transactions = [];
}
Account.prototype.currentBalance = function() {
  return this.balance;
};

Account.prototype.addTransaction = function(transaction) {
  this.transactions.push(transaction);
}
