
interface Person {
    name: string;
    age: number;
  }
  
  let person: Person = {
    name: "John",
    age: 30,
  };
  
  console.log(person); // Output: { name: 'John', age: 30 }


enum Color {
    Red,
    Green,
    Blue,
  }
  
  let color: Color = Color.Green;
  
  console.log(color); // Output: 1 (index of Green in the enum)
  
// Tuples
let tuple: [string, number] = ["John", 25];

console.log(tuple); // Output: [ 'John', 25 ]


// Unknown
let unknownValue: unknown = 10;

if (typeof unknownValue === "number") {
  let num: number = unknownValue;
  console.log(num); // Output: 10
}


// Never
function throwError(message: string): never {
    throw new Error(message);
  }

  try {
    throwError("Something went wrong");
  } catch (error) {
    //console.error(error.message); // Output: Something went wrong
  }
  
  // Function that never returns
  function infiniteLoop(): never {
    while (true) {
      // Infinite loop
    }
  }
  
//   let result: never = infiniteLoop();
//   console.log(result); // This line will never be reached



//union type
function printID(id: number | string): void {
    console.log(`ID: ${id}`);
  }
  
  printID(123);       
  printID("ABC");     
  // printID(true);   // Error

// src/typeAliases.ts

// Type alias 
type Employee = {
    name: string;
    role: string;
    age: number;
  };
  
  const employee1: Employee = {
    name: "John Doe",
    role: "Developer",
    age: 30,
  };
  console.log(employee1);
  
  const employee2: Employee = {
    name: "Jane Smith",
    role: "Designer",
    age: 25,
  };
  console.log(employee2);

//Utility Keys

// Partial 
interface User {
    id: number;
    name: string;
    age: number;
  }
  
  type PartialUser = Partial<User>;
  
  const partialUser: PartialUser = {
    name: 'John',
  };
  
  console.log(partialUser); // { name: 'John' }
  
  
  //Readonly 
  type ReadonlyUser = Readonly<User>;
  
  const readonlyUser: ReadonlyUser = {
    id: 1,
    name: 'Alice',
    age: 25,
  };

  
  // Pick 
  type UserSubset = Pick<User, 'name' | 'age'>;
  
  const userSubset: UserSubset = {
    name: 'Charlie',
    age: 30,
  };
  
  console.log(userSubset); // { name: 'Charlie', age: 30 }
  
  
  // Omit
  type UserWithoutAge = Omit<User, 'age'>;
  
  const userWithoutAge: UserWithoutAge = {
    id: 2,
    name: 'Eve',
  };
  
  console.log(userWithoutAge); // { id: 2, name: 'Eve' }
  
  
  // Record 
  type UserRecord = Record<string, User>;
  
  const userRecord: UserRecord = {
    'user1': { id: 3, name: 'Grace', age: 28 },
    'user2': { id: 4, name: 'David', age: 35 },
  };
  
  console.log(userRecord);
  
  
  // Exclude 

  type Primitive = string | number | boolean
  const value: Exclude<Primitive, string> = true;
  
    
  // Utility type: NonNullable
  type NullableNumbers = number | null | undefined;
  type NonNullableNumbers = NonNullable<NullableNumbers>;
  
  const nonNullableNumber: NonNullableNumbers = 42;
  console.log(nonNullableNumber); // 42
  

  class Rectangle {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  console.log(`Area of the rectangle: ${rectangle.getArea()}`);

  
  
  
  