

var Graph = function(){
	this.graphNodes = {};
};

Graph.prototype.addNode = function(value){
	this.graphNodes[value] = {edges: []};
};

Graph.prototype.contains = function(node){
	return !(this.graphNodes[node]=== undefined) 
};

Graph.prototype.removeNode = function(node){
	delete this.graphNodes[node]
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return (this.graphNodes[fromNode].edges.indexOf(toNode) > -1) //return if the edges contains the toNode
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.graphNodes[fromNode]["edges"].push(toNode)
	this.graphNodes[toNode]["edges"].push(fromNode)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var firstEdge = this.graphNodes[fromNode]['edges'].indexOf(toNode)
	var secondEdge = this.graphNodes[toNode]['edges'].indexOf(fromNode)
	delete this.graphNodes[fromNode]["edges"][firstEdge]
	delete this.graphNodes[toNode]["edges"][secondEdge]
};

Graph.prototype.forEachNode = function(cb){
	for (var key in this.graphNodes) {
		cb(key)
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Insertion: O(1)
// Deletion: O(1)
// Search: O(1)




