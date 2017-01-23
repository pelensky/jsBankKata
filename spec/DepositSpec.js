describe("Deposit", function() {
  var deposit;
  beforeEach(function() {
    deposit = new Deposit();
  });

  it("should format dates correctly", function(){
    expect(deposit.formatDate()).toEqual("23/01/2017");
  });

  it("should record added funds", function() {
    deposit.addFunds(1000);
    expect(deposit.amount).toEqual(1000);
  });

  it("should track when a deposit was made", function(){
    deposit.addFunds(1000);
    expect(deposit.date).toEqual("23/01/2017");
  });

});
