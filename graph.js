/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (const vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    // remove from all adjacency lists
    for (const adj of vertex.adjacent) {
      adj.adjacent.delete(vertex);
    }

    // remove from nodes
    this.nodes.delete(vertex);

  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    // init a stack with 'start'
    // init a set for nodesSeen
    // base case: stack is empty
    // base case: start.value === this.value

    // remove 'start'
    // add start to nodesSeen
    // add start's adjacent nodes to stack

    let searchStack = [start];
    let visitedNodes = new Set();

    while (searchStack.length) {
      let currentNode = searchStack.pop();

      visitedNodes.add(currentNode.value);

      for (let adj of currentNode.adjacent) {
        if (!visitedNodes.has(adj.value)) {
          searchStack.push(adj);
        }
      }
    }

    return [...visitedNodes];
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let searchQueue = [start];
    let visitedNodes = new Set();

    while (searchQueue.length) {
      let currentNode = searchQueue.shift();

      visitedNodes.add(currentNode.value);

      for (let adj of currentNode.adjacent) {
        if (!visitedNodes.has(adj.value)) {
          searchQueue.push(adj);
        }
      }
    }

    return [...visitedNodes];
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {

  }
}

module.exports = { Graph, Node }
