function Transaction() {
  this.date = 0;
  this.amount = 0;;
}

Transaction.prototype.depositFunds = function(amount) {
  this.amount = amount;
  this.date = this.formatDate();
}

Transaction.prototype.formatDate = function() {
  var date = new Date();
  var day = date.getDate();
  var month = ("0" + (date.getMonth() + 1)).slice(-2)
  var year = date.getFullYear();
  return `${day}/${month}/${year}`
}
