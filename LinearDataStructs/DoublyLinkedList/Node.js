class Node {
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }

    // sets previous node
    setPreviousNode(data){
        // if the data being passed is of class Node
        if(data instanceof Node || data === null){
            // set this previous to data passed
            this.previous = data;
        } else{
            // throw an error indicating the data being passed 
            // must be of class Node
            throw new Error("Data must be of class Node");
        };
    }

    // gets previous node
    getPreviousNode(){
        // return this previous value
        return this.previous;
    }

    // sets next node
    setNextNode(data){
        // if the data being passed is of class Node
        if(data instanceof Node || data === null){
            // set this next to data passed
            this.next = data;
        } else{
            // throw an error indicating the data being passed 
            // must be of class Node
            throw new Error("Data must be of class Node");
        };
    }

    // gets next node
    getNextNode(){
        // return this next value
        return this.next;
    }
};

module.exports = Node;