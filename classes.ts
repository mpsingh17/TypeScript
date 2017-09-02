interface PersonInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class Person implements PersonInterface {
  name: string;
  email: string;
  age: number;

  constructor(name:string, email:string, age:number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`${this.name} has been created with email ${this.email}`);
  }

  register() {
    // return this.name;
    console.log(this.name + ' is registered');  
  }

  payInvoice() {
    console.log(`${this.name} paid invoice`);
  }
}

// let person = new Person('Manpreet', 'test@test.com', 23);
// person.register();
// console.log(person.age);

class Member extends Person {
  city: string;

  constructor(city: string, name: string, email: string, age: number) {
    
    //super is calling constructor of parent class.
    super(name, email, age);

    this.city = city;
    console.log(`${this.name} is in ${this.city}`);
    
  }
  
  //calling method from parent class using super.
  payInvoices() {
    super.payInvoice();
  }
}

let manpreet = new Member("Auckland", "Manpreet", "test@tes.com", 23);
manpreet.payInvoices();

