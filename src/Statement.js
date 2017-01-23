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
  return("   date    || credit || debit || balance ")
};

Statement.prototype.printTransactions = function() {
  var transactions = this.showTransactions();
  var array = [];
  for(i = 0; i < transactions.length; i ++) {
    array.push(`${transactions[i].date} || ${transactions[i].deposit.toFixed(2)} || ${transactions[i].withdrawal.toFixed(2)} || ${transactions[i].balance.toFixed(2)} `)
  }
  return array;
};

Statement.prototype.printString = function(){
var transactionsArray = this.printTransactions();
return transactionsArray.join(('\r\n'))
};

Statement.prototype.printStatement = function(){
  console.log(this.printTopLine(), this.printString());
};
