class TreeNode{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    addChild(child){
        if(child instanceof TreeNode){
            this.children.push(child);
        } else {
            this.children.push( new TreeNode(child));
        };
    }

    removeChild(childToRemove){
        const length = this.children.length;

        this.children = this.children.filter( child => {
            return childToRemove instanceof TreeNode ? child !== childToRemove : child.data !== childToRemove;
        });

        if( length === this.children.length){
            this.children.forEach( child => child.removeChild(childToRemove));
        };
    }

    depthFirstTraversal(){

        this.children.forEach( child => child.depthFirstTraversal());
    }

    breadthFirstTraversal(){
        let queue = [this];

        while( queue.length > 0){
            const current = queue.shift();

            queue = queue.concat(current.children);
        };
    }
};

module.exports = TreeNode;