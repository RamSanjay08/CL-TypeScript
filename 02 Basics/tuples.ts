// const users: (string | number | boolean)[] = ["hello",true,55]
//^ eg: 1
const usersA: [String, number, boolean] = ["ram", 45,true]
const rgb: [number, number,number] = [255,123,112]


//^ eg 2
type User = [number,string]

const newUsers: User = [112, "ramsanjaydev08@gmail.com"]
newUsers[1] = "snaj@gmail.com"