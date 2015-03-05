  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var Queue = function() {
	this.theSize = 0;
	this.storage={};
	this.first=0;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.theSize] = value;
	this.theSize++
}

Queue.prototype.dequeue = function(){
	var result = this.storage[this.first];
	delete this.storage[this.first];
	this.first++
	return result
}

Queue.prototype.size = function(){
	if (this.theSize > this.first){
		return this.theSize-this.first
	} else {
		return 0
	}
}


