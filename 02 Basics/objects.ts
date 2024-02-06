//^ eg: 1
function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "ram", isPaid: true,email: "ram@gmail.com"}

createUser(newUser)

//^ eg: 2
function createCourse() : {name: string, price: number} {
  return {name: 'ram', price: 5}
}


//^ eg 3 Type Aliases
type Users = {
  name: string;
  age: number;
  isPaid: boolean;
}

function userLogin(user: Users) : Users {
  return {name:"ram", age: 3, isPaid: true}
}
userLogin({name:"ram", age: 3, isPaid: true})

//^ eg 4 (read only) and ?

type  CreateAccount = {
   readonly _id: string;
  name: string;
  age: number;
  isPaid: boolean
  createdBy?: string //& ? which indicates not mandatory to access in myaccounts 
}

const MyAccount : CreateAccount = {
  _id: "455556",
  name: "ram",
  age: 25,
  isPaid: true
}

MyAccount.name = "sanjay"
// MyAccount._id = '5222' //& we cannot assign new values because it using readonly property


//^ eg 5 (&)
type  CardNumber = {
  cardnum: string
}

type  CardName = {
  cardName: string
}

type CardDetails = CardNumber & CardName & {
  cardDetails: string; }


