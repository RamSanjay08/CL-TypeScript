//^ (Union "|" )
//^ eg: 1 
let score: string | number = 33
score = 50
score = "165"

//^ eg: 2
type User = {
  userName: string;
  id: number;
}

type Admin = {
  admin: string;
  id: number;
}

let Data: User | Admin = {userName: "ram", id: 455}
Data = {admin: "ram", id: 455}

//^ eg: 3
function getDbId(id: string | number) {
  console.log(`DB ID IS ${id}`);
}
getDbId("852")
getDbId(55)

//^ eg: 4
function getDbId2(id: string | number) {
  if(id === "string") {
    id.toLowerCase()
  }
}

//^ eg: 5 (in array)
const data: number[] = [45,85,52]
const data2: string[] = ["ram","charan","gowtham"]
const data3: (string | number | boolean )[] = [45,"hello ts",true,55,"hello"] //& to pass multiple types of values
 
//^ eg: 6 
let seatAllotement: "aisle" | "middle" | "window"
seatAllotement = "aisle"
// seatAllotement = "crew" //& won't work