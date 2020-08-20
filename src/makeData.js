import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  return {
    team: namor.generate({ words: 1, numbers: 0 }),
    winEfficiency: namor.generate({ words: 1, numbers: 0 }),
    value2019_20: Math.floor(Math.random() * 30),
    wins: Math.floor(Math.random() * 100),
    rating2k: Math.floor(Math.random() * 100),
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson()
      }
    })
  }

  return makeDataLevel()
}
