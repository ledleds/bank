"strict mode";

describe("TransactionHistory", function() {
  
var transactionHistory;

  beforeEach(function() {
    transactionHistory = new TransactionHistory();
  });

  it("has an empty transactions array to begin", function() {
    expect(transactionHistory.transactions).toEqual([]);
  });

});
