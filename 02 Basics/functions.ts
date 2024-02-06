//^ eg 1:
function addNum(num: number) {
  return num + 1 }
addNum(7)

//^ eg: 2:
function getUpper(val: string) {
  return val.toUpperCase()}
getUpper("india")

//^ eg: 3:
function signUpUser(name: string, email: string, isPaid: boolean) {
  return name }
signUpUser("ram","ram@gmail.com",false)

//^ eg: 4 (Default Values)
function LoginUser(name: string, age: number, isLoggedIn: boolean = false) {}
LoginUser("virat",20)

//^ eg: 5
function myVal(num: number):string {
  if(num > 5){
    return "larger"
  }
  return "hello"
  // return  5
}

//^ eg: 6
const num = (val: number) : string => {
  return `number is ${val}`
}
num(5)

//^ eg 7
let heros = ["thor", "spiderman", "ironman"]
// let number = [254,25,55]
// let combination = [254,"sea",55]
heros.map((hero): string => {
  return `${hero} has arrived`
})

//^ eg 8
function consoleError(error : string) : void {
  console.log(error);
} 

//^ eg 9
function handleError(error : string) : never {
  throw new Error(error)
}

export {}
