var email:string | null = prompt("Enter Mail Id");
 if (email != null){
var atposition:number = email.indexOf('@');
var dotposition:number = email.indexOf('.');

if(atposition == -1 || dotposition == -1){
    alert("Invalid Mail Id")
}else {
    alert("Valid Maild Id")
}
 }