"strict mode";

(function(exports) {

  function Account() {
    this.balance = 0;
  }

  Account.prototype.showBalance = function() {
    return this.balance;
  };

  Account.prototype.deposit = function(amount) {
    this.balance += amount;
  };

  exports.Account = Account;

})(this);
