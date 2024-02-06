//^ eg:1
const superHeros: string[] = [] //^ Way 1
const number: Array<number> = [] //^ Way 2
number.push(25)
superHeros.push("spiderman","batman")

//^ eg:2
type User = {
  name: string,
  isPaid: boolean
}
const allUsers: User[] = []

//^ eg:3 (array of array)
const MlModels : number[][] = [
  [255,555,444],
  []
]
