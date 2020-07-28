class Node { 
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    };

    setNextNode(data){

        if(!(data instanceof Node)){
            throw new Error("Data must be of Node type")
        };

        this.next = data;
    };

    getNextNode(){

        return this.next;
    }
};

module.exports = Node;