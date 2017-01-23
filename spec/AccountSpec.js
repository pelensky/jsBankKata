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

});
