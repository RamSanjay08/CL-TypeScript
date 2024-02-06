interface User {
  readonly dbId: number;
  userId: number;
  email: string;
  googleId?: string;
  // stratTrail: () => string
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

//^ Reopening Interfaces
interface User {
  githubToken: string
}

//^ Inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner"
} 

const ram: Admin = {
  dbId: 25,
  userId: 45,
  email: "ram@gmail.com",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "ram", off: 10) => {
    return 25;
  },
  githubToken: "Github08",
  role: "admin"
};