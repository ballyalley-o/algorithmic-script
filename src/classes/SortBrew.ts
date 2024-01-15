/**
 * Abstract class representing a sorting algorithm.
 */
export abstract class SortBrew {
  /**
   * The length of the array to be sorted.
   */
  abstract length: number

  /**
   * Compares two elements in the array.
   * @param leftIndex - The index of the left element.
   * @param rightIndex - The index of the right element.
   * @returns True if the left element is smaller than the right element, false otherwise.
   */
  abstract compare(leftIndex: number, rightIndex: number): boolean

  /**
   * Swaps two elements in the array.
   * @param leftIndex - The index of the left element.
   * @param rightIndex - The index of the right element.
   */
  abstract swap(leftIndex: number, rightIndex: number): void

  /**
   * Sorts the array using the implemented sorting algorithm.
   */
  sort(): void {
    const { length } = this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }

  /**
   * Prints the current state of the array.
   */
  print(): void {
    console.log(this)
  }
}
