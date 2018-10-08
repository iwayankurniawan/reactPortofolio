const portofolioModel = function () {
  var observers = [];
  //--------- Observer pattern
  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function (obj) {
    observers.forEach(o => o.update(obj));
  };
};

export const modelInstance = new portofolioModel();
