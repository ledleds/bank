"strict mode";

describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should begin with no balance", function() {
    expect(account.balance).toEqual(0);
  });

  it("creates a new instance of Transaction History class", function() {
    expect(account.transactionHistory).toEqual(jasmine.any(TransactionHistory));
  });

  describe("showBalance", function() {
    it("should display the balance", function() {
      expect(account.showBalance()).toEqual(0);
    });
  });

  describe("deposit", function() {

    beforeEach(function() {
      account.deposit(100);
    });

    it("should be able to make a first deposit", function() {
      expect(account.showBalance()).toEqual(100);
    });

    it("should be able to make many deposits", function() {
      account.deposit(60);
      account.deposit(40);
      expect(account.showBalance()).toEqual(200);
    });

    it("should add a new transaction to transactions array", function() {
      account.deposit(20);
      expect(account.transactionHistory.transactions.length).toEqual(2);
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

    it("should add a new transaction to transactions array", function() {
      account.withdraw(20);
      expect(account.transactionHistory.transactions.length).toEqual(2);
    });
  });
});
