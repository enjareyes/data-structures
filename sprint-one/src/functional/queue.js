var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value
    size++
  };

  someInstance.dequeue = function(){
    if (size > 0) {

      var result = storage[first]
      delete storage[first]
      first++
      return result
    }
  };

  someInstance.size = function(){
    if (size >= first){
      return size-first
    } else {
      return 0;
    }
  };

  return someInstance;
};

