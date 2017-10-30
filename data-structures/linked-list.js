// LinkedLists are data structures that hold a sequence of linked nodes. Each node contains data and a pointer, which can point to another node. Like a scavenger hunt

// each node contains info about a step or a place in the scavenger hunt - "You've reached B Town!" and the pointer has a memory location to go to the next place. Because each node needs the ability to store data and point to the next place we use the data property to store our data and the next property to say "hey, go here next"


function Node(val){
  this.val = val;
  this.next = null;
}

function SinglyList(){
  this.head = null;
  this.length = 0;  
}

SinglyList.prototype.add = function(val){
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.length++;
  }
}


// class Node {
//   constructor(data){
//     this.val = data;
//     this.next = null;
//   }
//   getVal(){
//     return this.val;
//   }  
// }

// class SinglyList {
//   constructor(){
//     this.length = 0;
//     this.head = null;
//   }
//   // add(val) - adds a node to the list
//   add(x){
//     let node = new Node(x);
//     // check if list is empty
//     if (!this.head) {

//       this.head = node; 

//       this.length++;    
//     }
//   }

  // searchNodeAt(position) - searches for a node at n-poisition in the list

  // remove(position) - remove 
//}