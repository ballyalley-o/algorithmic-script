import { SortBrew } from './SortBrew'

/**
 * Represents an array of numbers.
 */
export class NumbersArray extends SortBrew {
  /**
   * Creates a new instance of NumbersArray.
   * @param data - The array of numbers.
   */
  constructor(public data: number[]) {
    super()
  }

  /**
   * Gets the length of the array.
   */
  get length(): number {
    return this.data.length
  }

  /**
   * Compares two elements in the array.
   * @param leftIndex - The index of the left element.
   * @param rightIndex - The index of the right element.
   * @returns True if the left element is greater than the right element, false otherwise.
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  /**
   * Swaps two elements in the array.
   * @param leftIndex - The index of the left element.
   * @param rightIndex - The index of the right element.
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }

  /**
   * Sorts the array in ascending order.
   */
  sort(): void {}
}
