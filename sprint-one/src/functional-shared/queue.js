  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.



var Queue = function(){
	var instance={};
	instance.theSize=0;
	instance.first=0
	instance.storage={}
	_.extend(instance, queueMethods)
	return instance
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.theSize]=value;
	this.theSize++;
}

queueMethods.dequeue =function(){
	if (this.theSize>0){
		console.log("first: " + this.first)
		var result=this.storage[this.first];
		console.log("result: " + result)
		delete this.storage[this.first]
		this.first++
		return result
	} 
}

queueMethods.size = function(){
	if (this.theSize>=this.first){
		return this.theSize-this.first
	} else {
		return 0;
	}
}


