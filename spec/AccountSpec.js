describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe("The app should", function(){
    it("initialize with a balance of zero", function() {
      expect(account.currentBalance()).toEqual(0);
    });

    it("initialize with no transactions", function(){
      expect(account.showTransactions()).toEqual([]);
    });
  });

  describe("Deposits should", function(){

    it("increase the balance", function() {
      account.deposit(10);
      expect(account.currentBalance()).toEqual(10);
    });

    it("keep a record of the balance at the time", function() {
      account.deposit(10);
      account.deposit(20);
      expect(account.showTransactions()[1].balance).toEqual(30);
    });
  });

  describe("Withdrawals should", function(){
    it("decrease the balance", function() {
      account.deposit(100);
      account.withdraw(20);
      expect(account.currentBalance()).toEqual(80);
    });
    it("keep a record of the balance at the time", function() {
      account.deposit(100);
      account.withdraw(20);
      expect(account.showTransactions()[1].balance).toEqual(80);
    });
  });

});
