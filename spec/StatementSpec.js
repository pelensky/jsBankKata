describe("Statement", function() {
  var statement;
  var account;

  beforeEach(function() {
    account = new Account();
    account.deposit(1000);
    account.deposit(2000);
    account.withdraw(500);
    statement = new Statement(account);
  });

  describe("The statement ", function(){
    it("requires an account when creating a statement object", function() {expect(statement.showAccount()).toEqual(account);
    });
  });

  describe("Showing the transactions", function(){
    it("should show the transction array", function() {
      expect(statement.showTransactions()).toEqual(jasmine.any(Array));
    });
  });

  describe("Printing transactions", function(){
    it("Top line should be formatted correctly", function() {
      expect(statement.printTopLine()).toEqual("   date    ||  credit  ||  debit  || balance \n");
    });

    it("should output out the transactions correctly in an array format", function() {
      expect(statement.printTransactions()).toEqual(jasmine.any(Array));
    });

    it("should change the array to a string", function(){
      expect(statement.printString()).toEqual(jasmine.any(String));
    });

    it("should print the entire statement", function(){
      expect(statement.printStatement()).toEqual();
    });
  });
});
