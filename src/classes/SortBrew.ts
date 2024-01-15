import { ISortBrew } from '@src/interfaces'

export class SortBrew {
  constructor(public collection: ISortBrew) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }

  print(): void {
    console.log(this.collection)
  }
}
