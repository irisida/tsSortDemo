import { Sorter } from './Sorter';

class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    constructor() {
        super();
    }

    add(data: number): void {
        const node = new Node(data);

        /**
         * add will always add a data to the end of the list so we
         * must determine what is the tail. To do so we can simply
         * loop while the current tail has a next value, when a null
         * is found we set the tail.next to this new node. This
         * effectively makes the new node we created the end of
         * the list at this time.
         */

        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        /**
         * to get the length property of a linkedList we must again traverse
         * the list and build a counter that can be returned.
         */

        if (!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }

        return length;
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }

        let counter = 0;

        /**
         *  manually annotate because the end case can be null
         */
        let node: Node | null = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
