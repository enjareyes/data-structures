var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
	var value = [k, v]
 	var i = getIndexBelowMaxForKey(k, this._limit);
	var theBucket = this._storage.get(i)
		console.log(theBucket)
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
  for (var i = 0; i < bucket.length; i++){
  	if (bucket[i][0]=== k) {
  		return bucket[i][1]
  	} 
  }
};

HashTable.prototype.remove = function(k){
	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
