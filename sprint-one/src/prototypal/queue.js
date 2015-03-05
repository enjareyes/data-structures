	// Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

var Queue = function() {
	var instance=Object.create(queueMethods)
	instance.the_size=0
	instance.first=0
	instance.storage={}
	return instance
};

var queueMethods = {};

queueMethods.enqueue= function(value){
	this.storage[this.the_size]=value
	this.the_size++
}

queueMethods.dequeue=function(){
	var results=this.storage[this.first]
	delete this.storage[this.first]
	this.first++
	return results
}

queueMethods.size=function(){
	if (this.the_size>=this.first){
		return this.the_size-this.first
	}else{
		return 0
	}	
}
