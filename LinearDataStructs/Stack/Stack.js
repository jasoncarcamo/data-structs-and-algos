const LinkedList = require("../LinkedList/LinkedList");

class Stack {
    constructor(maxSize = Infinity){
        this.stack = new LinkedList();
        this.max = maxSize;
        this.size = 0;
    };

    push(data){
        if(this.hasRoom()){
            this.stack.addToHead(data);
            this.size++;
        } else{
            throw new Error("Stack is full");
        };
    }

    pop(){
        const data = this.stack.removeHead();

        if(this.size > 0 && !this.isEmpty()){
            this.size--;

            return data;
        } else{
            throw new Error("Stack is empty")
        }
    }

    peek(){

        if(this.size > 0 && !this.isEmpty()){
            return this.stack.head.data;
        } else{
            return null;
        };
    }

    hasRoom(){
        if(this.size < this.maxSize){
            return true;
        } else{
            return false;
        }
    }

    isEmpty(){
        if(this.size === 0){
            return true;
        } else{
            return false;
        }
    }
};

module.exports = Stack;