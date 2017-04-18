"strict mode";

(function(exports) {

  function Statement() {
    // this.transactionHistory = transactionHistory;
  }

  var header = "date || credit || debit || balance";

  Statement.prototype.print = function () {
    return header;
  };

  exports.Statement = Statement;
})(this);
