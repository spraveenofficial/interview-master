const promise = new Promise((resolve, reject) => {
  console.log("1d");
  resolve("resilve");
});

const promise1 = promise.then((res) => {
  console.log(res);
});

console.log("1" + " " + promise);
console.log("2" + " " + promise1);

// Debounce polyfill

function debounce(delay, cb) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

Function.prototype.myBind = function (functions) {
  const obj = this;
  return function () {
    obj.call(functions);
  };
};

// polyfill for map

Array.prototype.myMap = function (cb) {
  var output = [];
  for (var i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
  return output;
};

// Filter polyfills

Array.prototype.myFilter = function (cb) {
  var output = [];
  for (var i = 0; i < this.length; i++) {
    if (cb.call(this, this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

// Bind pollyfill

Function.prototype.myBind1 = function (functions) {
  const obj = this;
  return function () {
    obj.call(functions);
  };
};

// Filter polyfills

Array.prototype.myFilter1 = function (objects) {
  var output = [];
  for (var i = 0; i < this.length; i++) {
    if (objects.call(this, this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};
