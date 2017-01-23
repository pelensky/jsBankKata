describe("Statement", function() {
  var statement;
  var account;
  var depositOf100;
  var withdrawalOf20;

  beforeEach(function() {
    account = new Account();
    account.deposit(100);
    account.withdraw(20);
    statement = new Statement(account);
  });

  describe("The app should", function(){
    it("require an account when creating a statement", function() {expect(statement.showAccount()).toEqual(account);
    });
  });

  describe("Showing the transactions", function(){
    it("should show the transction array", function() {
      expect(statement.showTransactions()).toEqual(jasmine.any(Array));
    });
  });

  describe("Printing transactions", function(){
    it("Top line should be formatted correctly", function() {
      expect(statement.printTopLine()).toEqual(" date || credit || debit || balance ");
    });

    it("Should print out the transactions correctly", function() {
      expect(statement.printTransactions()).toEqual()
    });
  });

});
