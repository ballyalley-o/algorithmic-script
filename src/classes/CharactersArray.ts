import { SortBrew } from './SortBrew'

export class CharactersArray extends SortBrew {
  constructor(public data: string[] | string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    )
  }

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
