import { SortBrew } from './SortBrew'

/**
 * Represents an array of characters that can be sorted.
 */
export class CharactersArray extends SortBrew {
  /**
   * Creates a new instance of CharactersArray.
   * @param data - The array of characters or string to be sorted.
   */
  constructor(public data: string[] | string) {
    super()
  }

  /**
   * Gets the length of the CharactersArray.
   */
  get length(): number {
    return this.data.length
  }

  /**
   * Compares two characters at the specified indices.
   * @param leftIndex - The index of the left character.
   * @param rightIndex - The index of the right character.
   * @returns True if the left character is greater than the right character, false otherwise.
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    )
  }

  /**
   * Swaps two characters at the specified indices.
   * @param leftIndex - The index of the left character.
   * @param rightIndex - The index of the right character.
   */
  swap(leftIndex: number, rightIndex: number): void {
    if (this.data instanceof Array) {
      const characters = this.data
      const leftHand = characters[leftIndex]
      characters[leftIndex] = characters[rightIndex]
      characters[rightIndex] = leftHand
      return
    }

    const characters = this.data.split('')

    const leftHand = characters[leftIndex]

    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }
}
