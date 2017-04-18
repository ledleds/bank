"strict mode";

(function(exports) {

  function Transaction(creditAmount, debitAmount) {
    this.creditAmount = creditAmount;
    this.debitAmount = debitAmount;
  }

  exports.Transaction = Transaction;
})(this);
