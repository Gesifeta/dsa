// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength(time) {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        /* 1. to implement in linear time complexity O(n), we need to loop through the nodes and count number of nodes
        2. to implement in constant growth time complexity O(1), a length propert should be added
        */
        let count = 0;
        if (time === 0) return this.length;
        //With O(n) complexity
        else {
            let node = this.head;
            while (node.next) {
                node = node.next;
                count++
            }
            count++

        }

        return count;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here
        //the time complexity would be O(n) as whe have to loop through number of nodes.
        let sum = 0;
        //to hold the first node
        let node = this.head;
        //assign the first value to sum
        sum = this.head.value
        while (node.next) {
            //everytime it loops, add next.value to sum
            sum += node.next.value;
            node = node.next
        }
        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here
        //first add all nodes while counting number of nodes or you can just divide sumOfNodes by length

        return this.sumOfNodes(1) / this.length //==> in this case time complexity O(n)


    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        // first start from first node and countinue until n
        //then return nodes at n
        let node = this.head//to hold the first node;
        let count = 0; //to hold number of iterations
        if (n === 1) return this.node;
        while (node.next) {
            count++;
            node = node.next;
            if (count === n) return node;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        let node = this.head, count = 0;
        while (node.next) {
            count++;
            if (count === Math.ceil(this.length / 2)) return node;
            node = node.next;
        }
        // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let prev = null, current, next = null;
        current = this.head;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.head;

        // Write your hypothesis on the time complexity of this method here
    }
    reverseInPlace() {
        // Reverses the linked list in-place
        return this.reverse()
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++
        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        let index = 0;
        let current = this.head;
        while (index < Math.floor(this.length / 2)) {
            index++;
            current = current.next;
        }
        return current;

        // Write your hypothesis on the time complexity of this method here
    }
    display() {
        if (this.head === null) return;
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.value}==>`)
            current = current.next
        }
        console.log("Null")
    }
    reverse() {
        // Returns a new reversed version of the linked list
        if (this.head === null) return null;
        let prev = null, curr, next = null;
        //put head node to current;
        curr = this.head;
        //put current node to next;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
        return this.head;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        return this.reverse()
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
