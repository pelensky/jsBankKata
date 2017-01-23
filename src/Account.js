function Account() {
  this.balance = 0;
}
Account.prototype.currentBalance = function() {
  return this.balance;
};

Account.prototype.depositFunds = function(amount) {
  this.balance += amount;
  this.currentBalance();
}
