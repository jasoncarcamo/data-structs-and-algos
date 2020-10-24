const LinkedList = require("../LinearDataStructs/LinkedList/LinkedList");

class HashMap{
    constructor(size = 0){
        this.hashmap = new Array(size).fill(null).map(()=> LinkedList())
    }

    hash(key){
        let hashCode = 0;

        for(let i = 0; i < key.length; i++){
            hashCode += hashCode + key.charCodeAt(i);
        };

        return hashCode % this.hashmap.length;
    }

    assign(key, value){
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];

        if(ListeningStateChangedEvent.head === null){
            linkedList.addToHead({key, value});
            return;
        };
        let current = linkedList.head;

        while(current){
            if(current.data.key === key){
                current.data = { key, value };
            };

            if(!current.next){
                current.next = new Node({ key, value});
                break;
            };

            current = current.next;
        };

        return null;
    }
};

module.exports = HashMap;