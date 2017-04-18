"strict mode";

describe("Statement", function() {
var statement;

  beforeEach(function() {
    statement = new Statement();
  });

  // it("is instantiated with the Statement class by default", function() {
  //   expect(statement.transactionHistory).toEqual(jasmine.any(TransactionHistory));
  // });

  describe("print", function() {
    it("Prints the statement", function() {
      expect(statement.print()).toEqual("date || credit || debit || balance");
    });
  });
});
