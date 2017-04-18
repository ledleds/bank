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

  describe("deposit", function() {
    it("should be able to make a first deposit", function() {
      account.deposit(100);
      expect(account.showBalance()).toEqual(100);
    });

    it("should be able to make many deposits", function() {
      account.deposit(10);
      account.deposit(60);
      account.deposit(40);
      expect(account.showBalance()).toEqual(110);
    });
  });

  describe("withdrawal", function() {

    beforeEach(function() {
      account.deposit(100);
    });

    it("should be able to make a withdrawal", function() {
      account.withdraw(20);
      expect(account.showBalance()).toEqual(80);
    });

    it("should be able to make many withdrawals", function() {
      account.withdraw(10);
      account.withdraw(60);
      expect(account.showBalance()).toEqual(30);
    });
  });
});
