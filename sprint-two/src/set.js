var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {}
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage[item] = item;
};

setPrototype.contains = function(item){
	return (this._storage[item]===item)
};

setPrototype.remove = function(item){
	delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// Insertion: O(1)
// Deletion:  O(1)
// Search: O(1)