import { RESPONSE } from '../constants'
import { SortBrew } from './SortBrew'

class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

/**
 * Represents a linked collection.
 */
export class LinkedCollection extends SortBrew {
  head: Node | null = null

  /**
   * Gets the length of the linked collection.
   */
  get length(): number {
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head

    while (node.next) {
      length++
      node = node.next
    }

    return length
  }

  /**
   * Adds a new node with the specified data to the linked collection.
   * @param data - The data to be added.
   */
  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  /**
   * Retrieves the node at the specified index in the linked collection.
   * @param index - The index of the node to retrieve.
   * @returns The node at the specified index.
   * @throws Error if the index is invalid.
   */
  at(index: number): Node {
    if (!this.head) {
      throw new Error(RESPONSE.GENERAL.INVALID_INDEX.message)
    }

    let counter = 0
    let node: Node | null = this.head

    while (node) {
      if (counter === index) {
        return node
      }

      counter++

      node = node.next
    }

    throw new Error(RESPONSE.GENERAL.INVALID_INDEX.message)
  }

  /**
   * Compares the nodes at the specified indices in the linked collection.
   * @param leftIndex - The index of the left node.
   * @param rightIndex - The index of the right node.
   * @returns True if the left node's data is greater than the right node's data, false otherwise.
   * @throws Error if the linked collection is empty.
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error(RESPONSE.GENERAL.EMPTY_LIST.message)
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  /**
   * Swaps the nodes at the specified indices in the linked collection.
   * @param leftIndex - The index of the left node.
   * @param rightIndex - The index of the right node.
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  /**
   * Prints the data of all nodes in the linked collection.
   */
  print(): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
