"strict mode";

describe("Transaction", function() {
var transaction;

  beforeEach(function () {
    transaction = new Transaction(100, null, 100);
  });

  it("takes a credit amount", function(){
    expect(transaction.creditAmount).toEqual(100);
  });

  it("takes a debit amount", function(){
    expect(transaction.debitAmount).toEqual(null);
  });

  it("takes the account balance", function(){
    expect(transaction.balance).toEqual(100);
  });
});
