// Responsible for transactions (deposits and withdrawals)

function Transaction() {
  this.date = 0;
  this.deposit = 0;
  this.withdrawal = 0;
  this.balance = 0;
};

Transaction.prototype.formatDate = function() {
  var date = new Date();
  var day = date.getDate();
  var month = ("0" + (date.getMonth() + 1)).slice(-2)
  var year = date.getFullYear();
  return `${day}/${month}/${year}`
};

Transaction.prototype.depositFunds = function(amount) {
  this.deposit = amount;
  this.date = this.formatDate();
};

Transaction.prototype.withdrawFunds = function(amount) {
  this.withdrawal = amount;
  this.date = this.formatDate();
};
