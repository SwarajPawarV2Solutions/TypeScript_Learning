function calculator () :any{
    function subtract(num1:number,num2:number):number{
        return num1 -num2;
    }
     return subtract;
  }

  var sub = calculator();
  console.log(sub(20,5));
  