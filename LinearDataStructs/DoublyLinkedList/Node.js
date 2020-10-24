class Node {
    constructor(data){
        this.data = data;
        this.previous = null;
        this.next = null;
    }

    getPreviousNode(){
        
        return this.previous;
    }

    setPreviousNode(data){

        if((data instanceof Node) || data === null){
            this.previous = data; 
        } else{
            throw new Error("data must be of class Node");
        };  
    };

    getNextNode(){

        return this.next;
    };

    setNextNode(data){

        if((data instanceof Node) || data === null){ 
            this.next = data;
        } else{
            throw new Error("data must be of class Node");
        };
    };
};

module.exports = Node;