"strict mode";

(function(exports) {

  function Account() {
    this.balance = 0;
  }

  Account.prototype.showBalance = function () {
    return this.balance;
  };

  exports.Account = Account;

})(this);
