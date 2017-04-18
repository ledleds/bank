describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  it("should begin with no balance", function() {
    expect(account.balance).toEqual(0);
  });
});
