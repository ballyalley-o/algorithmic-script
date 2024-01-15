const adjectives = [
  'Heisenberg',
  'Blue',
  'Saul',
  'Gus',
  'Los Pollos',
  'Meth',
  'Walter',
  'Jesse',
  'Skyler',
  'Hank',
]

const nouns = [
  'Chemistry',
  'Methamphetamine',
  'Lawyer',
  'Cartel',
  'Lab',
  'Money',
  'Family',
  'DEA',
  'Breaking Bad',
]

const charArray: string[] = []

function generateRandomName(): string {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)]
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
  const randomString = `${randomAdjective} ${randomNoun}`

  return randomString
}

for (let i = 0; i < 12; i++) {
  charArray.push(generateRandomName())
}

export { charArray }
