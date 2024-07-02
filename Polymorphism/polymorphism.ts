class Employee{
    public firstName:string;
    public lastName:string;
    public designation:string;

    public print():void{
        console.log("Employee Details");
        
    }
}

 // Class Manager
class Manager extends Employee{

  constructor(firstName:string,lastName:string,designation:string){
      super();
      this.firstName = firstName;
      this.lastName = lastName;
      this.designation = designation;
  }

    public print():void{
        super.print();
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
        
    }
}

// class Lead
class Lead extends Employee{

    constructor(firstName:string,lastName:string,designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
  
      public print():void{
          super.print();
          console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
          
      }
  }

// Class Developer
class Developer extends Employee{

    constructor(firstName:string,lastName:string,designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
  
      public print():void{
          super.print();
          console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
          
      }
  }


  let employees:Employee[] = new Array(new Manager("Swaraj","Pawar","Manager"),new Lead("Abhishek","Singh","Lead"), new Developer("Mayank","Jain","Developer"))
   for(var employee of employees){
    employee.print();
   }