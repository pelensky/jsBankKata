function Statement(account) {
  this.account = account;
}

Statement.prototype.showAccount = function() {
  return this.account;
};

Statement.prototype.showTransactions = function() {
  return this.showAccount().showTransactions();
};

Statement.prototype.printTopLine = function() {
  return(" date || credit || debit || balance ")
};

Statement

Statement.prototype.printTransactions = function() {
  var transactions = this.showTransactions();
  var array = [];
  for(i = 0; i < transactions.length; i ++) {
    array.push(`${transactions[i].date} || ${transactions[i].deposit} || ${transactions[i].withdrawal} || ${transactions[i].balance} `)
  }
  return array;
};
