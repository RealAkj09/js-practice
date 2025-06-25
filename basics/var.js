const accountId = 14831
let accountEmail = "Ayush@gmail.com"
var accountPassword = "123456789"
accountCity = "Madhubani"
let accountState;

//accountId = 2 const change not allowed
accountEmail = "Hello@gmail.com"
accountPassword = "87654321"
accountCity = "Patna"
 
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* Prefer not to use var
because of issue in block scope and
functional scope*/