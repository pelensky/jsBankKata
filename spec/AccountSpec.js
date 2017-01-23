describe("Account", function() {
  var account;
  var depositOf100;

  beforeEach(function() {
    account = new Account();
    depositOf100 = new Transaction();
    depositOf100.depositFunds(20);
  });

  describe("The app should", function(){
    it("initialize with a balance of zero", function() {
      expect(account.currentBalance()).toEqual(0);
    });

    it("initialize with no transactions", function(){
      expect(account.transactions).toEqual([]);
    });
  });

  describe("Transactions should", function(){
    it("be added", function() {
      account.addTransaction(depositOf100);
      expect(account.transactions).toEqual([depositOf100]);
    });
  });
});
