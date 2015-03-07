
var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = []; 
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newNode = new Tree(value)
	this.children.push(newNode); //attaching it to the parent
};


treeMethods.contains = function(target){
	var found=false;
	var currentNode=this;

	var recursiveFunc = function(currentNode){
		if (currentNode.value === target){
			found =true
		}else{
			if (currentNode.children.length > 0){
				for (var i=0; i<currentNode.children.length; i++){
					recursiveFunc(currentNode.children[i]);
				}
			}
		}
	}
	recursiveFunc(currentNode);
	return found
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
