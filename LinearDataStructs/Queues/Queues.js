const LinkedList = require("../LinkedList/LinkedList");

class Queues {
    constructor(maxSize = Infinity){
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    };

    isEmpty(){
        return this.size === 0;
    }

    hasRoom(){
        return this.size < this.maxSize;
    }

    enqueue(data){
        
        if(this.hasRoom()){
            this.queue.addToTail(data);
            this.size++;

            console.log(`Added ${data} to queue! Queue size is now ${this.size}`);
        } else{
            
            throw new Error("Queue is full!");
        }
        
    }

    dequeue(){
        if(!this.isEmpty()){
            const data = this.queue.removeHead();

            this.size--;
            console.log(`Removed ${data} from queue! Que size is now ${this.size}`);
            
            return data;
        } else{
            throw new Error("Queue is empty!");
        }
    }
};

module.exports = Queues;