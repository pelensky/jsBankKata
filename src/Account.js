function Account() {
  this.balance = 0;
}
Account.prototype.currentBalance = function() {
  return this.balance;
};
