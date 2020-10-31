class Node { 
    constructor(data){
        this.data = data;
        this.next = null;
    };

    // sets this Node's next property
    setNextNode(data){

        // if the data being passed is of class Node
        if(data instanceof Node || data === null){
            // then set the next property to the data being passed
            this.next = data;
        } else{
            // else
            // throw an error indicating the data being passed 
            // must be of class Node
            throw new Error("Data must be of class Node");
        };
    };

    // returns this Node's next property
    getNextNode(){
        return this.next;
    }
};

module.exports = Node;