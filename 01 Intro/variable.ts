//& string
let userName: string = "Ram Sanjay";
userName.toUpperCase();
console.log(userName);

//& number
let userId: number = 544444.6;
userId.toFixed();

//&& boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);

//^ Type Infernce
// let userId = 544444.6;
// userId.toFixed();

//^ Not to use any keyword
let hero :string;
function getHero(){
  return "thor"
}
hero = getHero()

export {};
 
