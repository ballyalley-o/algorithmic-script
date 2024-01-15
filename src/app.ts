import { CharactersArray } from './classes'
import { numbers, charArray } from './mock'

const charactersArray = new CharactersArray(charArray)
charactersArray.sort()

console.log(charactersArray)
