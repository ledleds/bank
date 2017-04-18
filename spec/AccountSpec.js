describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  describe("balance", function() {
    it("should begin with no balance", function() {
      expect(account.balance).toEqual(0);
    });

    it("should display the balance", function() {
      expect(account.showBalance()).toEqual(0);
    });
  });
});
