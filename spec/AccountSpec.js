describe("Account", function() {
  var account;
  beforeEach(function() {
    account = new Account();
  });

  it("should initialize with a balance of zero", function() {
    expect(account.currentBalance()).toEqual(0);
  });

  it("should initialize with no transactions", function(){
    expect(account.transactions).toEqual([]);
  });

  it("should allow deposits to add to the balance", function() {
    account.depositFunds(1000);
    expect(account.currentBalance()).toEqual(1000);
  });

});
