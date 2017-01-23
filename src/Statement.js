function Statement(account) {
  this.account = account;
}

Statement.prototype.showAccount = function() {
  return this.account;
};

Statement.prototype.showTransactions = function() {
  return this.showAccount().showTransactions();
};
