  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var Stack = function() {
	this.the_size=0
	this.storage={}
};

Stack.prototype.push=function(value){
	this.storage[this.the_size]=value
	this.the_size++
}

Stack.prototype.pop=function(){
	if (this.the_size > 0) {
		this.the_size--
		var result = this.storage[this.the_size]
		delete this.storage[this.the_size]
		return result
	}
}

Stack.prototype.size=function(){
	return this.the_size
}

