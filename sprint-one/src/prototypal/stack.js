



var Stack = function() {
	var someInstance = Object.create(stackMethods);
	someInstance.the_size=0;
	someInstance.storage={};
	return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value){
	this.storage[this.the_size] = value;
	this.the_size ++
}

stackMethods.pop = function(){
	if (this.the_size > 0) {
		this.the_size--
		var result = this.storage[this.the_size]
		delete this.storage[this.the_size]
		return result
	}
}

stackMethods.size = function(){
	return this.the_size
}
