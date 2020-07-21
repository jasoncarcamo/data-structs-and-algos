const Node = require("./Node");

class BinarySearchTree{
    constructor(){
        //root of a binary search tree
        this.root = null;
    };

    //creates new node to insert and calls inserNode
    insert(data){
        var newNode = new Node (data);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        };
    };

    insertNode(node, newNode){

        // if the data is less the node than move data to the left
        if(newNode.data < node.data){

            // if left is null insert node here
            if(node.left === null){
                node.left = newNode;
            } else{
                
                // if left is not null recur until null is found
                this.insertNode(node.left, newNode);
            };

        //if the data is more than the node data move to right of tree    
        } else{

            // if right is null inser node here
            if(node.right === null){
                node.right = newNode;
            } else{
                
                // if right is not null recur until null is found
                this.insertNode(node.right, newNode);
            };
        };

    };

    remove(data){

        //root is re-initialized with root of  modified tree
        this.root = this.removeNode(this.root, data);
    };

    //Method to remove node with a given data
    //recurs its recurs over the tree to find the data and removes it
    removeNode(node, key){

        // if root is null the tree is empty
        if(node === null){

            return null;

        // if data to be deleted is less than roots data then move to left subtree
        } else if( key < node.data){

            node.left = this.removeNode(node.left, key);

            return node;

        // if data to be deleted is greater than roots data then move to right subtree
        } else if( key > node.data){

            node.right = this.removeNode(node.right, key);

            return node;

        // if data is similar to the root's data then delete this node
        } else{

            // deleting node with no children
            if(node.left === null && node.right === null){

                node = null; 

                return node;

            };
            
            if(node.left === null){

                node = node.right;

                return node;

            } else if(node.right === null){
                node = node.left;

                return node
            };

            let aux = this.findMinNode(node.right);

            return node;
        };
    };

    // help funtions start here

    // finds the minimum node in tree searching starts from given node
    findMinNode(node){

        // if left of a node if null then it must be minimum node
        if(node.left === null){

            return node;
        } else {

            return this.findMinNode(node.left);
        };
    };

    getRootNode(){

        // return root of the tree
        return this.root;
    };

    // seach for a node with given data
    search(node, data){

        // if trees is empty return null
        if(node === null){

            return null;

        // if data is less than nodes data move left
        } else if(data < node.data){

            return this.search(node.left, data);

        // if data is greater than nodes data move right
        } else if (data > node.data){

            return this.search(node.right, data)

            // if data is equal to the node data
        } else{ 

            return node;
        }
    }
}

const BST = new BinarySearchTree();

BST.insert(1)
console.log(BST);

BST.insert(2)
console.log(BST);

BST.insert(3)
console.log(BST);

BST.insert(4)
console.log(BST);

BST.insert(5)
console.log(BST);

BST.remove(2)
console.log(BST);

BST.insert(6)
console.log(BST);