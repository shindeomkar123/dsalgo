computeAmount()
  .lacks(15)
  .crore(5)
  .crore(2)
  .lacks(20)
  .thousand(45)
  .crore(7)
  .value();
//143545000

function calculator() {
  this.totalAmount = 0;
  this.lacks = function (amountTobeAdded) {
    this.totalAmount += amountTobeAdded * 100000;
    return this;
  };

  this.crore = function (amountTobeAdded) {
    this.totalAmount += amountTobeAdded * 10000000;
    return this;
  };
  this.thousand = function (amountTobeAdded) {
    this.totalAmount += amountTobeAdded * 1000;
    return this;
  };

  this.value = function () {
    return this.totalAmount;
  };
}

function computeAmount() {
  return new calculator();
}
