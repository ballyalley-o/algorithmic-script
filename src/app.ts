import { SortBrew, NumbersArray } from './classes'
import { numbers, charArray } from './mock'

const numbersArray = new NumbersArray(numbers)
const sortBrew = new SortBrew(numbersArray)

sortBrew.sort()
sortBrew.print()
