function add(num1:number,num2:number):any{
    return num1 + num2;
  }
  
  // Function as Parameter
  function calculator(fun:any):void{
    console.log(fun(10,20));
    
  }

  function display(id:number,name:string,role?:string){
    console.log("Id",id);
    console.log("Name",name);
    if(role!=undefined){
    console.log("role",role);
    }
  }

  display(1,"Swaraj")

  calculator(add)
  
  
  