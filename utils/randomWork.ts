export const getRandomColors = (cnt : number) => {
  const colors : string[] = []
  for (let i = 0; i < cnt; i++) {
    colors.push(randomColor())
  }
  return colors
}

const randomColor = () => {
  let color : string = "#"
  const values = ['a', 'b', 'c', 'd', 'e']
  color = color + (Math.floor(Math.random() * 9).toString())
  color = color + values[Math.floor(Math.random() * values.length)]
  color = color + (Math.floor(Math.random() * 9).toString())
  color = color + values[Math.floor(Math.random() * values.length)]
  color = color + (Math.floor(Math.random() * 9).toString())
  color = color + values[Math.floor(Math.random() * values.length)]
  return color
}

export const getRand = (cnt: number) => {
  return Math.floor(Math.random() * cnt)
}