  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 
  extend = function(obj) {
    var resultObject = arguments[0]
    var newObjects = arguments.length
    
    for (var i = 1; i < newObjects; i++){
      for (var key in arguments[i]){
        resultObject[key] = arguments[i][key]
      }
    }

    return resultObject
 };

var Stack = function() {
	var someInstance = {};
	someInstance.size = 0;
	someInstance.storage = {};
	extend(someInstance, stackMethods;
	
	return someInstance;
};


var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.size] = value;
	this.size ++
}

stackMethods.pop = function(){
	if (this.size > 0){
		this.size--
		var result = this.storage[this.size];
		delete this.storage[this.size];
		return result;
	}
}

stackMethods.size = function() {
	return this.size;
}

