const numbers: number[] = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 1100)
)

const moreNumbers: number[] = new Array(10).fill(0).map((_, index) => index + 1)

export { numbers, moreNumbers }
