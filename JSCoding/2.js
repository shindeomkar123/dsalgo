var obj = {
  name: "hello",
  helloWorld: function () {
    return `my name is ${this.name}`;
  },
};

var obj1 = {
  name: "bye",
  helloWorld: obj.helloWorld,
};

// We need 'hello' text
console.log(obj1.helloWorld.call(obj));
