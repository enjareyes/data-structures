var BinarySearchTree = function(value){
	var newBinary=Object.create(BinarySearchTree.binaryMethods)
	newBinary.value=value
	newBinary.left = undefined
	newBinary.right = undefined
	return newBinary
};

BinarySearchTree.binaryMethods={}

BinarySearchTree.binaryMethods.insert = function(value){
	var newTree = new BinarySearchTree(value)
	var currentParent = this;

	var recursive=function(parent){

		if (parent.value<value){
			if (parent.right){
				recursive(parent.right)  //call recursion on new parent(right)
			} else {
				parent.right=newTree
			}
		}else{
			if (parent.left){
				recursive(parent.left)  //call recursion on new parent(leftie)
			} else {
				parent.left=newTree
			}
		}
	}
	recursive(currentParent)
}

BinarySearchTree.binaryMethods.contains=function(target){
	var currentParent = this;
	var found=false;

	var recursive=function(parent){

		if (parent.value===target){
			found=true;
			return found;
		}else{
			if (parent.value<target){
				if (parent.right){
					recursive(parent.right);
				}
			}else{
				if (parent.left){
					recursive(parent.left);
				}
			}
			return found	
		}
	}
	recursive(currentParent)
	return found
}

BinarySearchTree.binaryMethods.depthFirstLog=function(func){
	var currentParent = this;

	var recursive = function(parent){
		func(parent.value)

		if (parent.left){
			recursive(parent.left);
		} 

		if (parent.right){
			recursive(parent.right);
		} 
	}

	recursive(currentParent)
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Insertion: O(log(n))
// Deletion: O(log(n))
// Search: O(log(n))
