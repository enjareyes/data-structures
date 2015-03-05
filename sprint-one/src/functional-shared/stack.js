  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 


var Stack = function() {
	var someInstance = {};
	someInstance.theSize = 0;
	someInstance.storage = {};
	_.extend(someInstance, stackMethods);
	
	return someInstance;
};


var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.theSize] = value;
	this.theSize ++
}

stackMethods.pop = function(){
	if (this.theSize > 0){
		this.theSize--
		var result = this.storage[this.theSize];
		delete this.storage[this.theSize];
		return result;
	}
}

stackMethods.size = function() {
	return this.theSize;
}

