"strict mode";

(function(exports) {

  function Account() {
    this.balance = 0;
    this.transactionHistory = new TransactionHistory();
  }

  Account.prototype.showBalance = function() {
    return this.balance;
  };

  Account.prototype.deposit = function(amount) {
    this.balance += amount;
    transaction = new Transaction(amount, null, this.balance);
    this.transactionHistory.transactions.push(transaction);
  };

  Account.prototype.withdraw = function(amount) {
    this.balance -= amount;
    transaction = new Transaction(null, amount, this.balance);
    this.transactionHistory.transactions.push(transaction);
  };

  exports.Account = Account;

})(this);
