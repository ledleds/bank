"strict mode";

(function(exports) {

  function Transaction(creditAmount, debitAmount, balance) {
    this.creditAmount = creditAmount;
    this.debitAmount = debitAmount;
    this.balance = balance;
  }

  exports.Transaction = Transaction;
})(this);
