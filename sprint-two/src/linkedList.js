var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if (!list.head){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    var newhead = list.head.next
    var formerhead = list.head
    delete list.head
    list.head = newhead
    return formerhead.value
  };

  list.contains = function(target){
    var currentNode = list.head;
    var found = false;

    while (currentNode.next !== null){
      if (currentNode.value === target) {
        found = true;
        return found;
      } 
      currentNode = currentNode.next
    } 

    if (currentNode.next === null) {
      if (currentNode.value === target) {
        found = true;
        return found;
      } 
    }

    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
