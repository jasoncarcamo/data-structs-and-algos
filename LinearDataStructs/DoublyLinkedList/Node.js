class Node {
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }

    setPreviousNode(data){
        if(data instanceof Node || data === null){
            this.previous = data;
        } else{
            throw new Error("Data must be of class Node");
        };
    }

    getPreviousNode(){
        return this.previous;
    }

    setNextNode(data){
        if(data instanceof Node || data === null){
            this.next = data;
        } else{
            throw new Error("Data must be of class Node");
        };
    }

    getNextNode(){
        return this.next;
    }
};

module.exports = Node;