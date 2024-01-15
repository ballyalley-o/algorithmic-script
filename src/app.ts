import { SortBrew, NumbersArray, CharactersArray } from './classes'
import { numbers, charArray } from './mock'

const numbersArray = new NumbersArray(numbers)
const sortBrew = new SortBrew(numbersArray)

sortBrew.sort()
sortBrew.print()

const charactersArray = new CharactersArray('dcdd12dqwq')
const sortBrewChar = new SortBrew(charactersArray)
sortBrewChar.sort()

console.log(charactersArray.data)
