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
			if (parent.right===undefined){
				parent.right=newTree
			} else {
				var newParent=parent.right //assign new parent as 'right' value
				recursive(newParent)  //call recursion on new parent(right)
			}
		}else{
			if (parent.left===undefined){
				parent.left=newTree
			} else {
				var newParent=parent.left  //assign new parent as 'leftie' value
				recursive(newParent)  //call recursion on new parent(leftie)
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
				if (parent.right!==undefined){
					var newParent = parent.right;
					recursive(newParent);
				}else{
					return found;
				}

			}else{
				if (parent.left!==undefined){
					var newParent=parent.left;
					recursive(newParent);
				}else{
					return found;
				}
			}	
		}
	}
	recursive(currentParent)
	return found
}

BinarySearchTree.binaryMethods.depthFirstLog=function(func){
	var currentParent = this;

	var recursive = function(parent){
		func(parent.value)

		if (parent.left!==undefined){
			var newParent=parent.left;
			recursive(newParent);
		} 

		if (parent.right!==undefined){
			var newParent=parent.right;
			recursive(newParent);
		} 
	}

	recursive(currentParent)
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
