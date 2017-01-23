describe("Account", function() {
  var account;
  var depositOf100;
  var withdrawalOf20;

  beforeEach(function() {
    account = new Account();

    depositOf100 = new Transaction();
    depositOf100.depositFunds(100);

    withdrawalOf20 = new Transaction();
    withdrawalOf20.withdrawFunds(20);


  });

  describe("The app should", function(){
    it("initialize with a balance of zero", function() {
      expect(account.currentBalance()).toEqual(0);
    });

    it("initialize with no transactions", function(){
      expect(account.showTransactions()).toEqual([]);
    });
  });

  describe("Transactions should", function(){
    it("be added", function() {
      account.addTransaction(depositOf100);
      expect(account.transactions).toEqual([depositOf100]);
    });
  });

  describe("Deposits should", function(){
    it("increase the balance", function() {
      account.addTransaction(depositOf100);
      expect(account.currentBalance()).toEqual(100);
    });
  });

  describe("Withdrawals should", function(){
    it("decrease the balance", function() {
      account.addTransaction(depositOf100)
      account.addTransaction(withdrawalOf20);
      expect(account.currentBalance()).toEqual(80);
    });
  });

});
