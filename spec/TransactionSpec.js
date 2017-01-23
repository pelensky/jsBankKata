describe("Transaction", function() {
  var transaction;
  beforeEach(function() {
    transaction = new Transaction();
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
  describe("The app should", function(){
    it("format dates correctly", function(){
      expect(transaction.formatDate()).toEqual("23/01/2017");
    });
  });
  describe("While adding funds - the app should", function(){
    it("record deposited funds", function() {
      transaction.depositFunds(1000);
      expect(transaction.deposit).toEqual(1000);
    });

    it("track the date the deposit was made", function(){
      transaction.depositFunds(1000);
      expect(transaction.date).toEqual(transaction.formatDate());
    });
  });

  describe("While subtracting funds - the app should", function(){
    it("record withdrawn funds", function() {
      transaction.withdrawFunds(20);
      expect(transaction.withdrawal).toEqual(20);
    });

    it("track the date the withdrawal was made", function(){
      transaction.withdrawFunds(20);
      expect(transaction.date).toEqual(transaction.formatDate());
    });
  });
});
