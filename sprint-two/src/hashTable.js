var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
	var value = [k, v]
 	var i = getIndexBelowMaxForKey(k, this._limit);
	var theBucket = this._storage.get(i)
	if (theBucket === undefined) {
		this._storage.set(i, [value])
	} else {
		theBucket.push(value)
		this._storage.set(i, theBucket)
	}
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket= this._storage.get(i)
  for (var index = 0; index < bucket.length; index++){
  	if (bucket[index][0]=== k) {
  		return bucket[index][1]
  	} 
  }
  return null
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var theBucket = this._storage.get(i)
	if (theBucket !== undefined) {
		for (var index = 0; index < theBucket.length; index++){
			var currentArray = theBucket[index]
			console.log(currentArray)
			if (currentArray[0] === k){
				theBucket.splice(index,1)
				console.log(theBucket[index])
				this._storage.set(i, theBucket)

			}
		}
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
