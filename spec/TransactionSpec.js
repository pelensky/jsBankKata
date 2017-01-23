describe("Transaction", function() {
  var transaction;
  beforeEach(function() {
    transaction = new Transaction();
  });

  it("should format dates correctly", function(){
    expect(transaction.formatDate()).toEqual("23/01/2017");
  });

  it("should record deposited funds", function() {
    transaction.depositFunds(1000);
    expect(transaction.amount).toEqual(1000);
  });

  it("should track when a deposit was made", function(){
    transaction.depositFunds(1000);
    expect(transaction.date).toEqual("23/01/2017");
  });

});
