// Responsible for printing the statement

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
  return("   date    ||  credit  ||  debit  || balance \n");
};

Statement.prototype.printTransactions = function() {
  var transactions = this.showTransactions();
  var array = [];
  for(i = 0; i < transactions.length; i ++) {
    var date = transactions[i].date;
    var deposit = transactions[i].deposit.toFixed(2);
    if(deposit == 0){
      deposit = "       ";
    }
    var withdrawal = transactions[i].withdrawal.toFixed(2);
    if(withdrawal == 0.00){
      withdrawal = "      ";
    }
    var balance = transactions[i].balance.toFixed(2);
    array.push(`${date} ||  ${deposit} ||  ${withdrawal} || ${balance} `);
  }
  return array;
};

Statement.prototype.printString = function(){
  var transactionsArray = this.printTransactions();
  return transactionsArray.join(('\r\n'));
};

Statement.prototype.printStatement = function(){
  console.log(this.printTopLine(), this.printString());
};
